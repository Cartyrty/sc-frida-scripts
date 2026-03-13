const Config = {
    Debug: false, // if true, prints script logs. If false, will only print initilization info and message receive/ send
    NativeDebug: true, // if true, debugs game's internal Debugger:: logs
    Gold: 999999,
	Gems: 999999,
	ExpPoints: 999999,
	ExpLevel: 13,
	Name: "cartyrty",

    	events: [
		{
			"ID": 3001,
			"Type": 8,
			"StartTime": 1503298800,
			"EndTime": 1672470000,
			"VisibleOn": 1502694000,
			"JSON": '{"GameMode":"TeamVsTeamLadder","HideTimer":true,"HidePopupTimer":true,"ExtraGameMode":"None","ExtraGameModeChance":0}'
		},
		{
			"ID": 3002,
			"Type": 1,
			"StartTime": 1503298800,
			"EndTime":   1672470000,
			"VisibleOn": 1502694000,
			"JSON": '{"Title":"Free Diamonds Pack","Subtitle":"Have fun!","ShopOffers":[{"Title":"Free 100000 Gems","RewardsV2":[{"Gems":{"Gems":100000},"Type":"Gems"}],"NumTimesPurchasable":2,"Multiplier":1,"Image":{"Path":"/cca5cadb-acc2-477c-97a8-ee13c4c4e4f1_valentines_gift.png"},"PurchasedImage":{"Path":"/7d519f7d-8378-458a-af3f-108d26b2f2bd_valentines_gift_claimed.png"},"CostType":"Free","Template":"shop_item1_center_text"}],"IsSpecial":false,"HideTimer":true,"StartNotification":"Get your Free Diamonds Value Pack from the Shop!","EndNotification":"Still two hours left to get your Free Diamonds Value Pack from the Shop!"}'
		},
		{
			"ID": 3003,
			"Type": 5,
			"StartTime": 1503298800,
			"EndTime":   1672470000,
			"VisibleOn": 1502694000,
			"JSON": '{"GameMode":"Friendly","Title":"Random PvP Friendly","HideTimer":true,"Background":{"Path":"/474aac20-c8ce-4ad7-a216-d43f88bc0e6c_friendly_prodeck.png"}}'
		},
		{
			"ID": 3084,
			"Type": 5,
			"StartTime": 1503298800,
			"EndTime": 1672470000,
			"VisibleOn": 1502694000,
			"JSON": '{"GameMode":"Draft_Competitive","Title":"Triple Draft Friendly","HideTimer":true,"Background":{"Path":"/3ce0e2c9-3647-4eaf-876f-2ce8237e9b50_S5_tripledraft_friendly.png"},"DraftDeck":"Draft"}'
		},
		{
			"ID": 3088,
			"Type": 5,
			"StartTime": 1503298800,
			"EndTime": 1672470000,
			"VisibleOn": 1502694000,
			"JSON": '{"GameMode":"Draft_Competitive","Title":"Triple Draft Friendly","HideTimer":true,"Background":{"Path":"/3ce0e2c9-3647-4eaf-876f-2ce8237e9b50_S5_tripledraft_friendly.png"}}'
		},
		{
			"ID": 3096,
			"Type": 2,
			"StartTime": 1503298800,
			"EndTime": 1672470000,
			"VisibleOn": 1502694000,
			"JSON": '{"GameMode":"Touchdown_Draft","Title":"Touchdown Draft Challenge","Subtitle":"Have fun in the Touchdown Draft Challenge!","Description":"Come play the newest Challenge on Master Royale--voted on in our discord server!","StartNotification":"Touchdown Draft Challenge has begun! All free entries and big rewards! ","EndNotification":"Touchdown Draft Challenge ends soon! Come try it before it ends!","JoinCost":0,"JoinCostResource":"Gems","MaxLosses":3,"Rewards":[{"Gold":700,"Cards":10},{"Gold":1250,"Cards":25},{"Gold":2000,"Cards":65},{"Gold":3100,"Cards":125},{"Gold":4500,"Cards":210},{"Gold":6900,"Cards":335},{"Gold":11000,"Cards":550,"Milestone":{"IsHighlighted":true,"Chest":"Legendary","Type":"Chest"}}],"IconExportName":"icon_mode_touchdown","WinIconExportName":"tournament_open_wins_badge_gold","Arena":"All","UnlockedForXP":"Experienced","Background":{"Path":"/2b2456bd-85e6-43e4-ae57-c55cb36a2a5c_super_touchdown_challenge"},"Background_Complete":{"Path":"/2b2456bd-85e6-43e4-ae57-c55cb36a2a5c_super_touchdown_challenge"}}'
		},
		{
			"ID": 3007,
			"Type": 20,
			"StartTime": 1503298800,
			"EndTime": 1672470000,
			"VisibleOn": 1502694000,
			"JSON": '{"GameMode":"TeamVsTeamLadder","Background":{"Path":"/00d185b3-6a66-4590-b135-111db091acb9_party_mode_2v2.png"}}'
		},
		{
			"ID": 3085,
			"Type": 20,
			"StartTime": 1503298800,
			"EndTime": 1672470000,
			"VisibleOn": 1502694000,
			"JSON": '{"GameMode":"TripleElixir_Ladder","Background":{"Path":"/db964b91-8dc6-42ff-9dec-2c5ae8032003_party_mode_2v2_triple_elixir.png"}}'
		},
		{
			"ID": 3081,
			"Type": 20,
			"StartTime": 1503298800,
			"EndTime": 1672470000,
			"VisibleOn": 1502694000,
			"JSON": '{"GameMode":"Draft_Competitive","Background":{"Path":"/b8dac82d-ca3f-48ad-9e28-191ca853785d_party_mode_triple_draft.png"}}'
		},
		{
			"ID": 3009,
			"Type": 18,
			"StartTime": 1503298800,
			"EndTime": 1672470000,
			"VisibleOn": 1502694000,
			"JSON": '{"SeasonName":"Great Goblin Feast","SeasonNumber":1,"SeasonSC":{"Path":"/3b83c899-f5e6-4e5a-a134-fc91c68c5ceb_season_5_goblinparty_dl.sc","Checksum":"b24c3368f45c0e8dea627d1c18f708e6","File":"season_5_goblinparty_dl.sc"},"Arena":"Arena_Goblin_Party","TrophyRoadTemplate":"SeasonFeatRare","SeasonPassRewardTrackTemplate":"Pro_EarlyTowers","TierOverrides":{"TowerSkin":94000005,"FreeEmote":{},"Emote":{"EmotePackId":52,"EmoteIndex":0}},"GoldBankCapacity":0,"FeaturedSpells":[]}'
		},
	],
	chests: [
		{
			'ID': 384,
			'Status': 0,
			'Slot': 0
		},
		{
			'ID': 381,
			'Status': 0,
			'Slot': 1
		},
		{
			'ID': 382,
			'Status': 0,
			'Slot': 2
		},
		{
			'ID': 380,
			'Status': 0,
			'Slot': 3
		}
	 ],
	shopChests: [
		{
			'ID': 317,
			'Status': 88,
			'Slot': 0,
			'Name': 'Lightning'
		},
		{
			'ID': 329,
			'Status': 88,
			'Slot': 1,
			'Name': 'Fortune'
		},
		{
			'ID': 341,
			'Status': 88,
			'Slot': 2,
			'Name': 'Kings'
		}
	],
	shopCards: [
		{
			'ID': 14,
			'Multiplier': 50,
			'Cost': 2500
		},
		{
			'ID': 2,
			'Multiplier': 10,
			'Cost': 10000
		},
		{
			'ID': 3,
			'Multiplier': 1,
			'Cost': 1000
		}
	]
}

const libg = {
    init() {
        libg.module = Process.findModuleByName("libg.so")
        libg.base = libg.module.base

        libg.add = function(x) {return libg.base.add(x)}
    }
}

const Offsets = {
    Debugger: {
        warning: 0x252E6C,
        error:  0x736AFC,
    },    
    Messaging: {
        hasConnectFailed: 0x8,
        State: 0x254,
        send: 0x5BB870,
        sendMessage: 0x7158EC
    },
    ServerConnection: {
        update: 0x660C48
    },
    PayloadPtr: 0x20,
    LogicScrollMessageFactory: {
        createMessageByType: 0x622544
    },
    MessageManager: {
        receiveMessage: 0x71E538,
        sendKeepAliveMessage: 0x6AA9A0
    },
    GUI: {
        showBadConnection: 0x631BF8
    }
}

const PiranhaMessage = {
    encode(Message) {return (new NativeFunction(Message.readPointer().add(16).readPointer(), "void", ["pointer"]))(Message)},
    decode(Message) {return (new NativeFunction(Message.readPointer().add(24).readPointer(), "void", ["pointer"]))(Message)},
    getMessageType(Message) {return (new NativeFunction(Message.readPointer().add(40).readPointer(), "int", ["pointer"]))(Message)},
    getEncodingLength(Message) {
      let stream = this.getByteStream(Message)
      let size = stream.add(24).readS32()
      let offset = stream.add(20).readS32()
      return offset > size ? offset : size
    },
    destruct(Message) {return (new NativeFunction(Message.readPointer().add(6 * Process.pointerSize).readPointer(), "int", ["pointer"]))(Message)},
    getByteStream(Message) {return Message.add(16)}
}

const Debugger = {
    log(x, y) {
        if (!Config.Debug) return
        if (!y) {
            console.log(`[Debugger.log]> ${x}`)
            return
        }
        console.log(`[${y}]> ${x}`)
    },
    alert(x, y) {
        if (!Config.Debug) return
        if (!y) {
            console.log(`\x1b[1;36m[Debugger.alert]> ${x}\x1b[0m`)
            return
        }
        console.log(`\x1b[1;36m[${y}]> ${x}\x1b[0m`);
    },
    announce(x, y, z) {
        if (!z)
            if (!Config.Debug) return
        if (!y) {
            console.log(`\x1b[1;33m[Debugger.announce]> ${x}\x1b[0m`)
            return
        }
        console.log(`\x1b[1;33m[${y}]> ${x}\x1b[0m`);
    },
    warn(x, y) {
        if (!Config.Debug) return
        if (!y) {
            console.warn(`[Debugger.warn]> ${x}`)
            return
        }
        console.warn(`[${y}]> ${x}`)
    },
    error(x, y) {
        if (!Config.Debug) {console.error(`An error occurred at [${y}], please enable Debugging for more details`); return}
        if (!y) {
            console.error(`[Debugger.error]> ${x}`)
            return
        }
        console.error(`[${y}]> ${x}`)
    },
    warning(x, y) {this.warn(x, y)}
}

const Utils = {
    logPacket(id, y) {
        let found = false
        switch (y) {
            case "send":
                for (const [packetName, type] of Object.entries(MessageTypes)) {
                    if (id === type) {
                        found = true
                        Debugger.announce(`======== Sent ${type} (${packetName}) Packet ========`, `Utils.logPacket`, true)
                        return
                    }
                }
                if (found === false) {
                    Debugger.announce(`======== Sent Unknown ${id} Packet ========`, `Utils.logPacket`, true)
                    Debugger.warn(`There is no message name corresponding to message type ${id}, please make sure to add it to the MessageTypes object`, `Utils.logPacket`)
                    return
                }
            case "receive":
                for (const [packetName, type] of Object.entries(MessageTypes)) {
                    if (id === type) {
                        found = true
                        Debugger.announce(`======== Received ${type} (${packetName}) Packet ========`, `Utils.logPacket`, true)
                        return
                    }
                }
                if (found === false) {
                    Debugger.announce(`======== Received Unknown ${id} Packet ========`, `Utils.logPacket`, true)
                    return
                }
            default: 
                Debugger.error(`There is no instructions for case ${y}, did you misspell send or receive?`, `Utils.logPacket`)
                throw new Error()
        }
    },
    createMessageByType(type, payload) {
        Debugger.log(`creating messaged with type: ${type}`, `Utils.createMessageByType`)
        switch (type) {
            case 10100:
                return new ClientHelloMessage(payload)    
            case 20758:
                return new LoginOkMessage(payload)
            case 21217:
                return new OwnHomeDataMessage(payload)
            default:
                Debugger.warn(`Unknown message type: ${type}`, `Utils.createMessageByType`)
        }
    },
    handleMessage(type, payload) {
        Debugger.log(`Handling message with type: ${type}`, `Utils.handleMessage`)
        let message = Utils.createMessageByType(type, payload)

        if (!message) {
            Debugger.warn(`Unhandeled message of type: ${type}`, `Utils.handleMessage`)
            return
        }
        message.decode();
        message.execute();
        Debugger.log(`Decoded and executed message with type: ${type}`, `Utils.handleMessage`)
    },
    sendOfflineMessage(msg) { 
        let type = msg.type
        Debugger.log(`Sending Offline message with type: ${type}`, `Utils.sendOfflineMessage`)
        let payload = msg.payload
        let version = type === 20758 ? 1 : 0

        const createMessageByType = new NativeFunction(libg.add(Offsets.LogicScrollMessageFactory.createMessageByType), "pointer", ["pointer","int",])

        const factory = Memory.alloc(512);
        factory.writePointer(libg.add(0xA6C930)) // allocate factory for createMessageByType
        // There is also a method to patch createMessageByType where all you have to do is
        // send a NULL pointer instead of factory, but I didn't decide to do that here
        
        let message = createMessageByType(factory, type)
        message.add(8).writeS32(version)
        const paylen = PiranhaMessage.getByteStream(message).add(24)
        paylen.writeS32(payload.length)

        if (payload.length > 0) {
            let payloadPtr = Memory.alloc(payload.length).writeByteArray(payload)
            PiranhaMessage.getByteStream(message).add(Offsets.PayloadPtr).writePointer(payloadPtr)
        }

        const receiveMessage = new NativeFunction(libg.add(Offsets.MessageManager.receiveMessage), "int", ["pointer","pointer"])

        PiranhaMessage.decode(message)
        Debugger.alert(`Decoded message with type: ${type}`, `Utils.sendOfflineMessage`)
        if (version === 1) {
            try {receiveMessage(libg.add(0xD50650).readPointer(), message)} catch {}
        } else {
            receiveMessage(libg.add(0xD50650).readPointer(), message)
        }
        
        Utils.logPacket(type, `send`)
        return message
    },
    utf8ArrayToString(array) {
    let out = "", i = 0, len = array.length;
    while (i < len) {
      let c = array[i++];
      if (c < 128) {
        out += String.fromCharCode(c);
      } else if (c > 191 && c < 224) {
        let c2 = array[i++];
        out += String.fromCharCode((c & 31) << 6 | c2 & 63);
      } else {
        let c2 = array[i++];
        let c3 = array[i++];
        out += String.fromCharCode(
          (c & 15) << 12 | (c2 & 63) << 6 | c3 & 63
        );
      }
    }
    return out;
  },
  stringToUtf8Array(str) {
    let utf8 = [];
    if (!str) return null
    for (let i = 0; i < str.length; i++) {
      let charcode = str.charCodeAt(i);
      if (charcode < 128) {
        utf8.push(charcode);
      } else if (charcode < 2048) {
        utf8.push(192 | charcode >> 6, 128 | charcode & 63);
      } else if (charcode < 55296 || charcode >= 57344) {
        utf8.push(
          224 | charcode >> 12,
          128 | charcode >> 6 & 63,
          128 | charcode & 63
        );
      } else {
        i++;
        let surrogatePair = 65536 + ((charcode & 1023) << 10 | str.charCodeAt(i) & 1023);
        utf8.push(
          240 | surrogatePair >> 18,
          128 | surrogatePair >> 12 & 63,
          128 | surrogatePair >> 6 & 63,
          128 | surrogatePair & 63
        );
      }
    }
    return new Uint8Array(utf8);
  }
}

const SetupNativeDebugger = { // sets up the native debugger (game's native debugging system)
    init() {
        for (const logoffset in Offsets.Debugger) {
            Interceptor.attach(libg.add(Offsets.Debugger[logoffset]), {
                onEnter(args) {
                    let msg = args[0].readUtf8String()
                    Debugger[logoffset](msg, `NativeDebugger.${logoffset}`)
                }
            })
        }
    }
}

const MessageTypes = { // This is for logging packet purposes. Add your packet name and id here if you don't want to see "Received Unknown 10101 packet" for example
    ClientHelloMessage: 10100,
    LoginMessage: 10101,
    ServerHelloMessage: 20100,
    OwnHomeDataMessage: 21217,
    LoginOkMessage: 20758
}

const ArxanKiller = {
    patchFunction(address, value) {
        Debugger.log(`Patching offset 0x${address.toString(16)} to return ${value}`, `ArxanKiller.patchFunction`)
        Interceptor.replace(libg.add(address), new NativeCallback(() => {return value}, 'int', []))
    },
    killFridaDetection() {
        Debugger.log(`Patching frida detection functions...`, `ArxanKiller.killFridaDetection`)
        ArxanKiller.patchFunction(0x618A48, 0) // lv1_detect_frida_library__ZL26frida_library_guard_threadPv
        ArxanKiller.patchFunction(0x6EC8B4, 0) // lv1_detect_frida_library__ZL23create_detection_threadv
        ArxanKiller.patchFunction(0x5148AC, 0) // idk

        // some offsets I found with logcat crash logs
        ArxanKiller.patchFunction(0x1F6BCC, 0)
        ArxanKiller.patchFunction(0x1F8FEC, 0)
        ArxanKiller.patchFunction(0x1F9FE0, 0)
        ArxanKiller.patchFunction(0x1FAFE0, 0)

        Debugger.alert(`Patched frida detection functions`, `ArxanKiller.killFridaDetection`)
    },
}

const SetupHooks = {
    init() {
        let HasServerConnectionBeenPatched = false // so console doesn't get spammed with the log, it only logs it once
        Interceptor.attach(libg.add(Offsets.ServerConnection.update), {
            onEnter(args) {
                if (!HasServerConnectionBeenPatched)
                    Debugger.log(`Patching Server Connection...`, `SetupHooks.init`) 
                let ServerConnection = args[0]
                ServerConnection.add(Process.pointerSize).readPointer().add(Offsets.Messaging.hasConnectFailed).writeU8(0) // force hasConnectFailed to 0 (false)
                ServerConnection.add(Process.pointerSize).readPointer().add(Offsets.Messaging.State).writeInt(5) // force state to be 5
                if (!HasServerConnectionBeenPatched) { 
                    Debugger.alert(`Patched Server Connection`, `SetupHooks.init`)
                    HasServerConnectionBeenPatched = true
                }
            }
        })

        Interceptor.replace(libg.add(Offsets.Messaging.send), new NativeCallback(function(ts, msg) {
            Debugger.log(`Patching Messaging::send...`, `SetupHooks.init`)
            PiranhaMessage.encode(msg)
            let MsgType = PiranhaMessage.getMessageType(msg)
            Utils.logPacket(MsgType, `receive`)

            let msgLen = PiranhaMessage.getEncodingLength(msg)
            Debugger.log(`Message ${MsgType} Length: ${msgLen}`, `SetupHooks.init`)

            let Payloadptr = PiranhaMessage.getByteStream(msg).add(32).readPointer()
            Debugger.log(`Message ${MsgType} Pointer: ${Payloadptr}`, `SetupHooks.init`)

            if (!msgLen && MsgType !== 10108) {
                Debugger.warn(`Received null message length`, `SetupHooks.init`)
                return 0
            } else if (MsgType === 10108) {
                return 0
            }

            let payload = Payloadptr.readByteArray(msgLen)
            Debugger.log(`Message ${MsgType} Dump: ${Array.from(new Uint8Array(payload))}`, `SetupHooks.init`)

            Utils.handleMessage(MsgType, Array.from(new Uint8Array(payload)))

            PiranhaMessage.destruct(msg)
            Debugger.alert(`Patched Messaging::send`, `SetupHooks.init`)
            return 0
        },"int",["pointer", "pointer"]))

        Interceptor.attach(libg.add(Offsets.MessageManager.receiveMessage), {
            onLeave(retval) {
                retval.replace(ptr(1));
            }
        });

        // disable keep alive message from being sent since its not needed in offline
        Interceptor.replace(libg.add(Offsets.MessageManager.sendKeepAliveMessage), new NativeCallback(function(x) {},"void",["pointer"]))
        // stop the bad connection icon from being show
        Interceptor.replace(libg.add(Offsets.GUI.showBadConnection), new NativeCallback(function(x) {},"void",["pointer"]))
        
        Interceptor.attach(libg.add(Offsets.Messaging.sendMessage), {
            onEnter(args) {
                PiranhaMessage.encode(args[1]);
                let messaging = args[0].add(Process.pointerSize).readPointer()
                messaging.add(Offsets.Messaging.State).writeInt(5) // force state to be 5
            }
        });
    }
}

class ByteStream {
  payload
  bitoffset
  offset
  constructor(payload) {
    this.payload = payload;
    this.bitoffset = 0;
    this.offset = 0;
  }

  readInt() {
    this.bitoffset = 0;
    let result =
      ((this.payload[this.offset] << 24) >>> 0) |
      (this.payload[this.offset + 1] << 16) |
      (this.payload[this.offset + 2] << 8) |
      this.payload[this.offset + 3];
    this.offset += 4;
    return result;
  }

  readByte() {
    this.bitoffset = 0;
    let result = this.payload[this.offset];
    this.offset++;
    return result;
  }

  readShort() {
    this.bitoffset = 0;
    let result =
      (this.payload[this.offset] << 8) | this.payload[this.offset + 1];
    this.offset += 2;
    return result;
  }

  readLong() {
    this.bitoffset = 0;
    let high = this.readInt();
    let low = this.readInt();
    return Number((BigInt(high) << 32n) | BigInt(low >>> 0));
  }

  readString() {
    this.bitoffset = 0;
    const length = this.readInt();
    if (length < 0 || length > 10000) {
      Logger.error("Invalid string length");
      throw Error();
    }
    const bytes = this.payload.slice(this.offset, this.offset + length);
    this.offset += length;
    return Utils.utf8ArrayToString(new Uint8Array(bytes));
  }

  writeDataReference(val) {
    this.bitoffset = 0;
    let classId = GlobalId.getClassId(val);
    let instanceId = GlobalId.getInstanceId(val);

    this.writeVInt(classId);
    if (classId > 0) this.writeVInt(instanceId);
  }

  readVInt() {
    let start = this.offset;
    this.bitoffset = 0;
    let b0 = this.payload[start];
    this.offset = start + 1;
    let result = b0 & 0x3f;
    if (b0 & 0x40) {
      if (b0 & 0x80) {
        let b1 = this.payload[start + 1];
        result = result | ((b1 & 0x7f) << 6);
        this.offset = start + 2;
        if (b1 & 0x80) {
          let b2 = this.payload[start + 2];
          result = result | ((b2 & 0x7f) << 13);
          this.offset = start + 3;
          if (b2 & 0x80) {
            let b3 = this.payload[start + 3];
            result = result | ((b3 & 0x7f) << 20);
            this.offset = start + 4;
            if (b3 & 0x80) {
              let b4 = this.payload[start + 4];
              this.offset = start + 5;
              result = result | (b4 << 27);
            }
          }
        }
      }
      result = -(result | (0xffffffc0 << ((this.offset - start - 1) * 7 - 6)));
    } else if (b0 & 0x80) {
      let b1 = this.payload[start + 1];
      result = result | ((b1 & 0x7f) << 6);
      this.offset = start + 2;
      if (b1 & 0x80) {
        let b2 = this.payload[start + 2];
        result = result | ((b2 & 0x7f) << 13);
        this.offset = start + 3;
        if (b2 & 0x80) {
          let b3 = this.payload[start + 3];
          result = result | ((b3 & 0x7f) << 20);
          this.offset = start + 4;
          if (b3 & 0x80) {
            let b4 = this.payload[start + 4];
            this.offset = start + 5;
            result = result | (b4 << 27);
          }
        }
      }
    }
    return result;
  }

  readVLong() {
    let high = this.readVInt();
    let low = this.readVInt();
    return Number((BigInt(high) << 32n) | BigInt(low >>> 0));
  }

  readBoolean() {
    this.bitoffset = 0;
    return this.payload[this.offset++] !== 0;
  }

  readDataReference() {
    const classId = this.readVInt();
    if (classId === 0) {
      return 0;
    }
    const instanceId = this.readVInt();
    return GlobalId.createGlobalId(classId, instanceId);
  }

  writeByte(value) {
    this.bitoffset = 0;
    this.payload.push(value & 0xff);
    this.offset++;
  }

  writeShort(value) {
    this.bitoffset = 0;
    this.payload.push((value >> 8) & 0xff);
    this.payload.push(value & 0xff);
    this.offset += 2;
  }

  writeInt(value) {
    this.bitoffset = 0;
    this.payload.push((value >> 24) & 0xff);
    this.payload.push((value >> 16) & 0xff);
    this.payload.push((value >> 8) & 0xff);
    this.payload.push(value & 0xff);
    this.offset += 4;
  }

  writeString(str) {
    this.bitoffset = 0;
    let bytes = Utils.stringToUtf8Array(str);
    if (!str) {
        this.writeInt(-1)
        return
    }
    this.writeInt(bytes.length);
    for (let i = 0; i < bytes.length; i++) {
      this.writeByte(bytes[i]);
    }
  }

  writeVInt(value) {
    this.bitoffset = 0;
    let temp = (value >> 25) & 0x40;
    let flipped = value ^ (value >> 31);

    temp |= value & 0x3f;
    value >>= 6;

    if ((flipped >>= 6) == 0) {
      this.writeByte(temp);
      return;
    }

    this.writeByte(temp | 0x80);

    do {
      this.writeByte((value & 0x7f) | ((flipped >>= 7) != 0 ? 0x80 : 0));
      value >>= 7;
    } while (flipped != 0);
  }

  writeVLong(high, low) {
    this.bitoffset = 0;
    this.writeVInt(high);
    this.writeVInt(low);
  }

  writeBoolean(value) {
    if (this.bitoffset == 0) {
      this.payload.push(0);
      this.offset++;
    }
    if (value) {
      this.payload[this.offset - 1] |= 1 << (this.bitoffset & 7);
    }
    this.bitoffset = (this.bitoffset + 1) & 7;
  }

  writeLong(high, low) {
    this.bitoffset = 0;
    this.writeInt(high);
    this.writeInt(low);
  }

  writeHex(hex) {
    this.bitoffset = 0;

    hex = hex.replace(/[\s-]/g, "");

    if (hex.length % 2 != 0) {
      Logger.error("Invalid hex length");
      throw new Error();
    }

    for (let i = 0; i < hex.length; i += 2) {
      const byteStr = hex.substring(i, i + 2);
      const byte = parseInt(byteStr, 16);

      if (isNaN(byte)) {
        Logger.error("Invalid hex length", byte);
        throw new Error();
      }

      this.writeByte(byte);
    }
  }

  writeBytes(value, length) {
    this.writeInt(length);
    for (let i = 0; i < length; i++) {
      this.payload[this.offset + i] = value[i] & 0xff;
    }
    this.offset += length;
  }
}

let ClientHelloMessage = class {
    payload

    constructor(payload) {
        this.payload = payload
        this.type = 10100
    }

    decode() {}

    execute() {
        let loginok = Utils.createMessageByType(20758, [])
        loginok.encode()
        Utils.sendOfflineMessage(loginok)
        
        let ohd = Utils.createMessageByType(21217, [])
        ohd.encode()
        Utils.sendOfflineMessage(ohd)
    }
}

let LoginOkMessage = class {
    payload

    constructor(payload) {
        this.payload = payload
        this.type = 20758
    }

    encode() {
        let self = new ByteStream([])
        self.writeLong(0, 1) // id high, id low
        self.writeLong(0, 1) // id high, id low

        self.writeString("abcdefhijklmnopqrstuvwxyz") // token

        self.writeString("")  // GameCenterId
        self.writeString("")  // FacebookId

        self.writeVInt(3)    // MajorVersion
        self.writeVInt(162)  // Build
        self.writeVInt(162)  // Build
        self.writeVInt(1)    // MinorVersion

        self.writeString("dev")  // Environment

        self.writeInt(0)
        self.writeInt(0)
        self.writeInt(0)
        self.writeInt(0)

        self.writeString("")  // FacebookAppId
        self.writeString("")  // ServerTime
        self.writeString("")  // AccountCreatedDate

        self.writeString("RO") // Region
        self.writeString("Bucharest") // City

        self.writeString("")

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(2)

        // Game Assets URL
        self.writeString("http://game-assets.clashroyaleapp.com/")

        // Cdn URL
        self.writeString("https://99faf1e355c749a9a049-2a63f4436c967aa7d355061bd0d924a1.ssl.cf1.rackcdn.com/")

        self.writeVInt(1)

        // Event Assets URL
        self.writeString("https://event-assets.clashroyale.com")
        this.payload = self.payload
    }

    execute() {}
}

let OwnHomeDataMessage = class {
    payload

    constructor(payload) {
        this.payload = payload
        this.type = 21217
    }

    encode() {
        let self = new ByteStream([])
        // LOGIC CLIENT HOME //

        self.writeVInt(0)  // High ID
        self.writeVInt(1)  // Low ID

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        // Decks
        self.writeVInt(5)  // Decks Count

        // Player Decks array
        for (let x = 0; x < 5; x++) {
            self.writeVInt(8)  // cards count
            self.writeVInt(26000000)
            self.writeVInt(26000001)
            self.writeVInt(26000005)
            self.writeVInt(28000001)
            self.writeVInt(28000000)
            self.writeVInt(26000003)
            self.writeVInt(26000002)
            self.writeVInt(26000004)
        }

        self.writeVInt(8)
        self.writeHex("FF")

        // Current Deck
        let cardsList = [1,2,6,91,90,4,3,5]

        for (let cardID of cardsList) {
            // Card ID
            self.writeVInt(cardID)
            // Card Level
            self.writeVInt(100)
            // Card Star Level
            self.writeVInt(3)
            self.writeVInt(0)
            // Card Points
            self.writeVInt(0)
            self.writeVInt(0)
            self.writeVInt(0)
            self.writeVInt(0)
        }

        cardsList = Array.from({length:108-7},(_,i)=>i+7)

        self.writeVInt(cardsList.length)

        for (let cardID of cardsList) {
            // Card ID
            self.writeVInt(cardID)
            // Card Level
            self.writeVInt(100)
            // Card Star Level
            self.writeVInt(3)
            self.writeVInt(0)
            // Card Points
            self.writeVInt(0)
            self.writeVInt(0)
            self.writeVInt(0)
            self.writeVInt(0)
        }

        self.writeVInt(0)  // Current Selected Deck

        self.writeVInt(8)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(1)
        self.writeVInt(0)

        // Events
        let count = Config.events.length

        self.writeVInt(count)  // Events Count

        for (let event of Config.events) {
            self.writeVInt(event["ID"])
            self.writeInt(0)

            self.writeVInt(0)
            self.writeVInt(0)
            self.writeVInt(event["Type"])
            self.writeVInt(event["StartTime"])
            self.writeVInt(event["EndTime"])
            self.writeVInt(event["VisibleOn"])

            self.writeInt(0)
            self.writeInt(0)
            self.writeInt(0)

            self.writeVInt(0)
            self.writeVInt(1)
            self.writeString(event["JSON"])

            self.writeVInt(0)
            self.writeVInt(0)
            self.writeVInt(0)
            self.writeVInt(0)
            self.writeVInt(0)
            self.writeVInt(0)
        }

        self.writeInt(0)

        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)  // Timestamp

        self.writeVInt(0)
        self.writeVInt(0)

        self.writeInt(0)

        self.writeVInt(0)  // array
        self.writeVInt(0)  // array

        self.writeVInt(1)
        self.writeVInt(0)

        // Chests
        count = Config.chests.length

        self.writeVInt(count)

        for (let chest of Config.chests) {
            self.writeVInt(1)

            // Chest SCID
            self.writeVInt(19)
            self.writeVInt(chest['ID'])

            // Chest Status
            self.writeVInt(chest['Status'])

            // Chest Slot
            self.writeVInt(9 - chest['Slot'])
            self.writeVInt(0)
            self.writeVInt(chest['Slot'])

            self.writeInt(2)

            self.writeVInt(0)
            self.writeVInt(0)

            self.writeString()
        }

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(2)

        self.writeVInt(13)
        self.writeVInt(54)
        self.writeVInt(12)
        self.writeVInt(54)

        self.writeVInt(12)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(3)
        self.writeVInt(1945)
        self.writeVInt(1)

        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(1)
        self.writeVInt(13)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(2)

        self.writeVInt(8)
        self.writeHex("FF")

        // Current Deck
        cardsList = [1,2,6,91,90,4,3,5]

        for (let cardID of cardsList) {
            // Card ID
            self.writeVInt(cardID)
            // Card Level
            self.writeVInt(100)
            // Card Star Level
            self.writeVInt(3)
            self.writeVInt(0)
            // Card Points
            self.writeVInt(0)
            self.writeVInt(0)
            self.writeVInt(0)
            self.writeVInt(0)
        }

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(1)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(1)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(5)
        self.writeVInt(32)

        self.writeVInt(1)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt()

        self.writeVInt(0)
        self.writeVInt(1)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(1)
        self.writeVInt(2)
        self.writeVInt(1)
        self.writeVInt(3)

        self.writeVInt(0)
        self.writeVInt(1)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        
        self.writeVInt(0)

        self.writeVInt(7)

        // Shop Cards
        count = Config.shopCards.length
        self.writeVInt(count)

        for (let card of Config.shopCards) {
            self.writeVInt(1)
            self.writeVInt(0)
            self.writeVInt(0)
            self.writeVInt(1)
            // Card Cost
            self.writeVInt(card['Cost'])
            self.writeVInt(5)
            self.writeVInt(1)
            // Card SCID
            self.writeVInt(28)
            self.writeVInt(card['ID'])
            self.writeVInt(card['Multiplier'])

            self.writeVInt(Config.shopCards[card] + 1)
            self.writeVInt(0)
            self.writeVInt(0)
            self.writeVInt(0)
            self.writeVInt(0)
        }

        // Shop Chests
        count = Config.shopChests.length
        self.writeVInt(count)

        for (let chest of Config.shopChests) {
            // Chest SCID
            self.writeVInt(19)
            self.writeVInt(chest['ID'])
            // Chest Status
            self.writeVInt(chest['Status'])

            self.writeVInt(0)
            // Chest Name
            self.writeString(chest['Name'])

            self.writeVInt(1)
            // Chest Slot
            self.writeVInt(chest['Slot'])

            self.writeVInt(0)
            self.writeVInt()
            self.writeVInt(0)
            self.writeVInt()
        }


        self.writeHex("030001020000000000000000050000000001000000010000000003000000116B696E675F68617070795F30312E776176000000372F32643763353966612D663437662D346231372D613535612D6230363765663061646132375F6B696E675F68617070795F30312E77617600000020326531396336356561613931333332653731613566346537313865353161643800000014656D6F7465735F6B696E675F30315F646C2E73630000003A2F62336135376130652D653437622D343761312D393334392D3763313662656238313430385F656D6F7465735F6B696E675F30315F646C2E7363000000203332663862643964373937643639623962333631303936616562363030396363010088020000000100000000000000010000000100000001000000020000000100000003000000020000000000000002000000010000000200000002000000020000000300000003000000000000000300000001000000030000000200000003000000030000000400000000000000040000000100000004000000020000000400000003000000050000000000000005000000010000000500000002000000050000000300000006000000000000000600000001000000060000000200000006000000030000000700000000000000070000000100000007000000020000000700000003000000080000000000000008000000010000000800000002000000080000000300000009000000000000000900000001000000090000000200000009000000030000000A000000000000000A000000010000000A000000020000000A000000030000000B000000000000000B000000010000000B000000020000000B000000030000000C000000000000000C000000010000000C000000020000000C000000030000000D000000000000000D000000010000000D000000020000000D000000030000000E000000000000000E000000010000000E000000020000000E000000030000000F000000000000000F000000010000000F000000020000000F0000000300000010000000000000001000000001000000100000000200000010000000030000001100000000000000110000000100000011000000020000001100000003000000120000000000000012000000010000001200000002000000120000000300000014000000000000001500000000000000150000000100000016000000000000001600000001000000170000000000000017000000010000001700000002000000170000000300000018000000000000001800000001000000180000000200000018000000030000001900000000000000190000000100000019000000020000001A000000000000001A000000010000001A000000020000001B000000000000001C000000000000001C000000010000001D000000000000001D000000010000001D000000020000001D000000030000001E000000000000001E000000010000001F000000000000001F000000010000001F000000020000001F00000003000000200000000000000020000000010000002000000002000000200000000300000021000000000000002200000000000000240000000000000024000000010000002400000002000000240000000300000025000000000000002700000000000000280000000000000028000000010000002800000002000000290000000000000029000000010000002A000000000000002C000000000000002D000000000000002E000000000000002F0000000000000031000000000000003100000001000000320000000000000032000000010000003200000002000000320000000300000033000000000000003400000000000000340000000100000034000000020000000100000000000000010000000100000001000000020000000100000003000000020000000000000002000000010000000200000002000000020000000300000000000181CED25900000019746F776572736B696E5F736561736F6E5F30315F646C2E73630000003F2F33663238303361302D373634662D346261392D383532362D6337396132373830363762335F746F776572736B696E5F736561736F6E5F30315F646C2E73630000002061303238303562323633663339646231333366623065303062613361326537320000000A536861726B2054616E6B01000000096B696E67746F7765720100000010736861726B5F6B696E675F6465617468010000000D7072696E63657373746F7765720100000014736861726B5F7072696E636573735F6465617468")

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)  // array
        self.writeVInt(0)  // array

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(1)
        self.writeVInt(1)

        self.writeVInt()
        self.writeVInt(0)
        self.writeVInt(1)

        self.writeVInt(104003009)

        self.writeVInt(1)
        self.writeVInt(1)
        self.writeVInt(7000)
        self.writeVInt(6900)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(1)
        self.writeVInt(600)

        self.writeVInt(600)
        self.writeVInt(600)
        self.writeVInt(1)
        self.writeVInt(13)

        self.writeVInt(600)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(1)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        // LOGIC CLIENT AVATAR //

        for (let i = 0; i < 3; i++) {
            self.writeVInt(0)  // High ID
            self.writeVInt(1)  // Low ID
        }

        self.writeString(Config.Name)  // Username

        self.writeVInt(13)  // Current Arena + 1

        self.writeVInt(0)

        self.writeVInt(7000)  // Trophies
        self.writeVInt(0)     // Legend Trophies
        self.writeVInt(0)     // Season Record

        self.writeVInt()

        self.writeVInt(0)     // Best Season Rank
        self.writeVInt(7000)  // Best Season Trophies

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)

        self.writeVInt(9)

        // Game Variables array
        self.writeVInt(2)

        // Gold
        self.writeVInt(5)  // CSV ID
        self.writeVInt(1)  // Resource ID
        self.writeVInt(Config.Gold)

        // StarPoints
        self.writeVInt(5)  // CSV ID
        self.writeVInt(49) // Resource ID
        self.writeVInt(Config.ExpPoints)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)


        // Profile Statistics array
        self.writeVInt(4)

        // MaxScore
        self.writeVInt(5)  // CSV ID
        self.writeVInt(6)  // Resource ID
        self.writeVInt(7000)

        // ThreeCrownWins
        self.writeVInt(5)  // CSV ID
        self.writeVInt(7)  // Resource ID
        self.writeVInt(99999)

        // CardCount
        self.writeVInt(5)  // CSV ID
        self.writeVInt(8)  // Resource ID
        self.writeVInt(95)

        // MaxArena
        self.writeVInt(5)   // CSV ID
        self.writeVInt(27)  // Resource ID
        self.writeVInt(12)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(Config.Gems)  // Player Gems
        self.writeVInt(Config.Gems)  // Player Free Gems

        self.writeVInt(Config.ExpPoints)  // Exp Points
        self.writeVInt(Config.ExpLevel)   // Level

        self.writeVInt(0)

        self.writeVInt(1)  // is user in clan (1 = No, 9 = Yes)

        // Battle Statistics
        self.writeVInt(0)  // Battles Played
        self.writeVInt(0)  // Tourney Battles Played
        self.writeVInt(0)
        self.writeVInt(0)  // Wins
        self.writeVInt(0)  // Loses

        self.writeVInt(0)

        // Tutorials
        self.writeVInt(7)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)

        self.writeVInt()

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(1)

        self.writeVInt(0)

        self.writeVInt(1612095424)

        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        self.writeVInt(0)
        this.payload = self.payload
    }

    execute() {}
}

console.log(`

██╗░░░██╗██████╗░░░░░░███╗░░  ░█████╗░███████╗███████╗██╗░░░░░██╗███╗░░██╗███████╗
██║░░░██║╚════██╗░░░░████║░░  ██╔══██╗██╔════╝██╔════╝██║░░░░░██║████╗░██║██╔════╝
╚██╗░██╔╝░█████╔╝░░░██╔██║░░  ██║░░██║█████╗░░█████╗░░██║░░░░░██║██╔██╗██║█████╗░░
░╚████╔╝░░╚═══██╗░░░╚═╝██║░░  ██║░░██║██╔══╝░░██╔══╝░░██║░░░░░██║██║╚████║██╔══╝░░
░░╚██╔╝░░██████╔╝██╗███████╗  ╚█████╔╝██║░░░░░██║░░░░░███████╗██║██║░╚███║███████╗
░░░╚═╝░░░╚═════╝░╚═╝╚══════╝  ░╚════╝░╚═╝░░░░░╚═╝░░░░░╚══════╝╚═╝╚═╝░░╚══╝╚══════╝
`)
libg.init()
ArxanKiller.killFridaDetection()
if (Config.NativeDebug) SetupNativeDebugger.init()

SetupHooks.init()

console.log(`Script initialized. Enjoy v3.1 offline!`)
