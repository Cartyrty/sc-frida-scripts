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
            onEnter(args) {infunc = true;},onLeave() {infunc = false}})
        Interceptor.replace(libg.add(0x1387FA4), new NativeCallback((a1, a2, a3, a4, a5, a6) => { // encrypter function
                Memory.copy(a3, a1, Number(a2)) // write unencrypted payload to encrypted payload
                console.log("[+] Skipped encryption");
                return 0; // return 0 (success)
        }, 'int', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer', 'pointer']));
        Interceptor.attach(libg.add(0x1213450), { // encrypted payload setter function
            onEnter(args) {
                if (!infunc) return; // so we can get specifically the call from the auth function
                // After encryption (which we just skipped) the auth function will append Client Secret Key and other crypto related stuff to the header of the paylaod, we must next cut it off so the server receive it as normal
                args[1] = args[1].add(80) // move the payload pointer to cut off crypto header
                args[2] = args[2].sub(80) // resize the payload length
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
        Interceptor.replace(libg.add(0x0 /* the offset here was wrong, wait until I fix it*/), new NativeCallback(function() { // decrypter function
            console.log("[+] Skipped decryption");
            return 1; // do nothing and force success
        }, 'int', []));
    }
}

class Main {
    static ip = Memory.allocUtf8String("192.168.56.1")
    static port = Memory.allocUtf8String("9339")
    static main() {
        this.redirect()
        console.log(`Initializing v15 crypto kill...`) 
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
        })
    }
}

Main.main()
