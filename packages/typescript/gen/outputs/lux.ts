/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "protobuf_msgs";

export interface LuxOutput {
  lux: number;
}

function createBaseLuxOutput(): LuxOutput {
  return { lux: 0 };
}

export const LuxOutput = {
  encode(message: LuxOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lux !== 0) {
      writer.uint32(8).int32(message.lux);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LuxOutput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLuxOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.lux = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LuxOutput {
    return { lux: isSet(object.lux) ? globalThis.Number(object.lux) : 0 };
  },

  toJSON(message: LuxOutput): unknown {
    const obj: any = {};
    if (message.lux !== 0) {
      obj.lux = Math.round(message.lux);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LuxOutput>, I>>(base?: I): LuxOutput {
    return LuxOutput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LuxOutput>, I>>(object: I): LuxOutput {
    const message = createBaseLuxOutput();
    message.lux = object.lux ?? 0;
    return message;
  },
};

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
