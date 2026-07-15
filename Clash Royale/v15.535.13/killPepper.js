/*
Made by Cartyrty
This is a script to kill crypto on v15.535 on Clash Royale
I added some comments throughout the script explaining how it works
*/

const Config = {
    ip: "192.168.56.1",
    port: "9339"
}

class libg { // libg.so class for easy hooking
    static module = Process.findModuleByName("libg.so")
    static base = this.module.base

    static add(x) {return this.base.add(x)}
}

let inAuthFunc = false

class CryptoKiller {
    static init() {
        Interceptor.attach(libg.add(0x1237590), { // auth function
            onEnter(args) {inAuthFunc = true},onLeave() {inAuthFunc = false}})

        Interceptor.replace(libg.add(0x1387FA4), new NativeCallback((a1, a2, a3, a4, a5, a6) => { // encrypter function
                Memory.copy(a3, a1, Number(a2)) // write unencrypted payload to encrypted payload, where a3 is the pointer to the encrypted payload, a1 is the pointer to the unencrypted payload, and a2 is the length of the payload
                console.log("[+] Skipped encryption");
                return 0; // return 0 (success)
        }, 'int', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer', 'pointer']));

        Interceptor.attach(libg.add(0x1213450), { // encrypted payload setter function
            onEnter(args) {
                if (!inAuthFunc) return; // so we can get specifically the call from the auth function
                // After encryption (which we just skipped) the auth function will append Client Public Key and other crypto related stuff to the header of the paylaod, we must next cut it off so the server receive it as normal
                Memory.copy(args[1], args[1].add(80), Number(args[2].sub(80))) // copy the unencrypted payload to the original pointer, cutting off the crypto header. Also resize the payload length
                // console.log(args[1].readByteArray(Number(args[2])))
            }
        });

        Interceptor.attach(libg.add(0x1387838), { // login message specific message manager send message
            onEnter(args) {
                this.state = args[0] // pepper state is checked, we must patch it to be 5 meaning crypto is initialized (effectively skipping the crypto initialization)
            },
            onLeave(retval) {
                this.state.add(168).writeU32(5) // write 5 to state
                console.log("[+] Crypto initialization skipped")
            }
        });
    }
    // when all is said and done, crypto will not be properly initialized. Meaning we only need to skip the initial loginmessage encryption.
    // With crypto not properly initialized, the client will send the rest of the messages unencrypted by default
}

class Main {
    static ip = Memory.allocUtf8String(Config.ip)
    static port = Memory.allocUtf8String(Config.port)
    static main() {
        this.redirect()
        console.log(`Initializing v15 crypto kill...`) 
        CryptoKiller.init()
    }
    static redirect() {
        
        Interceptor.attach(Module.getGlobalExportByName("getaddrinfo"), {
            onEnter(args) {
                try {
                    if (args[1].readUtf8String() === "9339") { // 9339 is the default port for Clash Royale, we check if the port is 9339 to make sure we are hooking the correct getaddrinfo call
                        console.log(`[+] Redirecting server to ${Main.ip.readUtf8String()}:${Main.port.readUtf8String()}`)
                        args[0] = Main.ip; // set hostname to our ip
                        args[1] = Main.port; // set port to our port
                    }
                } catch (e) {
                    console.error(`Error hooking getaddrinfo ${e}`)
                }
            }
        })
    }
}

Main.main() // start the script
