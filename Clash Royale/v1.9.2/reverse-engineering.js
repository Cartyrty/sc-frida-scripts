/*
This script facilitates reverse engineering by logging the bytestream functions so you can see packet structure easily and if your values are going in correctly.

It also hooks onto the Debugger:: functions so you can see crash errors or warns such as "LogicClientHome::getSpellAt index out of bounds"
*/
const Config = {
    RedirectIP: true, // redirect the ip and port (set them below if true)
        ip: "192.168.56.1", // ip to redirect to
        port: "9339" // port to redirect to

}

const libg = {
    init() {
        libg.module = Process.findModuleByName("libg.so")
        libg.base = libg.module.base

        libg.add = function(x) {return libg.base.add(x)}
    }
}
const libc = {
    init() {
        libc.module = Process.findModuleByName("libc.so")
        libc.base = libc.module.base

        libc.getExport = function(x) {return libc.module.getExportByName(x)}
    }    
}
libg.init()
libc.init()

const Offsets = { // change offsets according to your client version. Ones in currently are for clash royale v1.9.2
    Debugger: {
        //print: 0x0, -- may or may not exist depending on version. In my case it doesn't
        warning: 0x260EA4+1,
        error:  0x2610E8+1,
    },
    Bytestream: {
        readVInt:            0x260720+1,
        readInt:             0x25FF24+1,
        readBoolean:         0x25FD3C+1,
        readString:          0x25F96C+1,
        readBytes:           0x26021C+1,
        //readVLong:           0x0, -- may or may not exist depending on version. In my case it doesn't
        readShort:           0x26000C+1,
        readByte:            0x25FFF0+1,
        readLongLong:        0x260090+1,
        readStringReference: 0x25FBC0+1,
    }
}

const RedirectHost = { // redirect ip and port
    init() {
        Interceptor.attach(libc.getExport("getaddrinfo"), {
            onEnter(args) {
                this.i = Memory.allocUtf8String(Config.ip);
                args[0] = this.i
                this.p = Memory.allocUtf8String(Config.port);
                args[1] = this.p
            }
        })
    }
}

const Utils = {
    arrayBufferToArray: function(buffer) {
        return Array.from(new Uint8Array(buffer))
    },
    isBoolean: function(x) {return x ? true : false},
    decodeString: function(src) {
        let len = src.add(4).readInt();
        if (len >= 8) {
            return src.add(8).readPointer().readUtf8String(len);
        }
        return src.add(8).readUtf8String(len)
    },
    decodeBytes: function(src, len) { 
        return src.add(8).readByteArray(len)
    },
    decodeBoolean: function(src) { 
        return src.add(8).toInt32()
    },
    handleRetval: function(name, retval, bytesize) {
        try {
            if (retval.isNull()) return null;
            if (name === ("readStringReference")) {
                return retval.readUtf8String();
            } else if (name === ("readString")) {
                return Utils.decodeString(retval)
            } else if (name === ("readBytes")) {
                const bytes = Utils.decodeBytes(retval, bytesize.toInt32())
                return Utils.arrayBufferToArray(bytes)
            } else if (name.includes("Long")) {
                return [retval.toInt64(), retval.add(Process.pointerSize).toInt64()]
            } else if (name === "readBoolean") {
                return Utils.decodeBoolean(retval)
            } else {
                return retval.toInt32();
            }
        } catch (e) {
            console.error(`There was an error decoding [Bytestream::${name}]. Error message: ${e.message}`)
        }
    }
};

const Logger = {
    print(x) {console.log(x)},
    warning(x) {console.warn(x)},
    error(x) {console.error(x)}
}

const SetupDebugger = {
    init() {
        for (const logoffset in Offsets.Debugger) {
            Interceptor.attach(libg.add(Offsets.Debugger[logoffset]), {
                onEnter(args) {
                    let msg = args[0].readUtf8String()
                    Logger[logoffset](`[Debugger::${logoffset}]>> ${msg}`)
                }
            })
        }
    }
}

const SetupReadFunctions = {
    init() {
        for (const [funcName, offset] of Object.entries(Offsets.Bytestream)) {

            Interceptor.attach(libg.add(Offsets.Bytestream[funcName]), {
                onEnter(args) {
                    if (funcName === "readBytes") {
                        this.len = args[1];
                    }
                },
                onLeave(retval) {
                    const needsSize = funcName === "readBytes"

                    const val = needsSize
                        ? Utils.handleRetval(funcName, retval, this.len)
                        : Utils.handleRetval(funcName, retval);

                    const bytestreamLog = function(name, msg) {
                        console.log(`[Bytestream::${name}]>> ${msg}`)
                    }

                    if (funcName === "readBoolean") {
                        bytestreamLog(funcName, Utils.isBoolean(val));
                        return;
                    }

                    bytestreamLog(funcName, val)
                }
            });
        }
    }
}

libg.init()
libc.init()

if (Config.RedirectIP) RedirectHost.init()

SetupDebugger.init()
SetupReadFunctions.init()
        
console.log("Script initialized. Happy Reverse Engineering!")
