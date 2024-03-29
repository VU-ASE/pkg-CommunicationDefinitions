/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "protobuf_msgs";

export interface ControllerOutput {
  /** timestamp of the message */
  timestamp: number;
  /** Steering angle (-1.0 to 1.0 <-> left - right) */
  steeringAngle: number;
  /** Throttle (-1.0 to 1.0 <-> full reverse - full forward) */
  leftThrottle: number;
  rightThrottle: number;
  /** Onboard lights (0.0 to 1.0 <-> off - on) */
  frontLights: boolean;
}

function createBaseControllerOutput(): ControllerOutput {
  return { timestamp: 0, steeringAngle: 0, leftThrottle: 0, rightThrottle: 0, frontLights: false };
}

export const ControllerOutput = {
  encode(message: ControllerOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== 0) {
      writer.uint32(8).uint64(message.timestamp);
    }
    if (message.steeringAngle !== 0) {
      writer.uint32(21).float(message.steeringAngle);
    }
    if (message.leftThrottle !== 0) {
      writer.uint32(29).float(message.leftThrottle);
    }
    if (message.rightThrottle !== 0) {
      writer.uint32(37).float(message.rightThrottle);
    }
    if (message.frontLights !== false) {
      writer.uint32(40).bool(message.frontLights);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControllerOutput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControllerOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.timestamp = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.steeringAngle = reader.float();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.leftThrottle = reader.float();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.rightThrottle = reader.float();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.frontLights = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ControllerOutput {
    return {
      timestamp: isSet(object.timestamp) ? globalThis.Number(object.timestamp) : 0,
      steeringAngle: isSet(object.steeringAngle) ? globalThis.Number(object.steeringAngle) : 0,
      leftThrottle: isSet(object.leftThrottle) ? globalThis.Number(object.leftThrottle) : 0,
      rightThrottle: isSet(object.rightThrottle) ? globalThis.Number(object.rightThrottle) : 0,
      frontLights: isSet(object.frontLights) ? globalThis.Boolean(object.frontLights) : false,
    };
  },

  toJSON(message: ControllerOutput): unknown {
    const obj: any = {};
    if (message.timestamp !== 0) {
      obj.timestamp = Math.round(message.timestamp);
    }
    if (message.steeringAngle !== 0) {
      obj.steeringAngle = message.steeringAngle;
    }
    if (message.leftThrottle !== 0) {
      obj.leftThrottle = message.leftThrottle;
    }
    if (message.rightThrottle !== 0) {
      obj.rightThrottle = message.rightThrottle;
    }
    if (message.frontLights !== false) {
      obj.frontLights = message.frontLights;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ControllerOutput>, I>>(base?: I): ControllerOutput {
    return ControllerOutput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ControllerOutput>, I>>(object: I): ControllerOutput {
    const message = createBaseControllerOutput();
    message.timestamp = object.timestamp ?? 0;
    message.steeringAngle = object.steeringAngle ?? 0;
    message.leftThrottle = object.leftThrottle ?? 0;
    message.rightThrottle = object.rightThrottle ?? 0;
    message.frontLights = object.frontLights ?? false;
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
