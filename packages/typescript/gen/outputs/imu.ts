/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "protobuf_msgs";

export interface ImuOutput {
  temperature: number;
  magnetometer: ImuOutput_Vector | undefined;
  gyroscope: ImuOutput_Vector | undefined;
  euler: ImuOutput_Vector | undefined;
  accelerometer: ImuOutput_Vector | undefined;
  linearAccelerometer: ImuOutput_Vector | undefined;
}

export interface ImuOutput_Vector {
  x: number;
  y: number;
  z: number;
}

function createBaseImuOutput(): ImuOutput {
  return {
    temperature: 0,
    magnetometer: undefined,
    gyroscope: undefined,
    euler: undefined,
    accelerometer: undefined,
    linearAccelerometer: undefined,
  };
}

export const ImuOutput = {
  encode(message: ImuOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.temperature !== 0) {
      writer.uint32(8).int32(message.temperature);
    }
    if (message.magnetometer !== undefined) {
      ImuOutput_Vector.encode(message.magnetometer, writer.uint32(18).fork()).ldelim();
    }
    if (message.gyroscope !== undefined) {
      ImuOutput_Vector.encode(message.gyroscope, writer.uint32(26).fork()).ldelim();
    }
    if (message.euler !== undefined) {
      ImuOutput_Vector.encode(message.euler, writer.uint32(34).fork()).ldelim();
    }
    if (message.accelerometer !== undefined) {
      ImuOutput_Vector.encode(message.accelerometer, writer.uint32(42).fork()).ldelim();
    }
    if (message.linearAccelerometer !== undefined) {
      ImuOutput_Vector.encode(message.linearAccelerometer, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ImuOutput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImuOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.temperature = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.magnetometer = ImuOutput_Vector.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.gyroscope = ImuOutput_Vector.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.euler = ImuOutput_Vector.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.accelerometer = ImuOutput_Vector.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.linearAccelerometer = ImuOutput_Vector.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ImuOutput {
    return {
      temperature: isSet(object.temperature) ? globalThis.Number(object.temperature) : 0,
      magnetometer: isSet(object.magnetometer) ? ImuOutput_Vector.fromJSON(object.magnetometer) : undefined,
      gyroscope: isSet(object.gyroscope) ? ImuOutput_Vector.fromJSON(object.gyroscope) : undefined,
      euler: isSet(object.euler) ? ImuOutput_Vector.fromJSON(object.euler) : undefined,
      accelerometer: isSet(object.accelerometer) ? ImuOutput_Vector.fromJSON(object.accelerometer) : undefined,
      linearAccelerometer: isSet(object.linearAccelerometer)
        ? ImuOutput_Vector.fromJSON(object.linearAccelerometer)
        : undefined,
    };
  },

  toJSON(message: ImuOutput): unknown {
    const obj: any = {};
    if (message.temperature !== 0) {
      obj.temperature = Math.round(message.temperature);
    }
    if (message.magnetometer !== undefined) {
      obj.magnetometer = ImuOutput_Vector.toJSON(message.magnetometer);
    }
    if (message.gyroscope !== undefined) {
      obj.gyroscope = ImuOutput_Vector.toJSON(message.gyroscope);
    }
    if (message.euler !== undefined) {
      obj.euler = ImuOutput_Vector.toJSON(message.euler);
    }
    if (message.accelerometer !== undefined) {
      obj.accelerometer = ImuOutput_Vector.toJSON(message.accelerometer);
    }
    if (message.linearAccelerometer !== undefined) {
      obj.linearAccelerometer = ImuOutput_Vector.toJSON(message.linearAccelerometer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ImuOutput>, I>>(base?: I): ImuOutput {
    return ImuOutput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ImuOutput>, I>>(object: I): ImuOutput {
    const message = createBaseImuOutput();
    message.temperature = object.temperature ?? 0;
    message.magnetometer = (object.magnetometer !== undefined && object.magnetometer !== null)
      ? ImuOutput_Vector.fromPartial(object.magnetometer)
      : undefined;
    message.gyroscope = (object.gyroscope !== undefined && object.gyroscope !== null)
      ? ImuOutput_Vector.fromPartial(object.gyroscope)
      : undefined;
    message.euler = (object.euler !== undefined && object.euler !== null)
      ? ImuOutput_Vector.fromPartial(object.euler)
      : undefined;
    message.accelerometer = (object.accelerometer !== undefined && object.accelerometer !== null)
      ? ImuOutput_Vector.fromPartial(object.accelerometer)
      : undefined;
    message.linearAccelerometer = (object.linearAccelerometer !== undefined && object.linearAccelerometer !== null)
      ? ImuOutput_Vector.fromPartial(object.linearAccelerometer)
      : undefined;
    return message;
  },
};

function createBaseImuOutput_Vector(): ImuOutput_Vector {
  return { x: 0, y: 0, z: 0 };
}

export const ImuOutput_Vector = {
  encode(message: ImuOutput_Vector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    if (message.z !== 0) {
      writer.uint32(29).float(message.z);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ImuOutput_Vector {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImuOutput_Vector();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.x = reader.float();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.y = reader.float();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.z = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ImuOutput_Vector {
    return {
      x: isSet(object.x) ? globalThis.Number(object.x) : 0,
      y: isSet(object.y) ? globalThis.Number(object.y) : 0,
      z: isSet(object.z) ? globalThis.Number(object.z) : 0,
    };
  },

  toJSON(message: ImuOutput_Vector): unknown {
    const obj: any = {};
    if (message.x !== 0) {
      obj.x = message.x;
    }
    if (message.y !== 0) {
      obj.y = message.y;
    }
    if (message.z !== 0) {
      obj.z = message.z;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ImuOutput_Vector>, I>>(base?: I): ImuOutput_Vector {
    return ImuOutput_Vector.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ImuOutput_Vector>, I>>(object: I): ImuOutput_Vector {
    const message = createBaseImuOutput_Vector();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.z = object.z ?? 0;
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
