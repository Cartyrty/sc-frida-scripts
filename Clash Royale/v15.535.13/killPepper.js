/*
Made by Cartyrty
This is a script to kill crypto on v15.535 on Clash Royale
I added some comments throughout the script explaining how it works
*/
class libg {
    static module = Process.findModuleByName("libg.so")
    static base = this.module.base

    static add(x) {return this.base.add(x)}
}

let infunc = false

class CryptoKiller {
    static init() {
        this.killEncryption()
        this.killDecryption()
    }

    static killEncryption() {
        Interceptor.attach(libg.add(0x1237590), { // auth function
            onEnter(args) {infunc = true},onLeave() {infunc = false}})
        Interceptor.replace(libg.add(0x1387FA4), new NativeCallback((a1, a2, a3, a4, a5, a6) => { // encrypter function
                Memory.copy(a3, a1, Number(a2)) // write unencrypted payload to encrypted payload
                console.log("[+] Skipped encryption");
                return 0; // return 0 (success)
        }, 'int', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer', 'pointer']));
        Interceptor.attach(libg.add(0x1213450), { // encrypted payload setter function
            onEnter(args) {
                if (!infunc) return; // so we can get specifically the call from the auth function
                const malloc = new NativeFunction(Module.findGlobalExportByName('malloc'),'pointer',['int'])
                const free   = new NativeFunction(Module.findGlobalExportByName('free'),'void',['pointer'])

                let noncelength = 80 // after encryption (which we just skipped) the auth function will append Client Secret Key and other crypto related stuff, we must next cut it off so the server receives it as normal
                let size = Number(args[2]) - noncelength

                let final = malloc(size) // realloc new pointer
                Memory.copy(final, args[1].add(noncelength), size) // shift pointer to cut off nonce (basically .slice in js) and copy it to final
                
                free(args[1]) // free orginal pointer since we aren't using it anymore  
                args[1] = final; // set it to final buffer
                args[2] = ptr(size); // resize size

                // console.log(args[1].readByteArray(Number(args[2])))
            }
        });
        Interceptor.attach(libg.add(0x1387838), { // login message specific message manager send message
            onEnter(args) {
                this.state = args[0] // state is checked, we must patch it to be 5 so it does not 
                this.state.add(168).writeU32(5) // write 5 to state
            }
        });
    }

    static killDecryption() {
        Interceptor.replace(libg.add(0x1249FA4), new NativeCallback(function() { // decrypter function
            console.log("[+] Skipped decryption");
            return 1; // do nothing and force success
        }, 'int', []));
    }
}

class Main {
    static ip = Memory.allocUtf8String("192.168.1.107")
    static port = Memory.allocUtf8String("9339")
    static main() {
        this.redirect()
        console.log(`Initlizing v15 crypto kill...`) 
        CryptoKiller.init()
    }
    static redirect() {
        
        Interceptor.attach(Module.getGlobalExportByName("getaddrinfo"), {
            onEnter(args) {
                try {
                    if (args[1].readUtf8String() === "9339") {
                        args[0] = Main.ip;
                        args[1] = Main.port;
                    }
                } catch (e) {
                    console.error(`Error hooking getaddrinfo ${e}`)
                }
            }
        }
    }
