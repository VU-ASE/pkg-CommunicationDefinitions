/* eslint-disable */
import _m0 from "protobufjs/minimal";
import {
  Service,
  ServiceInformationRequest,
  ServiceList,
  ServiceListRequest,
  ServiceOrder,
  ServiceStatus,
} from "./servicediscovery";
import { TuningState, TuningStateRequest } from "./tuningstate";

export const protobufPackage = "protobuf_msgs";

export interface SystemManagerMessage {
  service?: Service | undefined;
  serviceInformationRequest?: ServiceInformationRequest | undefined;
  serviceStatus?: ServiceStatus | undefined;
  serviceOrder?: ServiceOrder | undefined;
  tuningState?: TuningState | undefined;
  tuningStateRequest?: TuningStateRequest | undefined;
  serviceListRequest?: ServiceListRequest | undefined;
  serviceList?: ServiceList | undefined;
}

function createBaseSystemManagerMessage(): SystemManagerMessage {
  return {
    service: undefined,
    serviceInformationRequest: undefined,
    serviceStatus: undefined,
    serviceOrder: undefined,
    tuningState: undefined,
    tuningStateRequest: undefined,
    serviceListRequest: undefined,
    serviceList: undefined,
  };
}

export const SystemManagerMessage = {
  encode(message: SystemManagerMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.service !== undefined) {
      Service.encode(message.service, writer.uint32(10).fork()).ldelim();
    }
    if (message.serviceInformationRequest !== undefined) {
      ServiceInformationRequest.encode(message.serviceInformationRequest, writer.uint32(18).fork()).ldelim();
    }
    if (message.serviceStatus !== undefined) {
      ServiceStatus.encode(message.serviceStatus, writer.uint32(26).fork()).ldelim();
    }
    if (message.serviceOrder !== undefined) {
      ServiceOrder.encode(message.serviceOrder, writer.uint32(34).fork()).ldelim();
    }
    if (message.tuningState !== undefined) {
      TuningState.encode(message.tuningState, writer.uint32(42).fork()).ldelim();
    }
    if (message.tuningStateRequest !== undefined) {
      TuningStateRequest.encode(message.tuningStateRequest, writer.uint32(50).fork()).ldelim();
    }
    if (message.serviceListRequest !== undefined) {
      ServiceListRequest.encode(message.serviceListRequest, writer.uint32(58).fork()).ldelim();
    }
    if (message.serviceList !== undefined) {
      ServiceList.encode(message.serviceList, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SystemManagerMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSystemManagerMessage();
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
          if (tag !== 18) {
            break;
          }

          message.serviceInformationRequest = ServiceInformationRequest.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.serviceStatus = ServiceStatus.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.serviceOrder = ServiceOrder.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.tuningState = TuningState.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.tuningStateRequest = TuningStateRequest.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.serviceListRequest = ServiceListRequest.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.serviceList = ServiceList.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SystemManagerMessage {
    return {
      service: isSet(object.service) ? Service.fromJSON(object.service) : undefined,
      serviceInformationRequest: isSet(object.serviceInformationRequest)
        ? ServiceInformationRequest.fromJSON(object.serviceInformationRequest)
        : undefined,
      serviceStatus: isSet(object.serviceStatus) ? ServiceStatus.fromJSON(object.serviceStatus) : undefined,
      serviceOrder: isSet(object.serviceOrder) ? ServiceOrder.fromJSON(object.serviceOrder) : undefined,
      tuningState: isSet(object.tuningState) ? TuningState.fromJSON(object.tuningState) : undefined,
      tuningStateRequest: isSet(object.tuningStateRequest)
        ? TuningStateRequest.fromJSON(object.tuningStateRequest)
        : undefined,
      serviceListRequest: isSet(object.serviceListRequest)
        ? ServiceListRequest.fromJSON(object.serviceListRequest)
        : undefined,
      serviceList: isSet(object.serviceList) ? ServiceList.fromJSON(object.serviceList) : undefined,
    };
  },

  toJSON(message: SystemManagerMessage): unknown {
    const obj: any = {};
    if (message.service !== undefined) {
      obj.service = Service.toJSON(message.service);
    }
    if (message.serviceInformationRequest !== undefined) {
      obj.serviceInformationRequest = ServiceInformationRequest.toJSON(message.serviceInformationRequest);
    }
    if (message.serviceStatus !== undefined) {
      obj.serviceStatus = ServiceStatus.toJSON(message.serviceStatus);
    }
    if (message.serviceOrder !== undefined) {
      obj.serviceOrder = ServiceOrder.toJSON(message.serviceOrder);
    }
    if (message.tuningState !== undefined) {
      obj.tuningState = TuningState.toJSON(message.tuningState);
    }
    if (message.tuningStateRequest !== undefined) {
      obj.tuningStateRequest = TuningStateRequest.toJSON(message.tuningStateRequest);
    }
    if (message.serviceListRequest !== undefined) {
      obj.serviceListRequest = ServiceListRequest.toJSON(message.serviceListRequest);
    }
    if (message.serviceList !== undefined) {
      obj.serviceList = ServiceList.toJSON(message.serviceList);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SystemManagerMessage>, I>>(base?: I): SystemManagerMessage {
    return SystemManagerMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SystemManagerMessage>, I>>(object: I): SystemManagerMessage {
    const message = createBaseSystemManagerMessage();
    message.service = (object.service !== undefined && object.service !== null)
      ? Service.fromPartial(object.service)
      : undefined;
    message.serviceInformationRequest =
      (object.serviceInformationRequest !== undefined && object.serviceInformationRequest !== null)
        ? ServiceInformationRequest.fromPartial(object.serviceInformationRequest)
        : undefined;
    message.serviceStatus = (object.serviceStatus !== undefined && object.serviceStatus !== null)
      ? ServiceStatus.fromPartial(object.serviceStatus)
      : undefined;
    message.serviceOrder = (object.serviceOrder !== undefined && object.serviceOrder !== null)
      ? ServiceOrder.fromPartial(object.serviceOrder)
      : undefined;
    message.tuningState = (object.tuningState !== undefined && object.tuningState !== null)
      ? TuningState.fromPartial(object.tuningState)
      : undefined;
    message.tuningStateRequest = (object.tuningStateRequest !== undefined && object.tuningStateRequest !== null)
      ? TuningStateRequest.fromPartial(object.tuningStateRequest)
      : undefined;
    message.serviceListRequest = (object.serviceListRequest !== undefined && object.serviceListRequest !== null)
      ? ServiceListRequest.fromPartial(object.serviceListRequest)
      : undefined;
    message.serviceList = (object.serviceList !== undefined && object.serviceList !== null)
      ? ServiceList.fromPartial(object.serviceList)
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
