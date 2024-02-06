/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { ServiceStatus } from "../systemmanager/servicediscovery";

export const protobufPackage = "protobuf_msgs";

/**
 * When the debug transceiver picks up a SensorOutput message, it will wrap it in a DebugSensorOutput message,
 * so that the receiver can determine from which process the message originated
 */
export interface DebugServiceMessage {
  sender: ServiceStatus | undefined;
  message: Uint8Array;
}

function createBaseDebugServiceMessage(): DebugServiceMessage {
  return { sender: undefined, message: new Uint8Array(0) };
}

export const DebugServiceMessage = {
  encode(message: DebugServiceMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== undefined) {
      ServiceStatus.encode(message.sender, writer.uint32(10).fork()).ldelim();
    }
    if (message.message.length !== 0) {
      writer.uint32(18).bytes(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DebugServiceMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDebugServiceMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = ServiceStatus.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DebugServiceMessage {
    return {
      sender: isSet(object.sender) ? ServiceStatus.fromJSON(object.sender) : undefined,
      message: isSet(object.message) ? bytesFromBase64(object.message) : new Uint8Array(0),
    };
  },

  toJSON(message: DebugServiceMessage): unknown {
    const obj: any = {};
    if (message.sender !== undefined) {
      obj.sender = ServiceStatus.toJSON(message.sender);
    }
    if (message.message.length !== 0) {
      obj.message = base64FromBytes(message.message);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DebugServiceMessage>, I>>(base?: I): DebugServiceMessage {
    return DebugServiceMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DebugServiceMessage>, I>>(object: I): DebugServiceMessage {
    const message = createBaseDebugServiceMessage();
    message.sender = (object.sender !== undefined && object.sender !== null)
      ? ServiceStatus.fromPartial(object.sender)
      : undefined;
    message.message = object.message ?? new Uint8Array(0);
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
