// should work, but isn't tested yet.
/* 
csv anti-tampering protection for v1.9.2

works by going through all files in csv_logic, generating a hash for them, and sends them to server via ChatToAllianceStreamMessage
    - file searching isn't dynamic yet, so new(?) files must be added to FilesToCheck array below

default packet size when vanilla csvs are encrypted should be 4619, which will cause retro royale server specifically to throw an error because its too large. 
    - may need to be adjusted server side

there must also be logic on the server to read the packet and check it, but you must handle this part yourself. 
    - shouldn't be too hard, loop through same files, generate hash for server files and check if the hashes match. If they don't, destroy the client or send LoginFailed/ OutOfSyncMessage

Created by Cartyrty
*/

//TODO: Search files in csv_logic dynamically (will also help prevent tampering with this script to bypass it)

var cache = {
    ip: "127.0.0.1",
    fd: null,
    messaging: null,
    assetManagerPtr: null
}

const FilesToCheck = [
  "abilities.csv",
  "achievements.csv",
  "alliance_badges.csv",
  "alliance_roles.csv",
  "area_effect_objects.csv",
  "arenas.csv",
  "buildings.csv",
  "character_buffs.csv",
  "characters.csv",
  "chest_order.csv",
  "configuration_definitions.csv",
  "content_tests.csv",
  "decos.csv",
  "draft_deck.csv",
  "event_categories.csv",
  "event_category_definitions.csv",
  "event_category_enums.csv",
  "event_category_object_definitions.csv",
  "event_targeting_definitions.csv",
  "exp_levels.csv",
  "gamble_chests.csv",
  "game_modes.csv",
  "globals.csv",
  "heroes.csv",
  "locales.csv",
  "locations.csv",
  "npcs.csv",
  "predefined_decks.csv",
  "projectiles.csv",
  "pve_boss.csv",
  "pve_gamemodes.csv",
  "pve_waves.csv",
  "quest_order.csv",
  "rarities.csv",
  "regions.csv",
  "resource_packs.csv",
  "resources.csv",
  "shop.csv",
  "skins.csv",
  "spell_sets.csv",
  "spells_buildings.csv",
  "spells_characters.csv",
  "spells_heroes.csv",
  "spells_other.csv",
  "survival_modes.csv",
  "taunts.csv",
  "tournament_tiers.csv",
  "treasure_chests.csv",
  "tutorial_chest_order.csv",
  "tutorials_home.csv",
  "tutorials_npc.csv",
  "tve_gamemodes.csv"
]

const Library = {
    libc: {
        init() {
            Library.libc.module = Process.findModuleByName('libc.so');
            Library.libc.getExport = function(ex) { return Library.libc.module.getExportByName(ex); };
        }
    },
    libandroid: {
        init() {
            Library.libandroid.module = Process.findModuleByName('libandroid.so');
            Library.libandroid.getExport = function(ex) { return Library.libandroid.module.getExportByName(ex); };
        }
    },
    libg: {
        init() {
            Library.libg.module = Process.findModuleByName("libg.so");
            Library.libg.base = Library.libg.module.base;
            Library.libg.size = Library.libg.module.size;
            Library.libg.add = function(o) { return Library.libg.base.add(o); };
        }
    }
};

Library.libg.init();
Library.libc.init();
Library.libandroid.init();
Memory.protect(Library.libg.base, Library.libg.size, 'rwx');
Interceptor.attach(Library.libandroid.getExport('AAssetManager_open'),{onEnter(args) {if (cache.assetManagerPtr === null) {cache.assetManagerPtr = args[0];}}})

const Offsets = {
    ChatToAllianceStreamMessage: {
        ChatToAllianceStreamMessage: 0x1E3CA0 + 1
    },
    String: {
        String: 0x1FEB70 + 1
    },
    Messaging: {
        send:  0x1FAFB0 + 1
    },
    libc: {
        getaddrinfo: Library.libc.getExport('getaddrinfo')
    },
    ServerConnection: {
        pinstance: 0x59CBF0 // not func so don't add 1
    },
    OwnHomeDataMessage: {
        decode: 0x1EE3E0 + 1
    },
}

const NativeFunctions = {
    ChatToAllianceStreamMessage: {
        ChatToAllianceStreamMessage: new NativeFunction(Library.libg.add(Offsets.ChatToAllianceStreamMessage.ChatToAllianceStreamMessage), 'void', ['pointer'])
    },
    String: {
        String: new NativeFunction(Library.libg.add(Offsets.String.String), 'void', ['pointer', 'pointer'])
    },
    Messaging: {
        send:  new NativeFunction(Library.libg.add(Offsets.Messaging.send), 'void', ['pointer', 'pointer'])
    },
    libc: {
        malloc: new NativeFunction(Library.libc.getExport('malloc'), 'pointer', ['int']),
    }
}

const Utils = {
    createStringPointer: function(str) {
        var ptr = NativeFunctions.libc.malloc(str.length + 1);
        ptr.writeUtf8String(str);
        return ptr;
    },
    createStringObject: function(str) {
        var strptr = Utils.createStringPointer(str);
        var ptr = NativeFunctions.libc.malloc(128);
        NativeFunctions.String.String(ptr, strptr);
        return ptr;
    },
    buildChatToAllianceStreamMessage: function(payload) {
        var message = NativeFunctions.libc.malloc(116);
        NativeFunctions.ChatToAllianceStreamMessage.ChatToAllianceStreamMessage(message);
        message.add(48).writePointer(Utils.createStringObject(payload));
        return message;
    },
    createPair: function(name, bytes) {
        return [name, sha256(bytes)]
    }
};

Interceptor.attach(Library.libg.add(Offsets.OwnHomeDataMessage.decode), {
    onEnter() {
        const reader = new AssetManager(cache.assetManagerPtr);
        let final = []
        for (let file in FilesToCheck) {
            let bytes = reader.readFile(`csv_logic/${FilesToCheck[file]}`);
            let result = Utils.createPair(FilesToCheck[file], bytes)
            final.push(result)
        }
        //console.log(JSON.stringify(final)) -- debugging purposes, uncomment if needed
        const msg = Utils.buildChatToAllianceStreamMessage(JSON.stringify(final));        
        NativeFunctions.Messaging.send(cache.messaging, msg);
    }
});


Interceptor.attach(Offsets.libc.getaddrinfo, {
    onEnter(args) {
        this.c = Memory.allocUtf8String(cache.ip);
        args[0] = this.c;
        var ServerConnection = Library.libg.add(Offsets.ServerConnection.pinstance).readPointer();
        cache.fd = ServerConnection.add(4).readInt();
        cache.messaging = ServerConnection.add(4).readPointer();
    }
});

Interceptor.attach(Library.libc.getExport('connect'), {
        onEnter(args) {
            cache.fd = args[0].toInt32();
        }
});

class AssetManager {
    constructor(assetManagerPtr) {
        this.ptr = assetManagerPtr;
        const lib = Library.libandroid;

        this.AAssetManager_open = new NativeFunction(lib.getExport("AAssetManager_open"),"pointer",["pointer", "pointer", "int"]);
        this.AAsset_getLength = new NativeFunction(lib.getExport("AAsset_getLength"),"int",["pointer"]);
        this.AAsset_read = new NativeFunction(lib.getExport("AAsset_read"),"int",["pointer","pointer","int"]);
        this.AAssetManager_openDir = new NativeFunction(lib.getExport("AAssetManager_openDir"),"pointer",["pointer","pointer"]);
        this.AAssetDir_getNextFileName = new NativeFunction(lib.getExport("AAssetDir_getNextFileName"),"pointer",["pointer"]);
        this.AAsset_close = new NativeFunction(lib.getExport("AAsset_close"),"void",["pointer"]);
    }
    readFile(filename) {
        const asset = AAssetManager_open(this.ptr, filename, 2);
        if (asset.isNull())
            return null;
        const length = this.AAsset_getLength(asset);
        const buffer = Memory.alloc(length);
        this.AAsset_read(asset, buffer, length);
        this.AAsset_close(asset);
        return buffer.readUtf8String(length);
    }
}

// sha256 hasher, source: https://github.com/geraintluff/sha256/blob/gh-pages/sha256.min.js

var sha256=function a(b){function c(a,b){return a>>>b|a<<32-b}for(var d,e,f=Math.pow,g=f(2,32),h="length",i="",j=[],k=8*b[h],l=a.h=a.h||[],m=a.k=a.k||[],n=m[h],o={},p=2;64>n;p++)if(!o[p]){for(d=0;313>d;d+=p)o[d]=p;l[n]=f(p,.5)*g|0,m[n++]=f(p,1/3)*g|0}for(b+="\x80";b[h]%64-56;)b+="\x00";for(d=0;d<b[h];d++){if(e=b.charCodeAt(d),e>>8)return;j[d>>2]|=e<<(3-d)%4*8}for(j[j[h]]=k/g|0,j[j[h]]=k,e=0;e<j[h];){var q=j.slice(e,e+=16),r=l;for(l=l.slice(0,8),d=0;64>d;d++){var s=q[d-15],t=q[d-2],u=l[0],v=l[4],w=l[7]+(c(v,6)^c(v,11)^c(v,25))+(v&l[5]^~v&l[6])+m[d]+(q[d]=16>d?q[d]:q[d-16]+(c(s,7)^c(s,18)^s>>>3)+q[d-7]+(c(t,17)^c(t,19)^t>>>10)|0),x=(c(u,2)^c(u,13)^c(u,22))+(u&l[1]^u&l[2]^l[1]&l[2]);l=[w+x|0].concat(l),l[4]=l[4]+w|0}for(d=0;8>d;d++)l[d]=l[d]+r[d]|0}for(d=0;8>d;d++)for(e=3;e+1;e--){var y=l[d]>>8*e&255;i+=(16>y?0:"")+y.toString(16)}return i};

