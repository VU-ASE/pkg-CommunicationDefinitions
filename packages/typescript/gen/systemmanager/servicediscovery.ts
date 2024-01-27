/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "protobuf_msgs";

/** Used to identify a service within the system */
export interface ServiceIdentifier {
  name: string;
  pid: number;
}

/** An endpoint that is made available by a service */
export interface ServiceEndpoint {
  /** the identifier to select this endpoint */
  name: string;
  /** the zmq address to connect to */
  address: string;
}

/** A description of a service, sent by a service to register itself or broadcasted by the system manager */
export interface Service {
  identifier: ServiceIdentifier | undefined;
  endpoints: ServiceEndpoint[];
}

/** When a service requests information about other services, it sends an InformationRequest message */
export interface ServiceInformationRequest {
  requested: ServiceIdentifier | undefined;
}

/**
 * When the system manager sends information about a service, it sends an Information message
 * Also used to broadcast registrations to all services
 */
export interface ServiceStatus {
  service: Service | undefined;
  status: ServiceStatus_Status;
}

export enum ServiceStatus_Status {
  UNKNOWN = 0,
  RUNNING = 1,
  STOPPED = 2,
  NOT_REGISTERED = 3,
  UNRECOGNIZED = -1,
}

export function serviceStatus_StatusFromJSON(object: any): ServiceStatus_Status {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ServiceStatus_Status.UNKNOWN;
    case 1:
    case "RUNNING":
      return ServiceStatus_Status.RUNNING;
    case 2:
    case "STOPPED":
      return ServiceStatus_Status.STOPPED;
    case 3:
    case "NOT_REGISTERED":
      return ServiceStatus_Status.NOT_REGISTERED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ServiceStatus_Status.UNRECOGNIZED;
  }
}

export function serviceStatus_StatusToJSON(object: ServiceStatus_Status): string {
  switch (object) {
    case ServiceStatus_Status.UNKNOWN:
      return "UNKNOWN";
    case ServiceStatus_Status.RUNNING:
      return "RUNNING";
    case ServiceStatus_Status.STOPPED:
      return "STOPPED";
    case ServiceStatus_Status.NOT_REGISTERED:
      return "NOT_REGISTERED";
    case ServiceStatus_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** The system manager can order services to stop/restart by sending a service order */
export interface ServiceOrder {
  /** The service this order is for */
  service: ServiceIdentifier | undefined;
  order: ServiceOrder_OrderType;
}

export enum ServiceOrder_OrderType {
  /** STOP - will attempt a graceful shutdown */
  STOP = 0,
  /** KILL - will kill the service immediately */
  KILL = 1,
  /** FORCE_RESTART - will kill the service immediately and restart */
  FORCE_RESTART = 2,
  UNRECOGNIZED = -1,
}

export function serviceOrder_OrderTypeFromJSON(object: any): ServiceOrder_OrderType {
  switch (object) {
    case 0:
    case "STOP":
      return ServiceOrder_OrderType.STOP;
    case 1:
    case "KILL":
      return ServiceOrder_OrderType.KILL;
    case 2:
    case "FORCE_RESTART":
      return ServiceOrder_OrderType.FORCE_RESTART;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ServiceOrder_OrderType.UNRECOGNIZED;
  }
}

export function serviceOrder_OrderTypeToJSON(object: ServiceOrder_OrderType): string {
  switch (object) {
    case ServiceOrder_OrderType.STOP:
      return "STOP";
    case ServiceOrder_OrderType.KILL:
      return "KILL";
    case ServiceOrder_OrderType.FORCE_RESTART:
      return "FORCE_RESTART";
    case ServiceOrder_OrderType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseServiceIdentifier(): ServiceIdentifier {
  return { name: "", pid: 0 };
}

export const ServiceIdentifier = {
  encode(message: ServiceIdentifier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.pid !== 0) {
      writer.uint32(16).int32(message.pid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceIdentifier {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceIdentifier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pid = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServiceIdentifier {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      pid: isSet(object.pid) ? globalThis.Number(object.pid) : 0,
    };
  },

  toJSON(message: ServiceIdentifier): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.pid !== 0) {
      obj.pid = Math.round(message.pid);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServiceIdentifier>, I>>(base?: I): ServiceIdentifier {
    return ServiceIdentifier.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServiceIdentifier>, I>>(object: I): ServiceIdentifier {
    const message = createBaseServiceIdentifier();
    message.name = object.name ?? "";
    message.pid = object.pid ?? 0;
    return message;
  },
};

function createBaseServiceEndpoint(): ServiceEndpoint {
  return { name: "", address: "" };
}

export const ServiceEndpoint = {
  encode(message: ServiceEndpoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceEndpoint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceEndpoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServiceEndpoint {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      address: isSet(object.address) ? globalThis.String(object.address) : "",
    };
  },

  toJSON(message: ServiceEndpoint): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServiceEndpoint>, I>>(base?: I): ServiceEndpoint {
    return ServiceEndpoint.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServiceEndpoint>, I>>(object: I): ServiceEndpoint {
    const message = createBaseServiceEndpoint();
    message.name = object.name ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseService(): Service {
  return { identifier: undefined, endpoints: [] };
}

export const Service = {
  encode(message: Service, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== undefined) {
      ServiceIdentifier.encode(message.identifier, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.endpoints) {
      ServiceEndpoint.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Service {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.identifier = ServiceIdentifier.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.endpoints.push(ServiceEndpoint.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Service {
    return {
      identifier: isSet(object.identifier) ? ServiceIdentifier.fromJSON(object.identifier) : undefined,
      endpoints: globalThis.Array.isArray(object?.endpoints)
        ? object.endpoints.map((e: any) => ServiceEndpoint.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Service): unknown {
    const obj: any = {};
    if (message.identifier !== undefined) {
      obj.identifier = ServiceIdentifier.toJSON(message.identifier);
    }
    if (message.endpoints?.length) {
      obj.endpoints = message.endpoints.map((e) => ServiceEndpoint.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Service>, I>>(base?: I): Service {
    return Service.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Service>, I>>(object: I): Service {
    const message = createBaseService();
    message.identifier = (object.identifier !== undefined && object.identifier !== null)
      ? ServiceIdentifier.fromPartial(object.identifier)
      : undefined;
    message.endpoints = object.endpoints?.map((e) => ServiceEndpoint.fromPartial(e)) || [];
    return message;
  },
};

function createBaseServiceInformationRequest(): ServiceInformationRequest {
  return { requested: undefined };
}

export const ServiceInformationRequest = {
  encode(message: ServiceInformationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requested !== undefined) {
      ServiceIdentifier.encode(message.requested, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceInformationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceInformationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.requested = ServiceIdentifier.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServiceInformationRequest {
    return { requested: isSet(object.requested) ? ServiceIdentifier.fromJSON(object.requested) : undefined };
  },

  toJSON(message: ServiceInformationRequest): unknown {
    const obj: any = {};
    if (message.requested !== undefined) {
      obj.requested = ServiceIdentifier.toJSON(message.requested);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServiceInformationRequest>, I>>(base?: I): ServiceInformationRequest {
    return ServiceInformationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServiceInformationRequest>, I>>(object: I): ServiceInformationRequest {
    const message = createBaseServiceInformationRequest();
    message.requested = (object.requested !== undefined && object.requested !== null)
      ? ServiceIdentifier.fromPartial(object.requested)
      : undefined;
    return message;
  },
};

function createBaseServiceStatus(): ServiceStatus {
  return { service: undefined, status: 0 };
}

export const ServiceStatus = {
  encode(message: ServiceStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.service !== undefined) {
      Service.encode(message.service, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.service = Service.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServiceStatus {
    return {
      service: isSet(object.service) ? Service.fromJSON(object.service) : undefined,
      status: isSet(object.status) ? serviceStatus_StatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: ServiceStatus): unknown {
    const obj: any = {};
    if (message.service !== undefined) {
      obj.service = Service.toJSON(message.service);
    }
    if (message.status !== 0) {
      obj.status = serviceStatus_StatusToJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServiceStatus>, I>>(base?: I): ServiceStatus {
    return ServiceStatus.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServiceStatus>, I>>(object: I): ServiceStatus {
    const message = createBaseServiceStatus();
    message.service = (object.service !== undefined && object.service !== null)
      ? Service.fromPartial(object.service)
      : undefined;
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseServiceOrder(): ServiceOrder {
  return { service: undefined, order: 0 };
}

export const ServiceOrder = {
  encode(message: ServiceOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.service !== undefined) {
      ServiceIdentifier.encode(message.service, writer.uint32(10).fork()).ldelim();
    }
    if (message.order !== 0) {
      writer.uint32(16).int32(message.order);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceOrder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.service = ServiceIdentifier.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.order = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServiceOrder {
    return {
      service: isSet(object.service) ? ServiceIdentifier.fromJSON(object.service) : undefined,
      order: isSet(object.order) ? serviceOrder_OrderTypeFromJSON(object.order) : 0,
    };
  },

  toJSON(message: ServiceOrder): unknown {
    const obj: any = {};
    if (message.service !== undefined) {
      obj.service = ServiceIdentifier.toJSON(message.service);
    }
    if (message.order !== 0) {
      obj.order = serviceOrder_OrderTypeToJSON(message.order);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServiceOrder>, I>>(base?: I): ServiceOrder {
    return ServiceOrder.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServiceOrder>, I>>(object: I): ServiceOrder {
    const message = createBaseServiceOrder();
    message.service = (object.service !== undefined && object.service !== null)
      ? ServiceIdentifier.fromPartial(object.service)
      : undefined;
    message.order = object.order ?? 0;
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
