/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "protobuf_msgs";

/** Simulator sensor outputs. */
export interface SimulatorImageOutput {
  frameid: number;
  width: number;
  height: number;
  pixels: Uint8Array;
}

function createBaseSimulatorImageOutput(): SimulatorImageOutput {
  return { frameid: 0, width: 0, height: 0, pixels: new Uint8Array(0) };
}

export const SimulatorImageOutput = {
  encode(message: SimulatorImageOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.frameid !== 0) {
      writer.uint32(8).uint32(message.frameid);
    }
    if (message.width !== 0) {
      writer.uint32(16).uint32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(24).uint32(message.height);
    }
    if (message.pixels.length !== 0) {
      writer.uint32(34).bytes(message.pixels);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SimulatorImageOutput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimulatorImageOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.frameid = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.width = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.height = reader.uint32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pixels = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SimulatorImageOutput {
    return {
      frameid: isSet(object.frameid) ? globalThis.Number(object.frameid) : 0,
      width: isSet(object.width) ? globalThis.Number(object.width) : 0,
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
      pixels: isSet(object.pixels) ? bytesFromBase64(object.pixels) : new Uint8Array(0),
    };
  },

  toJSON(message: SimulatorImageOutput): unknown {
    const obj: any = {};
    if (message.frameid !== 0) {
      obj.frameid = Math.round(message.frameid);
    }
    if (message.width !== 0) {
      obj.width = Math.round(message.width);
    }
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    if (message.pixels.length !== 0) {
      obj.pixels = base64FromBytes(message.pixels);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SimulatorImageOutput>, I>>(base?: I): SimulatorImageOutput {
    return SimulatorImageOutput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SimulatorImageOutput>, I>>(object: I): SimulatorImageOutput {
    const message = createBaseSimulatorImageOutput();
    message.frameid = object.frameid ?? 0;
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.pixels = object.pixels ?? new Uint8Array(0);
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
