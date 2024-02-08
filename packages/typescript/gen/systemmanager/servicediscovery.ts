/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "protobuf_msgs";

export enum ServiceStatus {
  UNKNOWN = 0,
  /** REGISTERED - Registered, but not running yet (probably waiting for dependencies) */
  REGISTERED = 1,
  /** RUNNING - Currently running (after registration) */
  RUNNING = 2,
  /** STOPPED - Stopped gracefully */
  STOPPED = 3,
  /** NOT_REGISTERED - Not registered yet (useful if you are waiting for this dependency) */
  NOT_REGISTERED = 4,
  UNRECOGNIZED = -1,
}

export function serviceStatusFromJSON(object: any): ServiceStatus {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ServiceStatus.UNKNOWN;
    case 1:
    case "REGISTERED":
      return ServiceStatus.REGISTERED;
    case 2:
    case "RUNNING":
      return ServiceStatus.RUNNING;
    case 3:
    case "STOPPED":
      return ServiceStatus.STOPPED;
    case 4:
    case "NOT_REGISTERED":
      return ServiceStatus.NOT_REGISTERED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ServiceStatus.UNRECOGNIZED;
  }
}

export function serviceStatusToJSON(object: ServiceStatus): string {
  switch (object) {
    case ServiceStatus.UNKNOWN:
      return "UNKNOWN";
    case ServiceStatus.REGISTERED:
      return "REGISTERED";
    case ServiceStatus.RUNNING:
      return "RUNNING";
    case ServiceStatus.STOPPED:
      return "STOPPED";
    case ServiceStatus.NOT_REGISTERED:
      return "NOT_REGISTERED";
    case ServiceStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

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

/** The options that can be set for a service */
export interface ServiceOption {
  name: string;
  type: ServiceOption_Type;
  mutable: boolean;
  /** should be set and checked based on the type */
  stringDefault: string;
  intDefault: number;
  floatDefault: number;
}

export enum ServiceOption_Type {
  STRING = 0,
  INT = 1,
  FLOAT = 2,
  UNRECOGNIZED = -1,
}

export function serviceOption_TypeFromJSON(object: any): ServiceOption_Type {
  switch (object) {
    case 0:
    case "STRING":
      return ServiceOption_Type.STRING;
    case 1:
    case "INT":
      return ServiceOption_Type.INT;
    case 2:
    case "FLOAT":
      return ServiceOption_Type.FLOAT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ServiceOption_Type.UNRECOGNIZED;
  }
}

export function serviceOption_TypeToJSON(object: ServiceOption_Type): string {
  switch (object) {
    case ServiceOption_Type.STRING:
      return "STRING";
    case ServiceOption_Type.INT:
      return "INT";
    case ServiceOption_Type.FLOAT:
      return "FLOAT";
    case ServiceOption_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** The system manager knows the dependencies of each service, to build a dependency graph */
export interface ServiceDependency {
  serviceName: string;
  outputName: string;
}

/** A description of a service, sent by a service to register itself or broadcasted by the system manager */
export interface Service {
  identifier: ServiceIdentifier | undefined;
  endpoints: ServiceEndpoint[];
  options: ServiceOption[];
  dependencies: ServiceDependency[];
  status: ServiceStatus;
}

/** When a service requests information about other services, it sends an InformationRequest message */
export interface ServiceInformationRequest {
  requested: ServiceIdentifier | undefined;
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

/** When a service wants to fetch all services, it sends a ServiceListRequest */
export interface ServiceListRequest {
  requested: ServiceIdentifier | undefined;
}

/** When the system manager sends a list of services, it sends a ServiceList */
export interface ServiceList {
  services: Service[];
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

function createBaseServiceOption(): ServiceOption {
  return { name: "", type: 0, mutable: false, stringDefault: "", intDefault: 0, floatDefault: 0 };
}

export const ServiceOption = {
  encode(message: ServiceOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.mutable === true) {
      writer.uint32(24).bool(message.mutable);
    }
    if (message.stringDefault !== "") {
      writer.uint32(34).string(message.stringDefault);
    }
    if (message.intDefault !== 0) {
      writer.uint32(40).int32(message.intDefault);
    }
    if (message.floatDefault !== 0) {
      writer.uint32(53).float(message.floatDefault);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceOption {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceOption();
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

          message.type = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.mutable = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.stringDefault = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.intDefault = reader.int32();
          continue;
        case 6:
          if (tag !== 53) {
            break;
          }

          message.floatDefault = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServiceOption {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      type: isSet(object.type) ? serviceOption_TypeFromJSON(object.type) : 0,
      mutable: isSet(object.mutable) ? globalThis.Boolean(object.mutable) : false,
      stringDefault: isSet(object.stringDefault) ? globalThis.String(object.stringDefault) : "",
      intDefault: isSet(object.intDefault) ? globalThis.Number(object.intDefault) : 0,
      floatDefault: isSet(object.floatDefault) ? globalThis.Number(object.floatDefault) : 0,
    };
  },

  toJSON(message: ServiceOption): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.type !== 0) {
      obj.type = serviceOption_TypeToJSON(message.type);
    }
    if (message.mutable === true) {
      obj.mutable = message.mutable;
    }
    if (message.stringDefault !== "") {
      obj.stringDefault = message.stringDefault;
    }
    if (message.intDefault !== 0) {
      obj.intDefault = Math.round(message.intDefault);
    }
    if (message.floatDefault !== 0) {
      obj.floatDefault = message.floatDefault;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServiceOption>, I>>(base?: I): ServiceOption {
    return ServiceOption.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServiceOption>, I>>(object: I): ServiceOption {
    const message = createBaseServiceOption();
    message.name = object.name ?? "";
    message.type = object.type ?? 0;
    message.mutable = object.mutable ?? false;
    message.stringDefault = object.stringDefault ?? "";
    message.intDefault = object.intDefault ?? 0;
    message.floatDefault = object.floatDefault ?? 0;
    return message;
  },
};

function createBaseServiceDependency(): ServiceDependency {
  return { serviceName: "", outputName: "" };
}

export const ServiceDependency = {
  encode(message: ServiceDependency, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.outputName !== "") {
      writer.uint32(18).string(message.outputName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceDependency {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceDependency();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.serviceName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.outputName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServiceDependency {
    return {
      serviceName: isSet(object.serviceName) ? globalThis.String(object.serviceName) : "",
      outputName: isSet(object.outputName) ? globalThis.String(object.outputName) : "",
    };
  },

  toJSON(message: ServiceDependency): unknown {
    const obj: any = {};
    if (message.serviceName !== "") {
      obj.serviceName = message.serviceName;
    }
    if (message.outputName !== "") {
      obj.outputName = message.outputName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServiceDependency>, I>>(base?: I): ServiceDependency {
    return ServiceDependency.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServiceDependency>, I>>(object: I): ServiceDependency {
    const message = createBaseServiceDependency();
    message.serviceName = object.serviceName ?? "";
    message.outputName = object.outputName ?? "";
    return message;
  },
};

function createBaseService(): Service {
  return { identifier: undefined, endpoints: [], options: [], dependencies: [], status: 0 };
}

export const Service = {
  encode(message: Service, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== undefined) {
      ServiceIdentifier.encode(message.identifier, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.endpoints) {
      ServiceEndpoint.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.options) {
      ServiceOption.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.dependencies) {
      ServiceDependency.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
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
        case 3:
          if (tag !== 26) {
            break;
          }

          message.options.push(ServiceOption.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.dependencies.push(ServiceDependency.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
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

  fromJSON(object: any): Service {
    return {
      identifier: isSet(object.identifier) ? ServiceIdentifier.fromJSON(object.identifier) : undefined,
      endpoints: globalThis.Array.isArray(object?.endpoints)
        ? object.endpoints.map((e: any) => ServiceEndpoint.fromJSON(e))
        : [],
      options: globalThis.Array.isArray(object?.options)
        ? object.options.map((e: any) => ServiceOption.fromJSON(e))
        : [],
      dependencies: globalThis.Array.isArray(object?.dependencies)
        ? object.dependencies.map((e: any) => ServiceDependency.fromJSON(e))
        : [],
      status: isSet(object.status) ? serviceStatusFromJSON(object.status) : 0,
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
    if (message.options?.length) {
      obj.options = message.options.map((e) => ServiceOption.toJSON(e));
    }
    if (message.dependencies?.length) {
      obj.dependencies = message.dependencies.map((e) => ServiceDependency.toJSON(e));
    }
    if (message.status !== 0) {
      obj.status = serviceStatusToJSON(message.status);
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
    message.options = object.options?.map((e) => ServiceOption.fromPartial(e)) || [];
    message.dependencies = object.dependencies?.map((e) => ServiceDependency.fromPartial(e)) || [];
    message.status = object.status ?? 0;
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

function createBaseServiceListRequest(): ServiceListRequest {
  return { requested: undefined };
}

export const ServiceListRequest = {
  encode(message: ServiceListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requested !== undefined) {
      ServiceIdentifier.encode(message.requested, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceListRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceListRequest();
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

  fromJSON(object: any): ServiceListRequest {
    return { requested: isSet(object.requested) ? ServiceIdentifier.fromJSON(object.requested) : undefined };
  },

  toJSON(message: ServiceListRequest): unknown {
    const obj: any = {};
    if (message.requested !== undefined) {
      obj.requested = ServiceIdentifier.toJSON(message.requested);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServiceListRequest>, I>>(base?: I): ServiceListRequest {
    return ServiceListRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServiceListRequest>, I>>(object: I): ServiceListRequest {
    const message = createBaseServiceListRequest();
    message.requested = (object.requested !== undefined && object.requested !== null)
      ? ServiceIdentifier.fromPartial(object.requested)
      : undefined;
    return message;
  },
};

function createBaseServiceList(): ServiceList {
  return { services: [] };
}

export const ServiceList = {
  encode(message: ServiceList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.services) {
      Service.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.services.push(Service.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServiceList {
    return {
      services: globalThis.Array.isArray(object?.services) ? object.services.map((e: any) => Service.fromJSON(e)) : [],
    };
  },

  toJSON(message: ServiceList): unknown {
    const obj: any = {};
    if (message.services?.length) {
      obj.services = message.services.map((e) => Service.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServiceList>, I>>(base?: I): ServiceList {
    return ServiceList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServiceList>, I>>(object: I): ServiceList {
    const message = createBaseServiceList();
    message.services = object.services?.map((e) => Service.fromPartial(e)) || [];
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