/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ServiceEndpoint, ServiceIdentifier } from "./servicediscovery";

export const protobufPackage = "protobuf_msgs";

/**
 * When the debug transceiver picks up a SensorOutput message, it will wrap it in a DebugSensorOutput message,
 * so that the receiver can determine from which process the message originated
 */
export interface DebugServiceMessage {
  /** The service that sent the message */
  service:
    | ServiceIdentifier
    | undefined;
  /** The endpoint that sent the message */
  endpoint: ServiceEndpoint | undefined;
  sentAt: number;
  message: Uint8Array;
}

function createBaseDebugServiceMessage(): DebugServiceMessage {
  return { service: undefined, endpoint: undefined, sentAt: 0, message: new Uint8Array(0) };
}

export const DebugServiceMessage = {
  encode(message: DebugServiceMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.service !== undefined) {
      ServiceIdentifier.encode(message.service, writer.uint32(10).fork()).ldelim();
    }
    if (message.endpoint !== undefined) {
      ServiceEndpoint.encode(message.endpoint, writer.uint32(18).fork()).ldelim();
    }
    if (message.sentAt !== 0) {
      writer.uint32(32).int64(message.sentAt);
    }
    if (message.message.length !== 0) {
      writer.uint32(26).bytes(message.message);
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

          message.service = ServiceIdentifier.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.endpoint = ServiceEndpoint.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.sentAt = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
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
      service: isSet(object.service) ? ServiceIdentifier.fromJSON(object.service) : undefined,
      endpoint: isSet(object.endpoint) ? ServiceEndpoint.fromJSON(object.endpoint) : undefined,
      sentAt: isSet(object.sentAt) ? globalThis.Number(object.sentAt) : 0,
      message: isSet(object.message) ? bytesFromBase64(object.message) : new Uint8Array(0),
    };
  },

  toJSON(message: DebugServiceMessage): unknown {
    const obj: any = {};
    if (message.service !== undefined) {
      obj.service = ServiceIdentifier.toJSON(message.service);
    }
    if (message.endpoint !== undefined) {
      obj.endpoint = ServiceEndpoint.toJSON(message.endpoint);
    }
    if (message.sentAt !== 0) {
      obj.sentAt = Math.round(message.sentAt);
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
    message.service = (object.service !== undefined && object.service !== null)
      ? ServiceIdentifier.fromPartial(object.service)
      : undefined;
    message.endpoint = (object.endpoint !== undefined && object.endpoint !== null)
      ? ServiceEndpoint.fromPartial(object.endpoint)
      : undefined;
    message.sentAt = object.sentAt ?? 0;
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

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
