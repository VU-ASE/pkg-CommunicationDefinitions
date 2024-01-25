/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "protobuf_msgs";

export interface CanvasObject {
  line?: CanvasObject_Line | undefined;
  rectangle?: CanvasObject_Rectangle | undefined;
  circle?: CanvasObject_Circle | undefined;
}

export interface CanvasObject_Point {
  x: number;
  y: number;
}

export interface CanvasObject_Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface CanvasObject_Line {
  start: CanvasObject_Point | undefined;
  end: CanvasObject_Point | undefined;
  width: number;
  color: CanvasObject_Color | undefined;
}

export interface CanvasObject_Rectangle {
  topLeft: CanvasObject_Point | undefined;
  bottomRight: CanvasObject_Point | undefined;
  width: number;
  color: CanvasObject_Color | undefined;
}

export interface CanvasObject_Circle {
  center: CanvasObject_Point | undefined;
  radius: number;
  width: number;
  color: CanvasObject_Color | undefined;
}

export interface Canvas {
  width: number;
  height: number;
  objects: CanvasObject[];
}

/** The following sensor outputs are specific to the sensor type, bring your own sensor and add your own output here! */
export interface CameraSensorOutput {
  /** dimensions of the image */
  width: number;
  height: number;
  /**
   * the image data, an array of byte arrays
   * e.g. if you have an RGB image, you will receive [ [redByte1, redByte2, ...], [greenByte1, greenByte2, ...], [blueByte1, blueByte2, ...] ]
   */
  channels: Uint8Array[];
  /** used for debugging */
  canvas: Canvas | undefined;
}

function createBaseCanvasObject(): CanvasObject {
  return { line: undefined, rectangle: undefined, circle: undefined };
}

export const CanvasObject = {
  encode(message: CanvasObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.line !== undefined) {
      CanvasObject_Line.encode(message.line, writer.uint32(10).fork()).ldelim();
    }
    if (message.rectangle !== undefined) {
      CanvasObject_Rectangle.encode(message.rectangle, writer.uint32(18).fork()).ldelim();
    }
    if (message.circle !== undefined) {
      CanvasObject_Circle.encode(message.circle, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CanvasObject {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCanvasObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.line = CanvasObject_Line.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.rectangle = CanvasObject_Rectangle.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.circle = CanvasObject_Circle.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CanvasObject {
    return {
      line: isSet(object.line) ? CanvasObject_Line.fromJSON(object.line) : undefined,
      rectangle: isSet(object.rectangle) ? CanvasObject_Rectangle.fromJSON(object.rectangle) : undefined,
      circle: isSet(object.circle) ? CanvasObject_Circle.fromJSON(object.circle) : undefined,
    };
  },

  toJSON(message: CanvasObject): unknown {
    const obj: any = {};
    if (message.line !== undefined) {
      obj.line = CanvasObject_Line.toJSON(message.line);
    }
    if (message.rectangle !== undefined) {
      obj.rectangle = CanvasObject_Rectangle.toJSON(message.rectangle);
    }
    if (message.circle !== undefined) {
      obj.circle = CanvasObject_Circle.toJSON(message.circle);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CanvasObject>, I>>(base?: I): CanvasObject {
    return CanvasObject.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CanvasObject>, I>>(object: I): CanvasObject {
    const message = createBaseCanvasObject();
    message.line = (object.line !== undefined && object.line !== null)
      ? CanvasObject_Line.fromPartial(object.line)
      : undefined;
    message.rectangle = (object.rectangle !== undefined && object.rectangle !== null)
      ? CanvasObject_Rectangle.fromPartial(object.rectangle)
      : undefined;
    message.circle = (object.circle !== undefined && object.circle !== null)
      ? CanvasObject_Circle.fromPartial(object.circle)
      : undefined;
    return message;
  },
};

function createBaseCanvasObject_Point(): CanvasObject_Point {
  return { x: 0, y: 0 };
}

export const CanvasObject_Point = {
  encode(message: CanvasObject_Point, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(8).uint32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(16).uint32(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CanvasObject_Point {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCanvasObject_Point();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.x = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.y = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CanvasObject_Point {
    return {
      x: isSet(object.x) ? globalThis.Number(object.x) : 0,
      y: isSet(object.y) ? globalThis.Number(object.y) : 0,
    };
  },

  toJSON(message: CanvasObject_Point): unknown {
    const obj: any = {};
    if (message.x !== 0) {
      obj.x = Math.round(message.x);
    }
    if (message.y !== 0) {
      obj.y = Math.round(message.y);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CanvasObject_Point>, I>>(base?: I): CanvasObject_Point {
    return CanvasObject_Point.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CanvasObject_Point>, I>>(object: I): CanvasObject_Point {
    const message = createBaseCanvasObject_Point();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

function createBaseCanvasObject_Color(): CanvasObject_Color {
  return { r: 0, g: 0, b: 0, a: 0 };
}

export const CanvasObject_Color = {
  encode(message: CanvasObject_Color, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.r !== 0) {
      writer.uint32(8).uint32(message.r);
    }
    if (message.g !== 0) {
      writer.uint32(16).uint32(message.g);
    }
    if (message.b !== 0) {
      writer.uint32(24).uint32(message.b);
    }
    if (message.a !== 0) {
      writer.uint32(32).uint32(message.a);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CanvasObject_Color {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCanvasObject_Color();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.r = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.g = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.b = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.a = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CanvasObject_Color {
    return {
      r: isSet(object.r) ? globalThis.Number(object.r) : 0,
      g: isSet(object.g) ? globalThis.Number(object.g) : 0,
      b: isSet(object.b) ? globalThis.Number(object.b) : 0,
      a: isSet(object.a) ? globalThis.Number(object.a) : 0,
    };
  },

  toJSON(message: CanvasObject_Color): unknown {
    const obj: any = {};
    if (message.r !== 0) {
      obj.r = Math.round(message.r);
    }
    if (message.g !== 0) {
      obj.g = Math.round(message.g);
    }
    if (message.b !== 0) {
      obj.b = Math.round(message.b);
    }
    if (message.a !== 0) {
      obj.a = Math.round(message.a);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CanvasObject_Color>, I>>(base?: I): CanvasObject_Color {
    return CanvasObject_Color.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CanvasObject_Color>, I>>(object: I): CanvasObject_Color {
    const message = createBaseCanvasObject_Color();
    message.r = object.r ?? 0;
    message.g = object.g ?? 0;
    message.b = object.b ?? 0;
    message.a = object.a ?? 0;
    return message;
  },
};

function createBaseCanvasObject_Line(): CanvasObject_Line {
  return { start: undefined, end: undefined, width: 0, color: undefined };
}

export const CanvasObject_Line = {
  encode(message: CanvasObject_Line, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start !== undefined) {
      CanvasObject_Point.encode(message.start, writer.uint32(10).fork()).ldelim();
    }
    if (message.end !== undefined) {
      CanvasObject_Point.encode(message.end, writer.uint32(18).fork()).ldelim();
    }
    if (message.width !== 0) {
      writer.uint32(24).uint32(message.width);
    }
    if (message.color !== undefined) {
      CanvasObject_Color.encode(message.color, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CanvasObject_Line {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCanvasObject_Line();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.start = CanvasObject_Point.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.end = CanvasObject_Point.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.width = reader.uint32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.color = CanvasObject_Color.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CanvasObject_Line {
    return {
      start: isSet(object.start) ? CanvasObject_Point.fromJSON(object.start) : undefined,
      end: isSet(object.end) ? CanvasObject_Point.fromJSON(object.end) : undefined,
      width: isSet(object.width) ? globalThis.Number(object.width) : 0,
      color: isSet(object.color) ? CanvasObject_Color.fromJSON(object.color) : undefined,
    };
  },

  toJSON(message: CanvasObject_Line): unknown {
    const obj: any = {};
    if (message.start !== undefined) {
      obj.start = CanvasObject_Point.toJSON(message.start);
    }
    if (message.end !== undefined) {
      obj.end = CanvasObject_Point.toJSON(message.end);
    }
    if (message.width !== 0) {
      obj.width = Math.round(message.width);
    }
    if (message.color !== undefined) {
      obj.color = CanvasObject_Color.toJSON(message.color);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CanvasObject_Line>, I>>(base?: I): CanvasObject_Line {
    return CanvasObject_Line.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CanvasObject_Line>, I>>(object: I): CanvasObject_Line {
    const message = createBaseCanvasObject_Line();
    message.start = (object.start !== undefined && object.start !== null)
      ? CanvasObject_Point.fromPartial(object.start)
      : undefined;
    message.end = (object.end !== undefined && object.end !== null)
      ? CanvasObject_Point.fromPartial(object.end)
      : undefined;
    message.width = object.width ?? 0;
    message.color = (object.color !== undefined && object.color !== null)
      ? CanvasObject_Color.fromPartial(object.color)
      : undefined;
    return message;
  },
};

function createBaseCanvasObject_Rectangle(): CanvasObject_Rectangle {
  return { topLeft: undefined, bottomRight: undefined, width: 0, color: undefined };
}

export const CanvasObject_Rectangle = {
  encode(message: CanvasObject_Rectangle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.topLeft !== undefined) {
      CanvasObject_Point.encode(message.topLeft, writer.uint32(10).fork()).ldelim();
    }
    if (message.bottomRight !== undefined) {
      CanvasObject_Point.encode(message.bottomRight, writer.uint32(18).fork()).ldelim();
    }
    if (message.width !== 0) {
      writer.uint32(24).uint32(message.width);
    }
    if (message.color !== undefined) {
      CanvasObject_Color.encode(message.color, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CanvasObject_Rectangle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCanvasObject_Rectangle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.topLeft = CanvasObject_Point.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bottomRight = CanvasObject_Point.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.width = reader.uint32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.color = CanvasObject_Color.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CanvasObject_Rectangle {
    return {
      topLeft: isSet(object.topLeft) ? CanvasObject_Point.fromJSON(object.topLeft) : undefined,
      bottomRight: isSet(object.bottomRight) ? CanvasObject_Point.fromJSON(object.bottomRight) : undefined,
      width: isSet(object.width) ? globalThis.Number(object.width) : 0,
      color: isSet(object.color) ? CanvasObject_Color.fromJSON(object.color) : undefined,
    };
  },

  toJSON(message: CanvasObject_Rectangle): unknown {
    const obj: any = {};
    if (message.topLeft !== undefined) {
      obj.topLeft = CanvasObject_Point.toJSON(message.topLeft);
    }
    if (message.bottomRight !== undefined) {
      obj.bottomRight = CanvasObject_Point.toJSON(message.bottomRight);
    }
    if (message.width !== 0) {
      obj.width = Math.round(message.width);
    }
    if (message.color !== undefined) {
      obj.color = CanvasObject_Color.toJSON(message.color);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CanvasObject_Rectangle>, I>>(base?: I): CanvasObject_Rectangle {
    return CanvasObject_Rectangle.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CanvasObject_Rectangle>, I>>(object: I): CanvasObject_Rectangle {
    const message = createBaseCanvasObject_Rectangle();
    message.topLeft = (object.topLeft !== undefined && object.topLeft !== null)
      ? CanvasObject_Point.fromPartial(object.topLeft)
      : undefined;
    message.bottomRight = (object.bottomRight !== undefined && object.bottomRight !== null)
      ? CanvasObject_Point.fromPartial(object.bottomRight)
      : undefined;
    message.width = object.width ?? 0;
    message.color = (object.color !== undefined && object.color !== null)
      ? CanvasObject_Color.fromPartial(object.color)
      : undefined;
    return message;
  },
};

function createBaseCanvasObject_Circle(): CanvasObject_Circle {
  return { center: undefined, radius: 0, width: 0, color: undefined };
}

export const CanvasObject_Circle = {
  encode(message: CanvasObject_Circle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.center !== undefined) {
      CanvasObject_Point.encode(message.center, writer.uint32(10).fork()).ldelim();
    }
    if (message.radius !== 0) {
      writer.uint32(16).uint32(message.radius);
    }
    if (message.width !== 0) {
      writer.uint32(24).uint32(message.width);
    }
    if (message.color !== undefined) {
      CanvasObject_Color.encode(message.color, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CanvasObject_Circle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCanvasObject_Circle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.center = CanvasObject_Point.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.radius = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.width = reader.uint32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.color = CanvasObject_Color.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CanvasObject_Circle {
    return {
      center: isSet(object.center) ? CanvasObject_Point.fromJSON(object.center) : undefined,
      radius: isSet(object.radius) ? globalThis.Number(object.radius) : 0,
      width: isSet(object.width) ? globalThis.Number(object.width) : 0,
      color: isSet(object.color) ? CanvasObject_Color.fromJSON(object.color) : undefined,
    };
  },

  toJSON(message: CanvasObject_Circle): unknown {
    const obj: any = {};
    if (message.center !== undefined) {
      obj.center = CanvasObject_Point.toJSON(message.center);
    }
    if (message.radius !== 0) {
      obj.radius = Math.round(message.radius);
    }
    if (message.width !== 0) {
      obj.width = Math.round(message.width);
    }
    if (message.color !== undefined) {
      obj.color = CanvasObject_Color.toJSON(message.color);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CanvasObject_Circle>, I>>(base?: I): CanvasObject_Circle {
    return CanvasObject_Circle.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CanvasObject_Circle>, I>>(object: I): CanvasObject_Circle {
    const message = createBaseCanvasObject_Circle();
    message.center = (object.center !== undefined && object.center !== null)
      ? CanvasObject_Point.fromPartial(object.center)
      : undefined;
    message.radius = object.radius ?? 0;
    message.width = object.width ?? 0;
    message.color = (object.color !== undefined && object.color !== null)
      ? CanvasObject_Color.fromPartial(object.color)
      : undefined;
    return message;
  },
};

function createBaseCanvas(): Canvas {
  return { width: 0, height: 0, objects: [] };
}

export const Canvas = {
  encode(message: Canvas, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.width !== 0) {
      writer.uint32(8).uint32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint32(message.height);
    }
    for (const v of message.objects) {
      CanvasObject.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Canvas {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCanvas();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.width = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.height = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.objects.push(CanvasObject.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Canvas {
    return {
      width: isSet(object.width) ? globalThis.Number(object.width) : 0,
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
      objects: globalThis.Array.isArray(object?.objects)
        ? object.objects.map((e: any) => CanvasObject.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Canvas): unknown {
    const obj: any = {};
    if (message.width !== 0) {
      obj.width = Math.round(message.width);
    }
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    if (message.objects?.length) {
      obj.objects = message.objects.map((e) => CanvasObject.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Canvas>, I>>(base?: I): Canvas {
    return Canvas.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Canvas>, I>>(object: I): Canvas {
    const message = createBaseCanvas();
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.objects = object.objects?.map((e) => CanvasObject.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCameraSensorOutput(): CameraSensorOutput {
  return { width: 0, height: 0, channels: [], canvas: undefined };
}

export const CameraSensorOutput = {
  encode(message: CameraSensorOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.width !== 0) {
      writer.uint32(8).uint32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint32(message.height);
    }
    for (const v of message.channels) {
      writer.uint32(26).bytes(v!);
    }
    if (message.canvas !== undefined) {
      Canvas.encode(message.canvas, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CameraSensorOutput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCameraSensorOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.width = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.height = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.channels.push(reader.bytes());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.canvas = Canvas.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CameraSensorOutput {
    return {
      width: isSet(object.width) ? globalThis.Number(object.width) : 0,
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
      channels: globalThis.Array.isArray(object?.channels) ? object.channels.map((e: any) => bytesFromBase64(e)) : [],
      canvas: isSet(object.canvas) ? Canvas.fromJSON(object.canvas) : undefined,
    };
  },

  toJSON(message: CameraSensorOutput): unknown {
    const obj: any = {};
    if (message.width !== 0) {
      obj.width = Math.round(message.width);
    }
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    if (message.channels?.length) {
      obj.channels = message.channels.map((e) => base64FromBytes(e));
    }
    if (message.canvas !== undefined) {
      obj.canvas = Canvas.toJSON(message.canvas);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CameraSensorOutput>, I>>(base?: I): CameraSensorOutput {
    return CameraSensorOutput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CameraSensorOutput>, I>>(object: I): CameraSensorOutput {
    const message = createBaseCameraSensorOutput();
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.channels = object.channels?.map((e) => e) || [];
    message.canvas = (object.canvas !== undefined && object.canvas !== null)
      ? Canvas.fromPartial(object.canvas)
      : undefined;
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
