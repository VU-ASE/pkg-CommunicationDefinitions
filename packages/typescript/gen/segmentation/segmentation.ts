/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "protobuf_msgs";

/** control messages exchanged by client(s), the server and the car */
export interface Segment {
  /** unique and increasing id of each the packet that this segment is part of */
  PacketId: number;
  /** unique and increasing id of the segment within the packet */
  SegmentId: number;
  /** total number of segments in the packet */
  TotalSegments: number;
  /** data of the segment */
  Data: Uint8Array;
}

function createBaseSegment(): Segment {
  return { PacketId: 0, SegmentId: 0, TotalSegments: 0, Data: new Uint8Array(0) };
}

export const Segment = {
  encode(message: Segment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.PacketId !== 0) {
      writer.uint32(8).int64(message.PacketId);
    }
    if (message.SegmentId !== 0) {
      writer.uint32(16).int64(message.SegmentId);
    }
    if (message.TotalSegments !== 0) {
      writer.uint32(24).int64(message.TotalSegments);
    }
    if (message.Data.length !== 0) {
      writer.uint32(34).bytes(message.Data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Segment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSegment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.PacketId = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.SegmentId = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.TotalSegments = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.Data = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Segment {
    return {
      PacketId: isSet(object.PacketId) ? globalThis.Number(object.PacketId) : 0,
      SegmentId: isSet(object.SegmentId) ? globalThis.Number(object.SegmentId) : 0,
      TotalSegments: isSet(object.TotalSegments) ? globalThis.Number(object.TotalSegments) : 0,
      Data: isSet(object.Data) ? bytesFromBase64(object.Data) : new Uint8Array(0),
    };
  },

  toJSON(message: Segment): unknown {
    const obj: any = {};
    if (message.PacketId !== 0) {
      obj.PacketId = Math.round(message.PacketId);
    }
    if (message.SegmentId !== 0) {
      obj.SegmentId = Math.round(message.SegmentId);
    }
    if (message.TotalSegments !== 0) {
      obj.TotalSegments = Math.round(message.TotalSegments);
    }
    if (message.Data.length !== 0) {
      obj.Data = base64FromBytes(message.Data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Segment>, I>>(base?: I): Segment {
    return Segment.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Segment>, I>>(object: I): Segment {
    const message = createBaseSegment();
    message.PacketId = object.PacketId ?? 0;
    message.SegmentId = object.SegmentId ?? 0;
    message.TotalSegments = object.TotalSegments ?? 0;
    message.Data = object.Data ?? new Uint8Array(0);
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
