/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "protobuf_msgs";

/** control messages exchanged by client(s), the server and the car */
export interface ConfigMessage {
  humanControlRequest?: ConfigMessage_HumanControlRequest | undefined;
  humanControlState?: ConfigMessage_HumanControlState | undefined;
  carState?: ConfigMessage_CarState | undefined;
  error?: ConfigMessage_Error | undefined;
}

export enum ConfigMessage_ControlRequestType {
  HUMAN_CONTROL_TAKEOVER = 0,
  HUMAN_CONTROL_RELEASE = 1,
  UNRECOGNIZED = -1,
}

export function configMessage_ControlRequestTypeFromJSON(object: any): ConfigMessage_ControlRequestType {
  switch (object) {
    case 0:
    case "HUMAN_CONTROL_TAKEOVER":
      return ConfigMessage_ControlRequestType.HUMAN_CONTROL_TAKEOVER;
    case 1:
    case "HUMAN_CONTROL_RELEASE":
      return ConfigMessage_ControlRequestType.HUMAN_CONTROL_RELEASE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ConfigMessage_ControlRequestType.UNRECOGNIZED;
  }
}

export function configMessage_ControlRequestTypeToJSON(object: ConfigMessage_ControlRequestType): string {
  switch (object) {
    case ConfigMessage_ControlRequestType.HUMAN_CONTROL_TAKEOVER:
      return "HUMAN_CONTROL_TAKEOVER";
    case ConfigMessage_ControlRequestType.HUMAN_CONTROL_RELEASE:
      return "HUMAN_CONTROL_RELEASE";
    case ConfigMessage_ControlRequestType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ConfigMessage_HumanControlRequest {
  type: ConfigMessage_ControlRequestType;
}

export interface ConfigMessage_HumanControlState {
  /** let everyone know who is the active controller now */
  activeControllerId: string;
}

/** Broadcast car connects and disconnects */
export interface ConfigMessage_CarState {
  connected: boolean;
}

/** To report unknown or general errors */
export interface ConfigMessage_Error {
  message: string;
}

function createBaseConfigMessage(): ConfigMessage {
  return { humanControlRequest: undefined, humanControlState: undefined, carState: undefined, error: undefined };
}

export const ConfigMessage = {
  encode(message: ConfigMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.humanControlRequest !== undefined) {
      ConfigMessage_HumanControlRequest.encode(message.humanControlRequest, writer.uint32(10).fork()).ldelim();
    }
    if (message.humanControlState !== undefined) {
      ConfigMessage_HumanControlState.encode(message.humanControlState, writer.uint32(26).fork()).ldelim();
    }
    if (message.carState !== undefined) {
      ConfigMessage_CarState.encode(message.carState, writer.uint32(50).fork()).ldelim();
    }
    if (message.error !== undefined) {
      ConfigMessage_Error.encode(message.error, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.humanControlRequest = ConfigMessage_HumanControlRequest.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.humanControlState = ConfigMessage_HumanControlState.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.carState = ConfigMessage_CarState.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.error = ConfigMessage_Error.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConfigMessage {
    return {
      humanControlRequest: isSet(object.humanControlRequest)
        ? ConfigMessage_HumanControlRequest.fromJSON(object.humanControlRequest)
        : undefined,
      humanControlState: isSet(object.humanControlState)
        ? ConfigMessage_HumanControlState.fromJSON(object.humanControlState)
        : undefined,
      carState: isSet(object.carState) ? ConfigMessage_CarState.fromJSON(object.carState) : undefined,
      error: isSet(object.error) ? ConfigMessage_Error.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ConfigMessage): unknown {
    const obj: any = {};
    if (message.humanControlRequest !== undefined) {
      obj.humanControlRequest = ConfigMessage_HumanControlRequest.toJSON(message.humanControlRequest);
    }
    if (message.humanControlState !== undefined) {
      obj.humanControlState = ConfigMessage_HumanControlState.toJSON(message.humanControlState);
    }
    if (message.carState !== undefined) {
      obj.carState = ConfigMessage_CarState.toJSON(message.carState);
    }
    if (message.error !== undefined) {
      obj.error = ConfigMessage_Error.toJSON(message.error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConfigMessage>, I>>(base?: I): ConfigMessage {
    return ConfigMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConfigMessage>, I>>(object: I): ConfigMessage {
    const message = createBaseConfigMessage();
    message.humanControlRequest = (object.humanControlRequest !== undefined && object.humanControlRequest !== null)
      ? ConfigMessage_HumanControlRequest.fromPartial(object.humanControlRequest)
      : undefined;
    message.humanControlState = (object.humanControlState !== undefined && object.humanControlState !== null)
      ? ConfigMessage_HumanControlState.fromPartial(object.humanControlState)
      : undefined;
    message.carState = (object.carState !== undefined && object.carState !== null)
      ? ConfigMessage_CarState.fromPartial(object.carState)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null)
      ? ConfigMessage_Error.fromPartial(object.error)
      : undefined;
    return message;
  },
};

function createBaseConfigMessage_HumanControlRequest(): ConfigMessage_HumanControlRequest {
  return { type: 0 };
}

export const ConfigMessage_HumanControlRequest = {
  encode(message: ConfigMessage_HumanControlRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigMessage_HumanControlRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigMessage_HumanControlRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConfigMessage_HumanControlRequest {
    return { type: isSet(object.type) ? configMessage_ControlRequestTypeFromJSON(object.type) : 0 };
  },

  toJSON(message: ConfigMessage_HumanControlRequest): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = configMessage_ControlRequestTypeToJSON(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConfigMessage_HumanControlRequest>, I>>(
    base?: I,
  ): ConfigMessage_HumanControlRequest {
    return ConfigMessage_HumanControlRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConfigMessage_HumanControlRequest>, I>>(
    object: I,
  ): ConfigMessage_HumanControlRequest {
    const message = createBaseConfigMessage_HumanControlRequest();
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseConfigMessage_HumanControlState(): ConfigMessage_HumanControlState {
  return { activeControllerId: "" };
}

export const ConfigMessage_HumanControlState = {
  encode(message: ConfigMessage_HumanControlState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.activeControllerId !== "") {
      writer.uint32(10).string(message.activeControllerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigMessage_HumanControlState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigMessage_HumanControlState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.activeControllerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConfigMessage_HumanControlState {
    return { activeControllerId: isSet(object.activeControllerId) ? globalThis.String(object.activeControllerId) : "" };
  },

  toJSON(message: ConfigMessage_HumanControlState): unknown {
    const obj: any = {};
    if (message.activeControllerId !== "") {
      obj.activeControllerId = message.activeControllerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConfigMessage_HumanControlState>, I>>(base?: I): ConfigMessage_HumanControlState {
    return ConfigMessage_HumanControlState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConfigMessage_HumanControlState>, I>>(
    object: I,
  ): ConfigMessage_HumanControlState {
    const message = createBaseConfigMessage_HumanControlState();
    message.activeControllerId = object.activeControllerId ?? "";
    return message;
  },
};

function createBaseConfigMessage_CarState(): ConfigMessage_CarState {
  return { connected: false };
}

export const ConfigMessage_CarState = {
  encode(message: ConfigMessage_CarState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connected !== false) {
      writer.uint32(8).bool(message.connected);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigMessage_CarState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigMessage_CarState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.connected = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConfigMessage_CarState {
    return { connected: isSet(object.connected) ? globalThis.Boolean(object.connected) : false };
  },

  toJSON(message: ConfigMessage_CarState): unknown {
    const obj: any = {};
    if (message.connected !== false) {
      obj.connected = message.connected;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConfigMessage_CarState>, I>>(base?: I): ConfigMessage_CarState {
    return ConfigMessage_CarState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConfigMessage_CarState>, I>>(object: I): ConfigMessage_CarState {
    const message = createBaseConfigMessage_CarState();
    message.connected = object.connected ?? false;
    return message;
  },
};

function createBaseConfigMessage_Error(): ConfigMessage_Error {
  return { message: "" };
}

export const ConfigMessage_Error = {
  encode(message: ConfigMessage_Error, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigMessage_Error {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigMessage_Error();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConfigMessage_Error {
    return { message: isSet(object.message) ? globalThis.String(object.message) : "" };
  },

  toJSON(message: ConfigMessage_Error): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConfigMessage_Error>, I>>(base?: I): ConfigMessage_Error {
    return ConfigMessage_Error.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConfigMessage_Error>, I>>(object: I): ConfigMessage_Error {
    const message = createBaseConfigMessage_Error();
    message.message = object.message ?? "";
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
