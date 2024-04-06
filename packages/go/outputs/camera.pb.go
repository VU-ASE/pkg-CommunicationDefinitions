// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.33.0
// 	protoc        v3.6.1
// source: outputs/camera.proto

package pb_module_outputs

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type CanvasObject struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Types that are assignable to Object:
	//
	//	*CanvasObject_Line_
	//	*CanvasObject_Rectangle_
	//	*CanvasObject_Circle_
	Object isCanvasObject_Object `protobuf_oneof:"object"`
}

func (x *CanvasObject) Reset() {
	*x = CanvasObject{}
	if protoimpl.UnsafeEnabled {
		mi := &file_outputs_camera_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CanvasObject) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CanvasObject) ProtoMessage() {}

func (x *CanvasObject) ProtoReflect() protoreflect.Message {
	mi := &file_outputs_camera_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CanvasObject.ProtoReflect.Descriptor instead.
func (*CanvasObject) Descriptor() ([]byte, []int) {
	return file_outputs_camera_proto_rawDescGZIP(), []int{0}
}

func (m *CanvasObject) GetObject() isCanvasObject_Object {
	if m != nil {
		return m.Object
	}
	return nil
}

func (x *CanvasObject) GetLine() *CanvasObject_Line {
	if x, ok := x.GetObject().(*CanvasObject_Line_); ok {
		return x.Line
	}
	return nil
}

func (x *CanvasObject) GetRectangle() *CanvasObject_Rectangle {
	if x, ok := x.GetObject().(*CanvasObject_Rectangle_); ok {
		return x.Rectangle
	}
	return nil
}

func (x *CanvasObject) GetCircle() *CanvasObject_Circle {
	if x, ok := x.GetObject().(*CanvasObject_Circle_); ok {
		return x.Circle
	}
	return nil
}

type isCanvasObject_Object interface {
	isCanvasObject_Object()
}

type CanvasObject_Line_ struct {
	Line *CanvasObject_Line `protobuf:"bytes,1,opt,name=line,proto3,oneof"`
}

type CanvasObject_Rectangle_ struct {
	Rectangle *CanvasObject_Rectangle `protobuf:"bytes,2,opt,name=rectangle,proto3,oneof"`
}

type CanvasObject_Circle_ struct {
	Circle *CanvasObject_Circle `protobuf:"bytes,3,opt,name=circle,proto3,oneof"`
}

func (*CanvasObject_Line_) isCanvasObject_Object() {}

func (*CanvasObject_Rectangle_) isCanvasObject_Object() {}

func (*CanvasObject_Circle_) isCanvasObject_Object() {}

type Canvas struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Width   uint32          `protobuf:"varint,1,opt,name=width,proto3" json:"width,omitempty"`
	Height  uint32          `protobuf:"varint,2,opt,name=height,proto3" json:"height,omitempty"`
	Objects []*CanvasObject `protobuf:"bytes,3,rep,name=objects,proto3" json:"objects,omitempty"`
}

func (x *Canvas) Reset() {
	*x = Canvas{}
	if protoimpl.UnsafeEnabled {
		mi := &file_outputs_camera_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Canvas) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Canvas) ProtoMessage() {}

func (x *Canvas) ProtoReflect() protoreflect.Message {
	mi := &file_outputs_camera_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Canvas.ProtoReflect.Descriptor instead.
func (*Canvas) Descriptor() ([]byte, []int) {
	return file_outputs_camera_proto_rawDescGZIP(), []int{1}
}

func (x *Canvas) GetWidth() uint32 {
	if x != nil {
		return x.Width
	}
	return 0
}

func (x *Canvas) GetHeight() uint32 {
	if x != nil {
		return x.Height
	}
	return 0
}

func (x *Canvas) GetObjects() []*CanvasObject {
	if x != nil {
		return x.Objects
	}
	return nil
}

// The following sensor outputs are specific to the sensor type, bring your own sensor and add your own output here!
type CameraSensorOutput struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Trajectory *CameraSensorOutput_Trajectory `protobuf:"bytes,1,opt,name=trajectory,proto3" json:"trajectory,omitempty"`
	DebugFrame *CameraSensorOutput_DebugFrame `protobuf:"bytes,2,opt,name=debug_frame,json=debugFrame,proto3" json:"debug_frame,omitempty"`
	// Defined by convention
	Flags int64 `protobuf:"varint,3,opt,name=flags,proto3" json:"flags,omitempty"`
}

func (x *CameraSensorOutput) Reset() {
	*x = CameraSensorOutput{}
	if protoimpl.UnsafeEnabled {
		mi := &file_outputs_camera_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CameraSensorOutput) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CameraSensorOutput) ProtoMessage() {}

func (x *CameraSensorOutput) ProtoReflect() protoreflect.Message {
	mi := &file_outputs_camera_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CameraSensorOutput.ProtoReflect.Descriptor instead.
func (*CameraSensorOutput) Descriptor() ([]byte, []int) {
	return file_outputs_camera_proto_rawDescGZIP(), []int{2}
}

func (x *CameraSensorOutput) GetTrajectory() *CameraSensorOutput_Trajectory {
	if x != nil {
		return x.Trajectory
	}
	return nil
}

func (x *CameraSensorOutput) GetDebugFrame() *CameraSensorOutput_DebugFrame {
	if x != nil {
		return x.DebugFrame
	}
	return nil
}

func (x *CameraSensorOutput) GetFlags() int64 {
	if x != nil {
		return x.Flags
	}
	return 0
}

type CanvasObject_Point struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	X uint32 `protobuf:"varint,1,opt,name=x,proto3" json:"x,omitempty"`
	Y uint32 `protobuf:"varint,2,opt,name=y,proto3" json:"y,omitempty"`
}

func (x *CanvasObject_Point) Reset() {
	*x = CanvasObject_Point{}
	if protoimpl.UnsafeEnabled {
		mi := &file_outputs_camera_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CanvasObject_Point) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CanvasObject_Point) ProtoMessage() {}

func (x *CanvasObject_Point) ProtoReflect() protoreflect.Message {
	mi := &file_outputs_camera_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CanvasObject_Point.ProtoReflect.Descriptor instead.
func (*CanvasObject_Point) Descriptor() ([]byte, []int) {
	return file_outputs_camera_proto_rawDescGZIP(), []int{0, 0}
}

func (x *CanvasObject_Point) GetX() uint32 {
	if x != nil {
		return x.X
	}
	return 0
}

func (x *CanvasObject_Point) GetY() uint32 {
	if x != nil {
		return x.Y
	}
	return 0
}

type CanvasObject_Color struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	R uint32 `protobuf:"varint,1,opt,name=r,proto3" json:"r,omitempty"`
	G uint32 `protobuf:"varint,2,opt,name=g,proto3" json:"g,omitempty"`
	B uint32 `protobuf:"varint,3,opt,name=b,proto3" json:"b,omitempty"`
	A uint32 `protobuf:"varint,4,opt,name=a,proto3" json:"a,omitempty"`
}

func (x *CanvasObject_Color) Reset() {
	*x = CanvasObject_Color{}
	if protoimpl.UnsafeEnabled {
		mi := &file_outputs_camera_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CanvasObject_Color) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CanvasObject_Color) ProtoMessage() {}

func (x *CanvasObject_Color) ProtoReflect() protoreflect.Message {
	mi := &file_outputs_camera_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CanvasObject_Color.ProtoReflect.Descriptor instead.
func (*CanvasObject_Color) Descriptor() ([]byte, []int) {
	return file_outputs_camera_proto_rawDescGZIP(), []int{0, 1}
}

func (x *CanvasObject_Color) GetR() uint32 {
	if x != nil {
		return x.R
	}
	return 0
}

func (x *CanvasObject_Color) GetG() uint32 {
	if x != nil {
		return x.G
	}
	return 0
}

func (x *CanvasObject_Color) GetB() uint32 {
	if x != nil {
		return x.B
	}
	return 0
}

func (x *CanvasObject_Color) GetA() uint32 {
	if x != nil {
		return x.A
	}
	return 0
}

type CanvasObject_Line struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Start *CanvasObject_Point `protobuf:"bytes,1,opt,name=start,proto3" json:"start,omitempty"`
	End   *CanvasObject_Point `protobuf:"bytes,2,opt,name=end,proto3" json:"end,omitempty"`
	Width uint32              `protobuf:"varint,3,opt,name=width,proto3" json:"width,omitempty"`
	Color *CanvasObject_Color `protobuf:"bytes,4,opt,name=color,proto3" json:"color,omitempty"`
}

func (x *CanvasObject_Line) Reset() {
	*x = CanvasObject_Line{}
	if protoimpl.UnsafeEnabled {
		mi := &file_outputs_camera_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CanvasObject_Line) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CanvasObject_Line) ProtoMessage() {}

func (x *CanvasObject_Line) ProtoReflect() protoreflect.Message {
	mi := &file_outputs_camera_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CanvasObject_Line.ProtoReflect.Descriptor instead.
func (*CanvasObject_Line) Descriptor() ([]byte, []int) {
	return file_outputs_camera_proto_rawDescGZIP(), []int{0, 2}
}

func (x *CanvasObject_Line) GetStart() *CanvasObject_Point {
	if x != nil {
		return x.Start
	}
	return nil
}

func (x *CanvasObject_Line) GetEnd() *CanvasObject_Point {
	if x != nil {
		return x.End
	}
	return nil
}

func (x *CanvasObject_Line) GetWidth() uint32 {
	if x != nil {
		return x.Width
	}
	return 0
}

func (x *CanvasObject_Line) GetColor() *CanvasObject_Color {
	if x != nil {
		return x.Color
	}
	return nil
}

type CanvasObject_Rectangle struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TopLeft     *CanvasObject_Point `protobuf:"bytes,1,opt,name=topLeft,proto3" json:"topLeft,omitempty"`
	BottomRight *CanvasObject_Point `protobuf:"bytes,2,opt,name=bottomRight,proto3" json:"bottomRight,omitempty"`
	Width       uint32              `protobuf:"varint,3,opt,name=width,proto3" json:"width,omitempty"`
	Color       *CanvasObject_Color `protobuf:"bytes,4,opt,name=color,proto3" json:"color,omitempty"`
}

func (x *CanvasObject_Rectangle) Reset() {
	*x = CanvasObject_Rectangle{}
	if protoimpl.UnsafeEnabled {
		mi := &file_outputs_camera_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CanvasObject_Rectangle) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CanvasObject_Rectangle) ProtoMessage() {}

func (x *CanvasObject_Rectangle) ProtoReflect() protoreflect.Message {
	mi := &file_outputs_camera_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CanvasObject_Rectangle.ProtoReflect.Descriptor instead.
func (*CanvasObject_Rectangle) Descriptor() ([]byte, []int) {
	return file_outputs_camera_proto_rawDescGZIP(), []int{0, 3}
}

func (x *CanvasObject_Rectangle) GetTopLeft() *CanvasObject_Point {
	if x != nil {
		return x.TopLeft
	}
	return nil
}

func (x *CanvasObject_Rectangle) GetBottomRight() *CanvasObject_Point {
	if x != nil {
		return x.BottomRight
	}
	return nil
}

func (x *CanvasObject_Rectangle) GetWidth() uint32 {
	if x != nil {
		return x.Width
	}
	return 0
}

func (x *CanvasObject_Rectangle) GetColor() *CanvasObject_Color {
	if x != nil {
		return x.Color
	}
	return nil
}

type CanvasObject_Circle struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Center *CanvasObject_Point `protobuf:"bytes,1,opt,name=center,proto3" json:"center,omitempty"`
	Radius uint32              `protobuf:"varint,2,opt,name=radius,proto3" json:"radius,omitempty"`
	Width  uint32              `protobuf:"varint,3,opt,name=width,proto3" json:"width,omitempty"`
	Color  *CanvasObject_Color `protobuf:"bytes,4,opt,name=color,proto3" json:"color,omitempty"`
}

func (x *CanvasObject_Circle) Reset() {
	*x = CanvasObject_Circle{}
	if protoimpl.UnsafeEnabled {
		mi := &file_outputs_camera_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CanvasObject_Circle) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CanvasObject_Circle) ProtoMessage() {}

func (x *CanvasObject_Circle) ProtoReflect() protoreflect.Message {
	mi := &file_outputs_camera_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CanvasObject_Circle.ProtoReflect.Descriptor instead.
func (*CanvasObject_Circle) Descriptor() ([]byte, []int) {
	return file_outputs_camera_proto_rawDescGZIP(), []int{0, 4}
}

func (x *CanvasObject_Circle) GetCenter() *CanvasObject_Point {
	if x != nil {
		return x.Center
	}
	return nil
}

func (x *CanvasObject_Circle) GetRadius() uint32 {
	if x != nil {
		return x.Radius
	}
	return 0
}

func (x *CanvasObject_Circle) GetWidth() uint32 {
	if x != nil {
		return x.Width
	}
	return 0
}

func (x *CanvasObject_Circle) GetColor() *CanvasObject_Color {
	if x != nil {
		return x.Color
	}
	return nil
}

// Defined by the Path Planner
type CameraSensorOutput_Trajectory struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Points []*CameraSensorOutput_Trajectory_Point `protobuf:"bytes,1,rep,name=points,proto3" json:"points,omitempty"`
	Width  uint32                                 `protobuf:"varint,2,opt,name=width,proto3" json:"width,omitempty"`
	Height uint32                                 `protobuf:"varint,3,opt,name=height,proto3" json:"height,omitempty"`
}

func (x *CameraSensorOutput_Trajectory) Reset() {
	*x = CameraSensorOutput_Trajectory{}
	if protoimpl.UnsafeEnabled {
		mi := &file_outputs_camera_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CameraSensorOutput_Trajectory) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CameraSensorOutput_Trajectory) ProtoMessage() {}

func (x *CameraSensorOutput_Trajectory) ProtoReflect() protoreflect.Message {
	mi := &file_outputs_camera_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CameraSensorOutput_Trajectory.ProtoReflect.Descriptor instead.
func (*CameraSensorOutput_Trajectory) Descriptor() ([]byte, []int) {
	return file_outputs_camera_proto_rawDescGZIP(), []int{2, 0}
}

func (x *CameraSensorOutput_Trajectory) GetPoints() []*CameraSensorOutput_Trajectory_Point {
	if x != nil {
		return x.Points
	}
	return nil
}

func (x *CameraSensorOutput_Trajectory) GetWidth() uint32 {
	if x != nil {
		return x.Width
	}
	return 0
}

func (x *CameraSensorOutput_Trajectory) GetHeight() uint32 {
	if x != nil {
		return x.Height
	}
	return 0
}

type CameraSensorOutput_DebugFrame struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Jpeg []byte `protobuf:"bytes,1,opt,name=jpeg,proto3" json:"jpeg,omitempty"`
	// if image livestreaming is disabled, or imaging module wants to draw additional information on the image, it can be done here
	Canvas *Canvas `protobuf:"bytes,5,opt,name=canvas,proto3" json:"canvas,omitempty"`
}

func (x *CameraSensorOutput_DebugFrame) Reset() {
	*x = CameraSensorOutput_DebugFrame{}
	if protoimpl.UnsafeEnabled {
		mi := &file_outputs_camera_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CameraSensorOutput_DebugFrame) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CameraSensorOutput_DebugFrame) ProtoMessage() {}

func (x *CameraSensorOutput_DebugFrame) ProtoReflect() protoreflect.Message {
	mi := &file_outputs_camera_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CameraSensorOutput_DebugFrame.ProtoReflect.Descriptor instead.
func (*CameraSensorOutput_DebugFrame) Descriptor() ([]byte, []int) {
	return file_outputs_camera_proto_rawDescGZIP(), []int{2, 1}
}

func (x *CameraSensorOutput_DebugFrame) GetJpeg() []byte {
	if x != nil {
		return x.Jpeg
	}
	return nil
}

func (x *CameraSensorOutput_DebugFrame) GetCanvas() *Canvas {
	if x != nil {
		return x.Canvas
	}
	return nil
}

type CameraSensorOutput_Trajectory_Point struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	X uint32 `protobuf:"varint,1,opt,name=x,proto3" json:"x,omitempty"`
	Y uint32 `protobuf:"varint,2,opt,name=y,proto3" json:"y,omitempty"`
}

func (x *CameraSensorOutput_Trajectory_Point) Reset() {
	*x = CameraSensorOutput_Trajectory_Point{}
	if protoimpl.UnsafeEnabled {
		mi := &file_outputs_camera_proto_msgTypes[10]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CameraSensorOutput_Trajectory_Point) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CameraSensorOutput_Trajectory_Point) ProtoMessage() {}

func (x *CameraSensorOutput_Trajectory_Point) ProtoReflect() protoreflect.Message {
	mi := &file_outputs_camera_proto_msgTypes[10]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CameraSensorOutput_Trajectory_Point.ProtoReflect.Descriptor instead.
func (*CameraSensorOutput_Trajectory_Point) Descriptor() ([]byte, []int) {
	return file_outputs_camera_proto_rawDescGZIP(), []int{2, 0, 0}
}

func (x *CameraSensorOutput_Trajectory_Point) GetX() uint32 {
	if x != nil {
		return x.X
	}
	return 0
}

func (x *CameraSensorOutput_Trajectory_Point) GetY() uint32 {
	if x != nil {
		return x.Y
	}
	return 0
}

var File_outputs_camera_proto protoreflect.FileDescriptor

var file_outputs_camera_proto_rawDesc = []byte{
	0x0a, 0x14, 0x6f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x73, 0x2f, 0x63, 0x61, 0x6d, 0x65, 0x72, 0x61,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x5f, 0x6d, 0x73, 0x67, 0x73, 0x22, 0x8d, 0x07, 0x0a, 0x0c, 0x43, 0x61, 0x6e, 0x76, 0x61, 0x73,
	0x4f, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x12, 0x36, 0x0a, 0x04, 0x6c, 0x69, 0x6e, 0x65, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x20, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f,
	0x6d, 0x73, 0x67, 0x73, 0x2e, 0x43, 0x61, 0x6e, 0x76, 0x61, 0x73, 0x4f, 0x62, 0x6a, 0x65, 0x63,
	0x74, 0x2e, 0x4c, 0x69, 0x6e, 0x65, 0x48, 0x00, 0x52, 0x04, 0x6c, 0x69, 0x6e, 0x65, 0x12, 0x45,
	0x0a, 0x09, 0x72, 0x65, 0x63, 0x74, 0x61, 0x6e, 0x67, 0x6c, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x25, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67,
	0x73, 0x2e, 0x43, 0x61, 0x6e, 0x76, 0x61, 0x73, 0x4f, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x2e, 0x52,
	0x65, 0x63, 0x74, 0x61, 0x6e, 0x67, 0x6c, 0x65, 0x48, 0x00, 0x52, 0x09, 0x72, 0x65, 0x63, 0x74,
	0x61, 0x6e, 0x67, 0x6c, 0x65, 0x12, 0x3c, 0x0a, 0x06, 0x63, 0x69, 0x72, 0x63, 0x6c, 0x65, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x22, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e, 0x43, 0x61, 0x6e, 0x76, 0x61, 0x73, 0x4f, 0x62, 0x6a, 0x65,
	0x63, 0x74, 0x2e, 0x43, 0x69, 0x72, 0x63, 0x6c, 0x65, 0x48, 0x00, 0x52, 0x06, 0x63, 0x69, 0x72,
	0x63, 0x6c, 0x65, 0x1a, 0x23, 0x0a, 0x05, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x12, 0x0c, 0x0a, 0x01,
	0x78, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x01, 0x78, 0x12, 0x0c, 0x0a, 0x01, 0x79, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x01, 0x79, 0x1a, 0x3f, 0x0a, 0x05, 0x43, 0x6f, 0x6c, 0x6f,
	0x72, 0x12, 0x0c, 0x0a, 0x01, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x01, 0x72, 0x12,
	0x0c, 0x0a, 0x01, 0x67, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x01, 0x67, 0x12, 0x0c, 0x0a,
	0x01, 0x62, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x01, 0x62, 0x12, 0x0c, 0x0a, 0x01, 0x61,
	0x18, 0x04, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x01, 0x61, 0x1a, 0xc3, 0x01, 0x0a, 0x04, 0x4c, 0x69,
	0x6e, 0x65, 0x12, 0x37, 0x0a, 0x05, 0x73, 0x74, 0x61, 0x72, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x21, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67,
	0x73, 0x2e, 0x43, 0x61, 0x6e, 0x76, 0x61, 0x73, 0x4f, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x2e, 0x50,
	0x6f, 0x69, 0x6e, 0x74, 0x52, 0x05, 0x73, 0x74, 0x61, 0x72, 0x74, 0x12, 0x33, 0x0a, 0x03, 0x65,
	0x6e, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x21, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e, 0x43, 0x61, 0x6e, 0x76, 0x61, 0x73, 0x4f,
	0x62, 0x6a, 0x65, 0x63, 0x74, 0x2e, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x52, 0x03, 0x65, 0x6e, 0x64,
	0x12, 0x14, 0x0a, 0x05, 0x77, 0x69, 0x64, 0x74, 0x68, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0d, 0x52,
	0x05, 0x77, 0x69, 0x64, 0x74, 0x68, 0x12, 0x37, 0x0a, 0x05, 0x63, 0x6f, 0x6c, 0x6f, 0x72, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x21, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e, 0x43, 0x61, 0x6e, 0x76, 0x61, 0x73, 0x4f, 0x62, 0x6a, 0x65,
	0x63, 0x74, 0x2e, 0x43, 0x6f, 0x6c, 0x6f, 0x72, 0x52, 0x05, 0x63, 0x6f, 0x6c, 0x6f, 0x72, 0x1a,
	0xdc, 0x01, 0x0a, 0x09, 0x52, 0x65, 0x63, 0x74, 0x61, 0x6e, 0x67, 0x6c, 0x65, 0x12, 0x3b, 0x0a,
	0x07, 0x74, 0x6f, 0x70, 0x4c, 0x65, 0x66, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x21,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e, 0x43,
	0x61, 0x6e, 0x76, 0x61, 0x73, 0x4f, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x2e, 0x50, 0x6f, 0x69, 0x6e,
	0x74, 0x52, 0x07, 0x74, 0x6f, 0x70, 0x4c, 0x65, 0x66, 0x74, 0x12, 0x43, 0x0a, 0x0b, 0x62, 0x6f,
	0x74, 0x74, 0x6f, 0x6d, 0x52, 0x69, 0x67, 0x68, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x21, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e,
	0x43, 0x61, 0x6e, 0x76, 0x61, 0x73, 0x4f, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x2e, 0x50, 0x6f, 0x69,
	0x6e, 0x74, 0x52, 0x0b, 0x62, 0x6f, 0x74, 0x74, 0x6f, 0x6d, 0x52, 0x69, 0x67, 0x68, 0x74, 0x12,
	0x14, 0x0a, 0x05, 0x77, 0x69, 0x64, 0x74, 0x68, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x05,
	0x77, 0x69, 0x64, 0x74, 0x68, 0x12, 0x37, 0x0a, 0x05, 0x63, 0x6f, 0x6c, 0x6f, 0x72, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x21, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f,
	0x6d, 0x73, 0x67, 0x73, 0x2e, 0x43, 0x61, 0x6e, 0x76, 0x61, 0x73, 0x4f, 0x62, 0x6a, 0x65, 0x63,
	0x74, 0x2e, 0x43, 0x6f, 0x6c, 0x6f, 0x72, 0x52, 0x05, 0x63, 0x6f, 0x6c, 0x6f, 0x72, 0x1a, 0xaa,
	0x01, 0x0a, 0x06, 0x43, 0x69, 0x72, 0x63, 0x6c, 0x65, 0x12, 0x39, 0x0a, 0x06, 0x63, 0x65, 0x6e,
	0x74, 0x65, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x21, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e, 0x43, 0x61, 0x6e, 0x76, 0x61, 0x73,
	0x4f, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x2e, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x52, 0x06, 0x63, 0x65,
	0x6e, 0x74, 0x65, 0x72, 0x12, 0x16, 0x0a, 0x06, 0x72, 0x61, 0x64, 0x69, 0x75, 0x73, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x0d, 0x52, 0x06, 0x72, 0x61, 0x64, 0x69, 0x75, 0x73, 0x12, 0x14, 0x0a, 0x05,
	0x77, 0x69, 0x64, 0x74, 0x68, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x05, 0x77, 0x69, 0x64,
	0x74, 0x68, 0x12, 0x37, 0x0a, 0x05, 0x63, 0x6f, 0x6c, 0x6f, 0x72, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x21, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67,
	0x73, 0x2e, 0x43, 0x61, 0x6e, 0x76, 0x61, 0x73, 0x4f, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x2e, 0x43,
	0x6f, 0x6c, 0x6f, 0x72, 0x52, 0x05, 0x63, 0x6f, 0x6c, 0x6f, 0x72, 0x42, 0x08, 0x0a, 0x06, 0x6f,
	0x62, 0x6a, 0x65, 0x63, 0x74, 0x22, 0x6d, 0x0a, 0x06, 0x43, 0x61, 0x6e, 0x76, 0x61, 0x73, 0x12,
	0x14, 0x0a, 0x05, 0x77, 0x69, 0x64, 0x74, 0x68, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x05,
	0x77, 0x69, 0x64, 0x74, 0x68, 0x12, 0x16, 0x0a, 0x06, 0x68, 0x65, 0x69, 0x67, 0x68, 0x74, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x06, 0x68, 0x65, 0x69, 0x67, 0x68, 0x74, 0x12, 0x35, 0x0a,
	0x07, 0x6f, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1b,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e, 0x43,
	0x61, 0x6e, 0x76, 0x61, 0x73, 0x4f, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x52, 0x07, 0x6f, 0x62, 0x6a,
	0x65, 0x63, 0x74, 0x73, 0x22, 0xc6, 0x03, 0x0a, 0x12, 0x43, 0x61, 0x6d, 0x65, 0x72, 0x61, 0x53,
	0x65, 0x6e, 0x73, 0x6f, 0x72, 0x4f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x12, 0x4c, 0x0a, 0x0a, 0x74,
	0x72, 0x61, 0x6a, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x2c, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e,
	0x43, 0x61, 0x6d, 0x65, 0x72, 0x61, 0x53, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x4f, 0x75, 0x74, 0x70,
	0x75, 0x74, 0x2e, 0x54, 0x72, 0x61, 0x6a, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x79, 0x52, 0x0a, 0x74,
	0x72, 0x61, 0x6a, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x79, 0x12, 0x4d, 0x0a, 0x0b, 0x64, 0x65, 0x62,
	0x75, 0x67, 0x5f, 0x66, 0x72, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2c,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e, 0x43,
	0x61, 0x6d, 0x65, 0x72, 0x61, 0x53, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x4f, 0x75, 0x74, 0x70, 0x75,
	0x74, 0x2e, 0x44, 0x65, 0x62, 0x75, 0x67, 0x46, 0x72, 0x61, 0x6d, 0x65, 0x52, 0x0a, 0x64, 0x65,
	0x62, 0x75, 0x67, 0x46, 0x72, 0x61, 0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x66, 0x6c, 0x61, 0x67,
	0x73, 0x18, 0x03, 0x20, 0x01, 0x28, 0x03, 0x52, 0x05, 0x66, 0x6c, 0x61, 0x67, 0x73, 0x1a, 0xab,
	0x01, 0x0a, 0x0a, 0x54, 0x72, 0x61, 0x6a, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x79, 0x12, 0x4a, 0x0a,
	0x06, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x32, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e, 0x43, 0x61,
	0x6d, 0x65, 0x72, 0x61, 0x53, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x4f, 0x75, 0x74, 0x70, 0x75, 0x74,
	0x2e, 0x54, 0x72, 0x61, 0x6a, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x79, 0x2e, 0x50, 0x6f, 0x69, 0x6e,
	0x74, 0x52, 0x06, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x73, 0x12, 0x14, 0x0a, 0x05, 0x77, 0x69, 0x64,
	0x74, 0x68, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x05, 0x77, 0x69, 0x64, 0x74, 0x68, 0x12,
	0x16, 0x0a, 0x06, 0x68, 0x65, 0x69, 0x67, 0x68, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0d, 0x52,
	0x06, 0x68, 0x65, 0x69, 0x67, 0x68, 0x74, 0x1a, 0x23, 0x0a, 0x05, 0x50, 0x6f, 0x69, 0x6e, 0x74,
	0x12, 0x0c, 0x0a, 0x01, 0x78, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x01, 0x78, 0x12, 0x0c,
	0x0a, 0x01, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x01, 0x79, 0x1a, 0x4f, 0x0a, 0x0a,
	0x44, 0x65, 0x62, 0x75, 0x67, 0x46, 0x72, 0x61, 0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6a, 0x70,
	0x65, 0x67, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x04, 0x6a, 0x70, 0x65, 0x67, 0x12, 0x2d,
	0x0a, 0x06, 0x63, 0x61, 0x6e, 0x76, 0x61, 0x73, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x15,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e, 0x43,
	0x61, 0x6e, 0x76, 0x61, 0x73, 0x52, 0x06, 0x63, 0x61, 0x6e, 0x76, 0x61, 0x73, 0x42, 0x17, 0x5a,
	0x15, 0x61, 0x73, 0x65, 0x2f, 0x70, 0x62, 0x5f, 0x6d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x5f, 0x6f,
	0x75, 0x74, 0x70, 0x75, 0x74, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_outputs_camera_proto_rawDescOnce sync.Once
	file_outputs_camera_proto_rawDescData = file_outputs_camera_proto_rawDesc
)

func file_outputs_camera_proto_rawDescGZIP() []byte {
	file_outputs_camera_proto_rawDescOnce.Do(func() {
		file_outputs_camera_proto_rawDescData = protoimpl.X.CompressGZIP(file_outputs_camera_proto_rawDescData)
	})
	return file_outputs_camera_proto_rawDescData
}

var file_outputs_camera_proto_msgTypes = make([]protoimpl.MessageInfo, 11)
var file_outputs_camera_proto_goTypes = []interface{}{
	(*CanvasObject)(nil),                        // 0: protobuf_msgs.CanvasObject
	(*Canvas)(nil),                              // 1: protobuf_msgs.Canvas
	(*CameraSensorOutput)(nil),                  // 2: protobuf_msgs.CameraSensorOutput
	(*CanvasObject_Point)(nil),                  // 3: protobuf_msgs.CanvasObject.Point
	(*CanvasObject_Color)(nil),                  // 4: protobuf_msgs.CanvasObject.Color
	(*CanvasObject_Line)(nil),                   // 5: protobuf_msgs.CanvasObject.Line
	(*CanvasObject_Rectangle)(nil),              // 6: protobuf_msgs.CanvasObject.Rectangle
	(*CanvasObject_Circle)(nil),                 // 7: protobuf_msgs.CanvasObject.Circle
	(*CameraSensorOutput_Trajectory)(nil),       // 8: protobuf_msgs.CameraSensorOutput.Trajectory
	(*CameraSensorOutput_DebugFrame)(nil),       // 9: protobuf_msgs.CameraSensorOutput.DebugFrame
	(*CameraSensorOutput_Trajectory_Point)(nil), // 10: protobuf_msgs.CameraSensorOutput.Trajectory.Point
}
var file_outputs_camera_proto_depIdxs = []int32{
	5,  // 0: protobuf_msgs.CanvasObject.line:type_name -> protobuf_msgs.CanvasObject.Line
	6,  // 1: protobuf_msgs.CanvasObject.rectangle:type_name -> protobuf_msgs.CanvasObject.Rectangle
	7,  // 2: protobuf_msgs.CanvasObject.circle:type_name -> protobuf_msgs.CanvasObject.Circle
	0,  // 3: protobuf_msgs.Canvas.objects:type_name -> protobuf_msgs.CanvasObject
	8,  // 4: protobuf_msgs.CameraSensorOutput.trajectory:type_name -> protobuf_msgs.CameraSensorOutput.Trajectory
	9,  // 5: protobuf_msgs.CameraSensorOutput.debug_frame:type_name -> protobuf_msgs.CameraSensorOutput.DebugFrame
	3,  // 6: protobuf_msgs.CanvasObject.Line.start:type_name -> protobuf_msgs.CanvasObject.Point
	3,  // 7: protobuf_msgs.CanvasObject.Line.end:type_name -> protobuf_msgs.CanvasObject.Point
	4,  // 8: protobuf_msgs.CanvasObject.Line.color:type_name -> protobuf_msgs.CanvasObject.Color
	3,  // 9: protobuf_msgs.CanvasObject.Rectangle.topLeft:type_name -> protobuf_msgs.CanvasObject.Point
	3,  // 10: protobuf_msgs.CanvasObject.Rectangle.bottomRight:type_name -> protobuf_msgs.CanvasObject.Point
	4,  // 11: protobuf_msgs.CanvasObject.Rectangle.color:type_name -> protobuf_msgs.CanvasObject.Color
	3,  // 12: protobuf_msgs.CanvasObject.Circle.center:type_name -> protobuf_msgs.CanvasObject.Point
	4,  // 13: protobuf_msgs.CanvasObject.Circle.color:type_name -> protobuf_msgs.CanvasObject.Color
	10, // 14: protobuf_msgs.CameraSensorOutput.Trajectory.points:type_name -> protobuf_msgs.CameraSensorOutput.Trajectory.Point
	1,  // 15: protobuf_msgs.CameraSensorOutput.DebugFrame.canvas:type_name -> protobuf_msgs.Canvas
	16, // [16:16] is the sub-list for method output_type
	16, // [16:16] is the sub-list for method input_type
	16, // [16:16] is the sub-list for extension type_name
	16, // [16:16] is the sub-list for extension extendee
	0,  // [0:16] is the sub-list for field type_name
}

func init() { file_outputs_camera_proto_init() }
func file_outputs_camera_proto_init() {
	if File_outputs_camera_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_outputs_camera_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CanvasObject); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_outputs_camera_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Canvas); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_outputs_camera_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CameraSensorOutput); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_outputs_camera_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CanvasObject_Point); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_outputs_camera_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CanvasObject_Color); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_outputs_camera_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CanvasObject_Line); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_outputs_camera_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CanvasObject_Rectangle); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_outputs_camera_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CanvasObject_Circle); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_outputs_camera_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CameraSensorOutput_Trajectory); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_outputs_camera_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CameraSensorOutput_DebugFrame); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_outputs_camera_proto_msgTypes[10].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CameraSensorOutput_Trajectory_Point); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	file_outputs_camera_proto_msgTypes[0].OneofWrappers = []interface{}{
		(*CanvasObject_Line_)(nil),
		(*CanvasObject_Rectangle_)(nil),
		(*CanvasObject_Circle_)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_outputs_camera_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   11,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_outputs_camera_proto_goTypes,
		DependencyIndexes: file_outputs_camera_proto_depIdxs,
		MessageInfos:      file_outputs_camera_proto_msgTypes,
	}.Build()
	File_outputs_camera_proto = out.File
	file_outputs_camera_proto_rawDesc = nil
	file_outputs_camera_proto_goTypes = nil
	file_outputs_camera_proto_depIdxs = nil
}
