/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "protobuf_msgs";

export interface SpeedSensorOutput {
  rpm: number;
}

function createBaseSpeedSensorOutput(): SpeedSensorOutput {
  return { rpm: 0 };
}

export const SpeedSensorOutput = {
  encode(message: SpeedSensorOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rpm !== 0) {
      writer.uint32(8).int32(message.rpm);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpeedSensorOutput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpeedSensorOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.rpm = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SpeedSensorOutput {
    return { rpm: isSet(object.rpm) ? globalThis.Number(object.rpm) : 0 };
  },

  toJSON(message: SpeedSensorOutput): unknown {
    const obj: any = {};
    if (message.rpm !== 0) {
      obj.rpm = Math.round(message.rpm);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SpeedSensorOutput>, I>>(base?: I): SpeedSensorOutput {
    return SpeedSensorOutput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SpeedSensorOutput>, I>>(object: I): SpeedSensorOutput {
    const message = createBaseSpeedSensorOutput();
    message.rpm = object.rpm ?? 0;
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
