/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "protobuf_msgs";

/** Possible Sim Requests. Useful for interfaces with Gym */
export enum SimStatus {
  /** SIM_PAUSED - Simulator is paused */
  SIM_PAUSED = 0,
  /** SIM_REQ_STEP - Request single step */
  SIM_REQ_STEP = 1,
  /** SIM_REQ_RESET - Request hard reset */
  SIM_REQ_RESET = 2,
  UNRECOGNIZED = -1,
}

export function simStatusFromJSON(object: any): SimStatus {
  switch (object) {
    case 0:
    case "SIM_PAUSED":
      return SimStatus.SIM_PAUSED;
    case 1:
    case "SIM_REQ_STEP":
      return SimStatus.SIM_REQ_STEP;
    case 2:
    case "SIM_REQ_RESET":
      return SimStatus.SIM_REQ_RESET;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SimStatus.UNRECOGNIZED;
  }
}

export function simStatusToJSON(object: SimStatus): string {
  switch (object) {
    case SimStatus.SIM_PAUSED:
      return "SIM_PAUSED";
    case SimStatus.SIM_REQ_STEP:
      return "SIM_REQ_STEP";
    case SimStatus.SIM_REQ_RESET:
      return "SIM_REQ_RESET";
    case SimStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Simulator sensor outputs. */
export interface SimulatorImageOutput {
  width: number;
  height: number;
  pixels: Uint8Array;
}

/** Generic state of Simulator */
export interface SimulatorState {
  /** Meters per second */
  speed: number;
  /** [0] = FL, [1] = FR, [2] = RL, [3] = RR */
  wheelOffTrack: boolean[];
  /** Image frame */
  image:
    | SimulatorImageOutput
    | undefined;
  /** [0] = x, [1] = y, [2] = z */
  pos: number[];
  /** =false when not drifting */
  isDrifting: boolean;
}

function createBaseSimulatorImageOutput(): SimulatorImageOutput {
  return { width: 0, height: 0, pixels: new Uint8Array(0) };
}

export const SimulatorImageOutput = {
  encode(message: SimulatorImageOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      width: isSet(object.width) ? globalThis.Number(object.width) : 0,
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
      pixels: isSet(object.pixels) ? bytesFromBase64(object.pixels) : new Uint8Array(0),
    };
  },

  toJSON(message: SimulatorImageOutput): unknown {
    const obj: any = {};
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
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.pixels = object.pixels ?? new Uint8Array(0);
    return message;
  },
};

function createBaseSimulatorState(): SimulatorState {
  return { speed: 0, wheelOffTrack: [], image: undefined, pos: [], isDrifting: false };
}

export const SimulatorState = {
  encode(message: SimulatorState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.speed !== 0) {
      writer.uint32(13).float(message.speed);
    }
    writer.uint32(18).fork();
    for (const v of message.wheelOffTrack) {
      writer.bool(v);
    }
    writer.ldelim();
    if (message.image !== undefined) {
      SimulatorImageOutput.encode(message.image, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.pos) {
      writer.float(v);
    }
    writer.ldelim();
    if (message.isDrifting === true) {
      writer.uint32(40).bool(message.isDrifting);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SimulatorState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimulatorState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.speed = reader.float();
          continue;
        case 2:
          if (tag === 16) {
            message.wheelOffTrack.push(reader.bool());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.wheelOffTrack.push(reader.bool());
            }

            continue;
          }

          break;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.image = SimulatorImageOutput.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag === 37) {
            message.pos.push(reader.float());

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.pos.push(reader.float());
            }

            continue;
          }

          break;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.isDrifting = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SimulatorState {
    return {
      speed: isSet(object.speed) ? globalThis.Number(object.speed) : 0,
      wheelOffTrack: globalThis.Array.isArray(object?.wheelOffTrack)
        ? object.wheelOffTrack.map((e: any) => globalThis.Boolean(e))
        : [],
      image: isSet(object.image) ? SimulatorImageOutput.fromJSON(object.image) : undefined,
      pos: globalThis.Array.isArray(object?.pos) ? object.pos.map((e: any) => globalThis.Number(e)) : [],
      isDrifting: isSet(object.isDrifting) ? globalThis.Boolean(object.isDrifting) : false,
    };
  },

  toJSON(message: SimulatorState): unknown {
    const obj: any = {};
    if (message.speed !== 0) {
      obj.speed = message.speed;
    }
    if (message.wheelOffTrack?.length) {
      obj.wheelOffTrack = message.wheelOffTrack;
    }
    if (message.image !== undefined) {
      obj.image = SimulatorImageOutput.toJSON(message.image);
    }
    if (message.pos?.length) {
      obj.pos = message.pos;
    }
    if (message.isDrifting === true) {
      obj.isDrifting = message.isDrifting;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SimulatorState>, I>>(base?: I): SimulatorState {
    return SimulatorState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SimulatorState>, I>>(object: I): SimulatorState {
    const message = createBaseSimulatorState();
    message.speed = object.speed ?? 0;
    message.wheelOffTrack = object.wheelOffTrack?.map((e) => e) || [];
    message.image = (object.image !== undefined && object.image !== null)
      ? SimulatorImageOutput.fromPartial(object.image)
      : undefined;
    message.pos = object.pos?.map((e) => e) || [];
    message.isDrifting = object.isDrifting ?? false;
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
