/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CameraSensorOutput } from "./camera";
import { ControllerOutput } from "./controller";
import { DistanceSensorOutput } from "./distance";
import { SpeedSensorOutput } from "./speed";

export const protobufPackage = "protobuf_msgs";

export interface SensorOutput {
  /** Every sensor has a unique ID to support multiple sensors of the same type */
  sensorId: number;
  /** Add a timestamp to the output to make debugging, logging and synchronisation easier */
  timestamp: number;
  /**
   * Report an error if the sensor is not working correctly (controller can decide to ignore or stop the car)
   * 0 = no error, any other value = error
   */
  status: number;
  cameraOutput?: CameraSensorOutput | undefined;
  distanceOutput?: DistanceSensorOutput | undefined;
  speedOutput?: SpeedSensorOutput | undefined;
  controllerOutput?: ControllerOutput | undefined;
}

function createBaseSensorOutput(): SensorOutput {
  return {
    sensorId: 0,
    timestamp: 0,
    status: 0,
    cameraOutput: undefined,
    distanceOutput: undefined,
    speedOutput: undefined,
    controllerOutput: undefined,
  };
}

export const SensorOutput = {
  encode(message: SensorOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sensorId !== 0) {
      writer.uint32(8).uint32(message.sensorId);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint64(message.timestamp);
    }
    if (message.status !== 0) {
      writer.uint32(24).uint32(message.status);
    }
    if (message.cameraOutput !== undefined) {
      CameraSensorOutput.encode(message.cameraOutput, writer.uint32(34).fork()).ldelim();
    }
    if (message.distanceOutput !== undefined) {
      DistanceSensorOutput.encode(message.distanceOutput, writer.uint32(42).fork()).ldelim();
    }
    if (message.speedOutput !== undefined) {
      SpeedSensorOutput.encode(message.speedOutput, writer.uint32(50).fork()).ldelim();
    }
    if (message.controllerOutput !== undefined) {
      ControllerOutput.encode(message.controllerOutput, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SensorOutput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSensorOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.sensorId = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.timestamp = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.status = reader.uint32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.cameraOutput = CameraSensorOutput.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.distanceOutput = DistanceSensorOutput.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.speedOutput = SpeedSensorOutput.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.controllerOutput = ControllerOutput.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SensorOutput {
    return {
      sensorId: isSet(object.sensorId) ? globalThis.Number(object.sensorId) : 0,
      timestamp: isSet(object.timestamp) ? globalThis.Number(object.timestamp) : 0,
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      cameraOutput: isSet(object.cameraOutput) ? CameraSensorOutput.fromJSON(object.cameraOutput) : undefined,
      distanceOutput: isSet(object.distanceOutput) ? DistanceSensorOutput.fromJSON(object.distanceOutput) : undefined,
      speedOutput: isSet(object.speedOutput) ? SpeedSensorOutput.fromJSON(object.speedOutput) : undefined,
      controllerOutput: isSet(object.controllerOutput) ? ControllerOutput.fromJSON(object.controllerOutput) : undefined,
    };
  },

  toJSON(message: SensorOutput): unknown {
    const obj: any = {};
    if (message.sensorId !== 0) {
      obj.sensorId = Math.round(message.sensorId);
    }
    if (message.timestamp !== 0) {
      obj.timestamp = Math.round(message.timestamp);
    }
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.cameraOutput !== undefined) {
      obj.cameraOutput = CameraSensorOutput.toJSON(message.cameraOutput);
    }
    if (message.distanceOutput !== undefined) {
      obj.distanceOutput = DistanceSensorOutput.toJSON(message.distanceOutput);
    }
    if (message.speedOutput !== undefined) {
      obj.speedOutput = SpeedSensorOutput.toJSON(message.speedOutput);
    }
    if (message.controllerOutput !== undefined) {
      obj.controllerOutput = ControllerOutput.toJSON(message.controllerOutput);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SensorOutput>, I>>(base?: I): SensorOutput {
    return SensorOutput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SensorOutput>, I>>(object: I): SensorOutput {
    const message = createBaseSensorOutput();
    message.sensorId = object.sensorId ?? 0;
    message.timestamp = object.timestamp ?? 0;
    message.status = object.status ?? 0;
    message.cameraOutput = (object.cameraOutput !== undefined && object.cameraOutput !== null)
      ? CameraSensorOutput.fromPartial(object.cameraOutput)
      : undefined;
    message.distanceOutput = (object.distanceOutput !== undefined && object.distanceOutput !== null)
      ? DistanceSensorOutput.fromPartial(object.distanceOutput)
      : undefined;
    message.speedOutput = (object.speedOutput !== undefined && object.speedOutput !== null)
      ? SpeedSensorOutput.fromPartial(object.speedOutput)
      : undefined;
    message.controllerOutput = (object.controllerOutput !== undefined && object.controllerOutput !== null)
      ? ControllerOutput.fromPartial(object.controllerOutput)
      : undefined;
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
