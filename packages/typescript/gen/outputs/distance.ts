/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "protobuf_msgs";

export interface DistanceSensorOutput {
  /** distance in meters */
  distance: number;
}

function createBaseDistanceSensorOutput(): DistanceSensorOutput {
  return { distance: 0 };
}

export const DistanceSensorOutput = {
  encode(message: DistanceSensorOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.distance !== 0) {
      writer.uint32(13).float(message.distance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DistanceSensorOutput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistanceSensorOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.distance = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DistanceSensorOutput {
    return { distance: isSet(object.distance) ? globalThis.Number(object.distance) : 0 };
  },

  toJSON(message: DistanceSensorOutput): unknown {
    const obj: any = {};
    if (message.distance !== 0) {
      obj.distance = message.distance;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DistanceSensorOutput>, I>>(base?: I): DistanceSensorOutput {
    return DistanceSensorOutput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DistanceSensorOutput>, I>>(object: I): DistanceSensorOutput {
    const message = createBaseDistanceSensorOutput();
    message.distance = object.distance ?? 0;
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