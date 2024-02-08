/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "protobuf_msgs";

/** control messages exchanged by client(s), the server and the car */
export interface ConfigMessage {
  humanControlTakeoverRequest?: ConfigMessage_HumanControlTakeoverRequest | undefined;
  humanControlReleaseRequest?: ConfigMessage_HumanControlReleaseRequest | undefined;
  humanControlState?: ConfigMessage_HumanControlState | undefined;
  carState?: ConfigMessage_CarState | undefined;
  error?: ConfigMessage_Error | undefined;
}

export interface ConfigMessage_HumanControlTakeoverRequest {
}

export interface ConfigMessage_HumanControlReleaseRequest {
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
  return {
    humanControlTakeoverRequest: undefined,
    humanControlReleaseRequest: undefined,
    humanControlState: undefined,
    carState: undefined,
    error: undefined,
  };
}

export const ConfigMessage = {
  encode(message: ConfigMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.humanControlTakeoverRequest !== undefined) {
      ConfigMessage_HumanControlTakeoverRequest.encode(message.humanControlTakeoverRequest, writer.uint32(10).fork())
        .ldelim();
    }
    if (message.humanControlReleaseRequest !== undefined) {
      ConfigMessage_HumanControlReleaseRequest.encode(message.humanControlReleaseRequest, writer.uint32(18).fork())
        .ldelim();
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

          message.humanControlTakeoverRequest = ConfigMessage_HumanControlTakeoverRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.humanControlReleaseRequest = ConfigMessage_HumanControlReleaseRequest.decode(reader, reader.uint32());
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
      humanControlTakeoverRequest: isSet(object.humanControlTakeoverRequest)
        ? ConfigMessage_HumanControlTakeoverRequest.fromJSON(object.humanControlTakeoverRequest)
        : undefined,
      humanControlReleaseRequest: isSet(object.humanControlReleaseRequest)
        ? ConfigMessage_HumanControlReleaseRequest.fromJSON(object.humanControlReleaseRequest)
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
    if (message.humanControlTakeoverRequest !== undefined) {
      obj.humanControlTakeoverRequest = ConfigMessage_HumanControlTakeoverRequest.toJSON(
        message.humanControlTakeoverRequest,
      );
    }
    if (message.humanControlReleaseRequest !== undefined) {
      obj.humanControlReleaseRequest = ConfigMessage_HumanControlReleaseRequest.toJSON(
        message.humanControlReleaseRequest,
      );
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
    message.humanControlTakeoverRequest =
      (object.humanControlTakeoverRequest !== undefined && object.humanControlTakeoverRequest !== null)
        ? ConfigMessage_HumanControlTakeoverRequest.fromPartial(object.humanControlTakeoverRequest)
        : undefined;
    message.humanControlReleaseRequest =
      (object.humanControlReleaseRequest !== undefined && object.humanControlReleaseRequest !== null)
        ? ConfigMessage_HumanControlReleaseRequest.fromPartial(object.humanControlReleaseRequest)
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

function createBaseConfigMessage_HumanControlTakeoverRequest(): ConfigMessage_HumanControlTakeoverRequest {
  return {};
}

export const ConfigMessage_HumanControlTakeoverRequest = {
  encode(_: ConfigMessage_HumanControlTakeoverRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigMessage_HumanControlTakeoverRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigMessage_HumanControlTakeoverRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ConfigMessage_HumanControlTakeoverRequest {
    return {};
  },

  toJSON(_: ConfigMessage_HumanControlTakeoverRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ConfigMessage_HumanControlTakeoverRequest>, I>>(
    base?: I,
  ): ConfigMessage_HumanControlTakeoverRequest {
    return ConfigMessage_HumanControlTakeoverRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConfigMessage_HumanControlTakeoverRequest>, I>>(
    _: I,
  ): ConfigMessage_HumanControlTakeoverRequest {
    const message = createBaseConfigMessage_HumanControlTakeoverRequest();
    return message;
  },
};

function createBaseConfigMessage_HumanControlReleaseRequest(): ConfigMessage_HumanControlReleaseRequest {
  return {};
}

export const ConfigMessage_HumanControlReleaseRequest = {
  encode(_: ConfigMessage_HumanControlReleaseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigMessage_HumanControlReleaseRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigMessage_HumanControlReleaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ConfigMessage_HumanControlReleaseRequest {
    return {};
  },

  toJSON(_: ConfigMessage_HumanControlReleaseRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ConfigMessage_HumanControlReleaseRequest>, I>>(
    base?: I,
  ): ConfigMessage_HumanControlReleaseRequest {
    return ConfigMessage_HumanControlReleaseRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConfigMessage_HumanControlReleaseRequest>, I>>(
    _: I,
  ): ConfigMessage_HumanControlReleaseRequest {
    const message = createBaseConfigMessage_HumanControlReleaseRequest();
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
    if (message.connected === true) {
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
    if (message.connected === true) {
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
