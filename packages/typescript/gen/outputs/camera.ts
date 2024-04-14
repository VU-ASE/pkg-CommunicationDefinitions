/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "protobuf_msgs";

/** Possible Objects the Imaging Module may detect */
export enum DetectedObjects {
  /** FINISH_LINE - Finish_line_detected */
  FINISH_LINE = 0,
  /** OFF_TRACK - Car no longer on the track */
  OFF_TRACK = 1,
  /** OBSTACLE - Detected obstacle */
  OBSTACLE = 2,
  /** INTERSECTION - Detected intersection */
  INTERSECTION = 3,
  /** MISSING_LEFT_LANE - Can not find left lane */
  MISSING_LEFT_LANE = 4,
  /** MISSING_RIGHT_LANE - Can not find right lane */
  MISSING_RIGHT_LANE = 5,
  /** SHARP_RIGHT - 90 degree right turn */
  SHARP_RIGHT = 6,
  /** SHARP_LEFT - 90 degree left turn */
  SHARP_LEFT = 7,
  /** U_TURN - Detected U turn */
  U_TURN = 8,
  /** S_TURN - Detected S turn (double u turn) */
  S_TURN = 9,
  UNRECOGNIZED = -1,
}

export function detectedObjectsFromJSON(object: any): DetectedObjects {
  switch (object) {
    case 0:
    case "FINISH_LINE":
      return DetectedObjects.FINISH_LINE;
    case 1:
    case "OFF_TRACK":
      return DetectedObjects.OFF_TRACK;
    case 2:
    case "OBSTACLE":
      return DetectedObjects.OBSTACLE;
    case 3:
    case "INTERSECTION":
      return DetectedObjects.INTERSECTION;
    case 4:
    case "MISSING_LEFT_LANE":
      return DetectedObjects.MISSING_LEFT_LANE;
    case 5:
    case "MISSING_RIGHT_LANE":
      return DetectedObjects.MISSING_RIGHT_LANE;
    case 6:
    case "SHARP_RIGHT":
      return DetectedObjects.SHARP_RIGHT;
    case 7:
    case "SHARP_LEFT":
      return DetectedObjects.SHARP_LEFT;
    case 8:
    case "U_TURN":
      return DetectedObjects.U_TURN;
    case 9:
    case "S_TURN":
      return DetectedObjects.S_TURN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DetectedObjects.UNRECOGNIZED;
  }
}

export function detectedObjectsToJSON(object: DetectedObjects): string {
  switch (object) {
    case DetectedObjects.FINISH_LINE:
      return "FINISH_LINE";
    case DetectedObjects.OFF_TRACK:
      return "OFF_TRACK";
    case DetectedObjects.OBSTACLE:
      return "OBSTACLE";
    case DetectedObjects.INTERSECTION:
      return "INTERSECTION";
    case DetectedObjects.MISSING_LEFT_LANE:
      return "MISSING_LEFT_LANE";
    case DetectedObjects.MISSING_RIGHT_LANE:
      return "MISSING_RIGHT_LANE";
    case DetectedObjects.SHARP_RIGHT:
      return "SHARP_RIGHT";
    case DetectedObjects.SHARP_LEFT:
      return "SHARP_LEFT";
    case DetectedObjects.U_TURN:
      return "U_TURN";
    case DetectedObjects.S_TURN:
      return "S_TURN";
    case DetectedObjects.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

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
  trajectory: CameraSensorOutput_Trajectory | undefined;
  debugFrame: CameraSensorOutput_DebugFrame | undefined;
  objects: CameraSensorOutput_Objects | undefined;
}

/** Defined by the Path Planner */
export interface CameraSensorOutput_Trajectory {
  points: CameraSensorOutput_Trajectory_Point[];
  width: number;
  height: number;
}

export interface CameraSensorOutput_Trajectory_Point {
  x: number;
  y: number;
}

export interface CameraSensorOutput_DebugFrame {
  jpeg: Uint8Array;
  /** if image livestreaming is disabled, or imaging module wants to draw additional information on the image, it can be done here */
  canvas: Canvas | undefined;
}

export interface CameraSensorOutput_Objects {
  items: DetectedObjects[];
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
  return { trajectory: undefined, debugFrame: undefined, objects: undefined };
}

export const CameraSensorOutput = {
  encode(message: CameraSensorOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trajectory !== undefined) {
      CameraSensorOutput_Trajectory.encode(message.trajectory, writer.uint32(10).fork()).ldelim();
    }
    if (message.debugFrame !== undefined) {
      CameraSensorOutput_DebugFrame.encode(message.debugFrame, writer.uint32(18).fork()).ldelim();
    }
    if (message.objects !== undefined) {
      CameraSensorOutput_Objects.encode(message.objects, writer.uint32(26).fork()).ldelim();
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
          if (tag !== 10) {
            break;
          }

          message.trajectory = CameraSensorOutput_Trajectory.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.debugFrame = CameraSensorOutput_DebugFrame.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.objects = CameraSensorOutput_Objects.decode(reader, reader.uint32());
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
      trajectory: isSet(object.trajectory) ? CameraSensorOutput_Trajectory.fromJSON(object.trajectory) : undefined,
      debugFrame: isSet(object.debugFrame) ? CameraSensorOutput_DebugFrame.fromJSON(object.debugFrame) : undefined,
      objects: isSet(object.objects) ? CameraSensorOutput_Objects.fromJSON(object.objects) : undefined,
    };
  },

  toJSON(message: CameraSensorOutput): unknown {
    const obj: any = {};
    if (message.trajectory !== undefined) {
      obj.trajectory = CameraSensorOutput_Trajectory.toJSON(message.trajectory);
    }
    if (message.debugFrame !== undefined) {
      obj.debugFrame = CameraSensorOutput_DebugFrame.toJSON(message.debugFrame);
    }
    if (message.objects !== undefined) {
      obj.objects = CameraSensorOutput_Objects.toJSON(message.objects);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CameraSensorOutput>, I>>(base?: I): CameraSensorOutput {
    return CameraSensorOutput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CameraSensorOutput>, I>>(object: I): CameraSensorOutput {
    const message = createBaseCameraSensorOutput();
    message.trajectory = (object.trajectory !== undefined && object.trajectory !== null)
      ? CameraSensorOutput_Trajectory.fromPartial(object.trajectory)
      : undefined;
    message.debugFrame = (object.debugFrame !== undefined && object.debugFrame !== null)
      ? CameraSensorOutput_DebugFrame.fromPartial(object.debugFrame)
      : undefined;
    message.objects = (object.objects !== undefined && object.objects !== null)
      ? CameraSensorOutput_Objects.fromPartial(object.objects)
      : undefined;
    return message;
  },
};

function createBaseCameraSensorOutput_Trajectory(): CameraSensorOutput_Trajectory {
  return { points: [], width: 0, height: 0 };
}

export const CameraSensorOutput_Trajectory = {
  encode(message: CameraSensorOutput_Trajectory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.points) {
      CameraSensorOutput_Trajectory_Point.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.width !== 0) {
      writer.uint32(16).uint32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(24).uint32(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CameraSensorOutput_Trajectory {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCameraSensorOutput_Trajectory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.points.push(CameraSensorOutput_Trajectory_Point.decode(reader, reader.uint32()));
          continue;
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CameraSensorOutput_Trajectory {
    return {
      points: globalThis.Array.isArray(object?.points)
        ? object.points.map((e: any) => CameraSensorOutput_Trajectory_Point.fromJSON(e))
        : [],
      width: isSet(object.width) ? globalThis.Number(object.width) : 0,
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
    };
  },

  toJSON(message: CameraSensorOutput_Trajectory): unknown {
    const obj: any = {};
    if (message.points?.length) {
      obj.points = message.points.map((e) => CameraSensorOutput_Trajectory_Point.toJSON(e));
    }
    if (message.width !== 0) {
      obj.width = Math.round(message.width);
    }
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CameraSensorOutput_Trajectory>, I>>(base?: I): CameraSensorOutput_Trajectory {
    return CameraSensorOutput_Trajectory.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CameraSensorOutput_Trajectory>, I>>(
    object: I,
  ): CameraSensorOutput_Trajectory {
    const message = createBaseCameraSensorOutput_Trajectory();
    message.points = object.points?.map((e) => CameraSensorOutput_Trajectory_Point.fromPartial(e)) || [];
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseCameraSensorOutput_Trajectory_Point(): CameraSensorOutput_Trajectory_Point {
  return { x: 0, y: 0 };
}

export const CameraSensorOutput_Trajectory_Point = {
  encode(message: CameraSensorOutput_Trajectory_Point, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(8).int32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(16).int32(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CameraSensorOutput_Trajectory_Point {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCameraSensorOutput_Trajectory_Point();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.x = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.y = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CameraSensorOutput_Trajectory_Point {
    return {
      x: isSet(object.x) ? globalThis.Number(object.x) : 0,
      y: isSet(object.y) ? globalThis.Number(object.y) : 0,
    };
  },

  toJSON(message: CameraSensorOutput_Trajectory_Point): unknown {
    const obj: any = {};
    if (message.x !== 0) {
      obj.x = Math.round(message.x);
    }
    if (message.y !== 0) {
      obj.y = Math.round(message.y);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CameraSensorOutput_Trajectory_Point>, I>>(
    base?: I,
  ): CameraSensorOutput_Trajectory_Point {
    return CameraSensorOutput_Trajectory_Point.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CameraSensorOutput_Trajectory_Point>, I>>(
    object: I,
  ): CameraSensorOutput_Trajectory_Point {
    const message = createBaseCameraSensorOutput_Trajectory_Point();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

function createBaseCameraSensorOutput_DebugFrame(): CameraSensorOutput_DebugFrame {
  return { jpeg: new Uint8Array(0), canvas: undefined };
}

export const CameraSensorOutput_DebugFrame = {
  encode(message: CameraSensorOutput_DebugFrame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jpeg.length !== 0) {
      writer.uint32(10).bytes(message.jpeg);
    }
    if (message.canvas !== undefined) {
      Canvas.encode(message.canvas, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CameraSensorOutput_DebugFrame {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCameraSensorOutput_DebugFrame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.jpeg = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): CameraSensorOutput_DebugFrame {
    return {
      jpeg: isSet(object.jpeg) ? bytesFromBase64(object.jpeg) : new Uint8Array(0),
      canvas: isSet(object.canvas) ? Canvas.fromJSON(object.canvas) : undefined,
    };
  },

  toJSON(message: CameraSensorOutput_DebugFrame): unknown {
    const obj: any = {};
    if (message.jpeg.length !== 0) {
      obj.jpeg = base64FromBytes(message.jpeg);
    }
    if (message.canvas !== undefined) {
      obj.canvas = Canvas.toJSON(message.canvas);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CameraSensorOutput_DebugFrame>, I>>(base?: I): CameraSensorOutput_DebugFrame {
    return CameraSensorOutput_DebugFrame.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CameraSensorOutput_DebugFrame>, I>>(
    object: I,
  ): CameraSensorOutput_DebugFrame {
    const message = createBaseCameraSensorOutput_DebugFrame();
    message.jpeg = object.jpeg ?? new Uint8Array(0);
    message.canvas = (object.canvas !== undefined && object.canvas !== null)
      ? Canvas.fromPartial(object.canvas)
      : undefined;
    return message;
  },
};

function createBaseCameraSensorOutput_Objects(): CameraSensorOutput_Objects {
  return { items: [] };
}

export const CameraSensorOutput_Objects = {
  encode(message: CameraSensorOutput_Objects, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.items) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CameraSensorOutput_Objects {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCameraSensorOutput_Objects();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.items.push(reader.int32() as any);

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.items.push(reader.int32() as any);
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CameraSensorOutput_Objects {
    return {
      items: globalThis.Array.isArray(object?.items) ? object.items.map((e: any) => detectedObjectsFromJSON(e)) : [],
    };
  },

  toJSON(message: CameraSensorOutput_Objects): unknown {
    const obj: any = {};
    if (message.items?.length) {
      obj.items = message.items.map((e) => detectedObjectsToJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CameraSensorOutput_Objects>, I>>(base?: I): CameraSensorOutput_Objects {
    return CameraSensorOutput_Objects.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CameraSensorOutput_Objects>, I>>(object: I): CameraSensorOutput_Objects {
    const message = createBaseCameraSensorOutput_Objects();
    message.items = object.items?.map((e) => e) || [];
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
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
  if ((globalThis as any).Buffer) {
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
