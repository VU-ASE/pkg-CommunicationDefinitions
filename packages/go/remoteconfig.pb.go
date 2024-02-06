// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.32.0
// 	protoc        v3.6.1
// source: remoteconfig.proto

package pb_remote_config_messages

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

// control messages exchanged by client(s), the server and the car
type ConfigMessage struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Types that are assignable to Action:
	//
	//	*ConfigMessage_HumanControlTakeoverRequest_
	//	*ConfigMessage_HumanControlReleaseRequest_
	//	*ConfigMessage_HumanControlState_
	//	*ConfigMessage_CarState_
	//	*ConfigMessage_Error_
	Action isConfigMessage_Action `protobuf_oneof:"action"`
}

func (x *ConfigMessage) Reset() {
	*x = ConfigMessage{}
	if protoimpl.UnsafeEnabled {
		mi := &file_remoteconfig_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ConfigMessage) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ConfigMessage) ProtoMessage() {}

func (x *ConfigMessage) ProtoReflect() protoreflect.Message {
	mi := &file_remoteconfig_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ConfigMessage.ProtoReflect.Descriptor instead.
func (*ConfigMessage) Descriptor() ([]byte, []int) {
	return file_remoteconfig_proto_rawDescGZIP(), []int{0}
}

func (m *ConfigMessage) GetAction() isConfigMessage_Action {
	if m != nil {
		return m.Action
	}
	return nil
}

func (x *ConfigMessage) GetHumanControlTakeoverRequest() *ConfigMessage_HumanControlTakeoverRequest {
	if x, ok := x.GetAction().(*ConfigMessage_HumanControlTakeoverRequest_); ok {
		return x.HumanControlTakeoverRequest
	}
	return nil
}

func (x *ConfigMessage) GetHumanControlReleaseRequest() *ConfigMessage_HumanControlReleaseRequest {
	if x, ok := x.GetAction().(*ConfigMessage_HumanControlReleaseRequest_); ok {
		return x.HumanControlReleaseRequest
	}
	return nil
}

func (x *ConfigMessage) GetHumanControlState() *ConfigMessage_HumanControlState {
	if x, ok := x.GetAction().(*ConfigMessage_HumanControlState_); ok {
		return x.HumanControlState
	}
	return nil
}

func (x *ConfigMessage) GetCarState() *ConfigMessage_CarState {
	if x, ok := x.GetAction().(*ConfigMessage_CarState_); ok {
		return x.CarState
	}
	return nil
}

func (x *ConfigMessage) GetError() *ConfigMessage_Error {
	if x, ok := x.GetAction().(*ConfigMessage_Error_); ok {
		return x.Error
	}
	return nil
}

type isConfigMessage_Action interface {
	isConfigMessage_Action()
}

type ConfigMessage_HumanControlTakeoverRequest_ struct {
	HumanControlTakeoverRequest *ConfigMessage_HumanControlTakeoverRequest `protobuf:"bytes,1,opt,name=humanControlTakeoverRequest,proto3,oneof"`
}

type ConfigMessage_HumanControlReleaseRequest_ struct {
	HumanControlReleaseRequest *ConfigMessage_HumanControlReleaseRequest `protobuf:"bytes,2,opt,name=humanControlReleaseRequest,proto3,oneof"`
}

type ConfigMessage_HumanControlState_ struct {
	HumanControlState *ConfigMessage_HumanControlState `protobuf:"bytes,3,opt,name=humanControlState,proto3,oneof"`
}

type ConfigMessage_CarState_ struct {
	CarState *ConfigMessage_CarState `protobuf:"bytes,6,opt,name=carState,proto3,oneof"`
}

type ConfigMessage_Error_ struct {
	Error *ConfigMessage_Error `protobuf:"bytes,7,opt,name=error,proto3,oneof"`
}

func (*ConfigMessage_HumanControlTakeoverRequest_) isConfigMessage_Action() {}

func (*ConfigMessage_HumanControlReleaseRequest_) isConfigMessage_Action() {}

func (*ConfigMessage_HumanControlState_) isConfigMessage_Action() {}

func (*ConfigMessage_CarState_) isConfigMessage_Action() {}

func (*ConfigMessage_Error_) isConfigMessage_Action() {}

type ConfigMessage_HumanControlTakeoverRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *ConfigMessage_HumanControlTakeoverRequest) Reset() {
	*x = ConfigMessage_HumanControlTakeoverRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_remoteconfig_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ConfigMessage_HumanControlTakeoverRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ConfigMessage_HumanControlTakeoverRequest) ProtoMessage() {}

func (x *ConfigMessage_HumanControlTakeoverRequest) ProtoReflect() protoreflect.Message {
	mi := &file_remoteconfig_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ConfigMessage_HumanControlTakeoverRequest.ProtoReflect.Descriptor instead.
func (*ConfigMessage_HumanControlTakeoverRequest) Descriptor() ([]byte, []int) {
	return file_remoteconfig_proto_rawDescGZIP(), []int{0, 0}
}

type ConfigMessage_HumanControlReleaseRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *ConfigMessage_HumanControlReleaseRequest) Reset() {
	*x = ConfigMessage_HumanControlReleaseRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_remoteconfig_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ConfigMessage_HumanControlReleaseRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ConfigMessage_HumanControlReleaseRequest) ProtoMessage() {}

func (x *ConfigMessage_HumanControlReleaseRequest) ProtoReflect() protoreflect.Message {
	mi := &file_remoteconfig_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ConfigMessage_HumanControlReleaseRequest.ProtoReflect.Descriptor instead.
func (*ConfigMessage_HumanControlReleaseRequest) Descriptor() ([]byte, []int) {
	return file_remoteconfig_proto_rawDescGZIP(), []int{0, 1}
}

type ConfigMessage_HumanControlState struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// let everyone know who is the active controller now
	ActiveControllerId string `protobuf:"bytes,1,opt,name=activeControllerId,proto3" json:"activeControllerId,omitempty"`
}

func (x *ConfigMessage_HumanControlState) Reset() {
	*x = ConfigMessage_HumanControlState{}
	if protoimpl.UnsafeEnabled {
		mi := &file_remoteconfig_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ConfigMessage_HumanControlState) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ConfigMessage_HumanControlState) ProtoMessage() {}

func (x *ConfigMessage_HumanControlState) ProtoReflect() protoreflect.Message {
	mi := &file_remoteconfig_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ConfigMessage_HumanControlState.ProtoReflect.Descriptor instead.
func (*ConfigMessage_HumanControlState) Descriptor() ([]byte, []int) {
	return file_remoteconfig_proto_rawDescGZIP(), []int{0, 2}
}

func (x *ConfigMessage_HumanControlState) GetActiveControllerId() string {
	if x != nil {
		return x.ActiveControllerId
	}
	return ""
}

// Broadcast car connects and disconnects
type ConfigMessage_CarState struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Connected bool `protobuf:"varint,1,opt,name=connected,proto3" json:"connected,omitempty"`
}

func (x *ConfigMessage_CarState) Reset() {
	*x = ConfigMessage_CarState{}
	if protoimpl.UnsafeEnabled {
		mi := &file_remoteconfig_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ConfigMessage_CarState) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ConfigMessage_CarState) ProtoMessage() {}

func (x *ConfigMessage_CarState) ProtoReflect() protoreflect.Message {
	mi := &file_remoteconfig_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ConfigMessage_CarState.ProtoReflect.Descriptor instead.
func (*ConfigMessage_CarState) Descriptor() ([]byte, []int) {
	return file_remoteconfig_proto_rawDescGZIP(), []int{0, 3}
}

func (x *ConfigMessage_CarState) GetConnected() bool {
	if x != nil {
		return x.Connected
	}
	return false
}

// To report unknown or general errors
type ConfigMessage_Error struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Message string `protobuf:"bytes,1,opt,name=message,proto3" json:"message,omitempty"`
}

func (x *ConfigMessage_Error) Reset() {
	*x = ConfigMessage_Error{}
	if protoimpl.UnsafeEnabled {
		mi := &file_remoteconfig_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ConfigMessage_Error) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ConfigMessage_Error) ProtoMessage() {}

func (x *ConfigMessage_Error) ProtoReflect() protoreflect.Message {
	mi := &file_remoteconfig_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ConfigMessage_Error.ProtoReflect.Descriptor instead.
func (*ConfigMessage_Error) Descriptor() ([]byte, []int) {
	return file_remoteconfig_proto_rawDescGZIP(), []int{0, 4}
}

func (x *ConfigMessage_Error) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

var File_remoteconfig_proto protoreflect.FileDescriptor

var file_remoteconfig_proto_rawDesc = []byte{
	0x0a, 0x12, 0x72, 0x65, 0x6d, 0x6f, 0x74, 0x65, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d,
	0x73, 0x67, 0x73, 0x22, 0xc2, 0x05, 0x0a, 0x0d, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x4d, 0x65,
	0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x7c, 0x0a, 0x1b, 0x68, 0x75, 0x6d, 0x61, 0x6e, 0x43, 0x6f,
	0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x54, 0x61, 0x6b, 0x65, 0x6f, 0x76, 0x65, 0x72, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x38, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e, 0x43, 0x6f, 0x6e, 0x66, 0x69,
	0x67, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x2e, 0x48, 0x75, 0x6d, 0x61, 0x6e, 0x43, 0x6f,
	0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x54, 0x61, 0x6b, 0x65, 0x6f, 0x76, 0x65, 0x72, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x48, 0x00, 0x52, 0x1b, 0x68, 0x75, 0x6d, 0x61, 0x6e, 0x43, 0x6f, 0x6e,
	0x74, 0x72, 0x6f, 0x6c, 0x54, 0x61, 0x6b, 0x65, 0x6f, 0x76, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x79, 0x0a, 0x1a, 0x68, 0x75, 0x6d, 0x61, 0x6e, 0x43, 0x6f, 0x6e, 0x74,
	0x72, 0x6f, 0x6c, 0x52, 0x65, 0x6c, 0x65, 0x61, 0x73, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x37, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x4d, 0x65,
	0x73, 0x73, 0x61, 0x67, 0x65, 0x2e, 0x48, 0x75, 0x6d, 0x61, 0x6e, 0x43, 0x6f, 0x6e, 0x74, 0x72,
	0x6f, 0x6c, 0x52, 0x65, 0x6c, 0x65, 0x61, 0x73, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x48, 0x00, 0x52, 0x1a, 0x68, 0x75, 0x6d, 0x61, 0x6e, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c,
	0x52, 0x65, 0x6c, 0x65, 0x61, 0x73, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x5e,
	0x0a, 0x11, 0x68, 0x75, 0x6d, 0x61, 0x6e, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x53, 0x74,
	0x61, 0x74, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2e, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x67,
	0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x2e, 0x48, 0x75, 0x6d, 0x61, 0x6e, 0x43, 0x6f, 0x6e,
	0x74, 0x72, 0x6f, 0x6c, 0x53, 0x74, 0x61, 0x74, 0x65, 0x48, 0x00, 0x52, 0x11, 0x68, 0x75, 0x6d,
	0x61, 0x6e, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x53, 0x74, 0x61, 0x74, 0x65, 0x12, 0x43,
	0x0a, 0x08, 0x63, 0x61, 0x72, 0x53, 0x74, 0x61, 0x74, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x25, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73,
	0x2e, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x2e, 0x43,
	0x61, 0x72, 0x53, 0x74, 0x61, 0x74, 0x65, 0x48, 0x00, 0x52, 0x08, 0x63, 0x61, 0x72, 0x53, 0x74,
	0x61, 0x74, 0x65, 0x12, 0x3a, 0x0a, 0x05, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x18, 0x07, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x22, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73,
	0x67, 0x73, 0x2e, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65,
	0x2e, 0x45, 0x72, 0x72, 0x6f, 0x72, 0x48, 0x00, 0x52, 0x05, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x1a,
	0x1d, 0x0a, 0x1b, 0x48, 0x75, 0x6d, 0x61, 0x6e, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x54,
	0x61, 0x6b, 0x65, 0x6f, 0x76, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1c,
	0x0a, 0x1a, 0x48, 0x75, 0x6d, 0x61, 0x6e, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x52, 0x65,
	0x6c, 0x65, 0x61, 0x73, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x43, 0x0a, 0x11,
	0x48, 0x75, 0x6d, 0x61, 0x6e, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x53, 0x74, 0x61, 0x74,
	0x65, 0x12, 0x2e, 0x0a, 0x12, 0x61, 0x63, 0x74, 0x69, 0x76, 0x65, 0x43, 0x6f, 0x6e, 0x74, 0x72,
	0x6f, 0x6c, 0x6c, 0x65, 0x72, 0x49, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x12, 0x61,
	0x63, 0x74, 0x69, 0x76, 0x65, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x6c, 0x65, 0x72, 0x49,
	0x64, 0x1a, 0x28, 0x0a, 0x08, 0x43, 0x61, 0x72, 0x53, 0x74, 0x61, 0x74, 0x65, 0x12, 0x1c, 0x0a,
	0x09, 0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x65, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x08,
	0x52, 0x09, 0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x65, 0x64, 0x1a, 0x21, 0x0a, 0x05, 0x45,
	0x72, 0x72, 0x6f, 0x72, 0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x42, 0x08,
	0x0a, 0x06, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x42, 0x1f, 0x5a, 0x1d, 0x61, 0x73, 0x65, 0x2f,
	0x70, 0x62, 0x5f, 0x72, 0x65, 0x6d, 0x6f, 0x74, 0x65, 0x5f, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67,
	0x5f, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_remoteconfig_proto_rawDescOnce sync.Once
	file_remoteconfig_proto_rawDescData = file_remoteconfig_proto_rawDesc
)

func file_remoteconfig_proto_rawDescGZIP() []byte {
	file_remoteconfig_proto_rawDescOnce.Do(func() {
		file_remoteconfig_proto_rawDescData = protoimpl.X.CompressGZIP(file_remoteconfig_proto_rawDescData)
	})
	return file_remoteconfig_proto_rawDescData
}

var file_remoteconfig_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_remoteconfig_proto_goTypes = []interface{}{
	(*ConfigMessage)(nil),                             // 0: protobuf_msgs.ConfigMessage
	(*ConfigMessage_HumanControlTakeoverRequest)(nil), // 1: protobuf_msgs.ConfigMessage.HumanControlTakeoverRequest
	(*ConfigMessage_HumanControlReleaseRequest)(nil),  // 2: protobuf_msgs.ConfigMessage.HumanControlReleaseRequest
	(*ConfigMessage_HumanControlState)(nil),           // 3: protobuf_msgs.ConfigMessage.HumanControlState
	(*ConfigMessage_CarState)(nil),                    // 4: protobuf_msgs.ConfigMessage.CarState
	(*ConfigMessage_Error)(nil),                       // 5: protobuf_msgs.ConfigMessage.Error
}
var file_remoteconfig_proto_depIdxs = []int32{
	1, // 0: protobuf_msgs.ConfigMessage.humanControlTakeoverRequest:type_name -> protobuf_msgs.ConfigMessage.HumanControlTakeoverRequest
	2, // 1: protobuf_msgs.ConfigMessage.humanControlReleaseRequest:type_name -> protobuf_msgs.ConfigMessage.HumanControlReleaseRequest
	3, // 2: protobuf_msgs.ConfigMessage.humanControlState:type_name -> protobuf_msgs.ConfigMessage.HumanControlState
	4, // 3: protobuf_msgs.ConfigMessage.carState:type_name -> protobuf_msgs.ConfigMessage.CarState
	5, // 4: protobuf_msgs.ConfigMessage.error:type_name -> protobuf_msgs.ConfigMessage.Error
	5, // [5:5] is the sub-list for method output_type
	5, // [5:5] is the sub-list for method input_type
	5, // [5:5] is the sub-list for extension type_name
	5, // [5:5] is the sub-list for extension extendee
	0, // [0:5] is the sub-list for field type_name
}

func init() { file_remoteconfig_proto_init() }
func file_remoteconfig_proto_init() {
	if File_remoteconfig_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_remoteconfig_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ConfigMessage); i {
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
		file_remoteconfig_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ConfigMessage_HumanControlTakeoverRequest); i {
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
		file_remoteconfig_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ConfigMessage_HumanControlReleaseRequest); i {
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
		file_remoteconfig_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ConfigMessage_HumanControlState); i {
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
		file_remoteconfig_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ConfigMessage_CarState); i {
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
		file_remoteconfig_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ConfigMessage_Error); i {
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
	file_remoteconfig_proto_msgTypes[0].OneofWrappers = []interface{}{
		(*ConfigMessage_HumanControlTakeoverRequest_)(nil),
		(*ConfigMessage_HumanControlReleaseRequest_)(nil),
		(*ConfigMessage_HumanControlState_)(nil),
		(*ConfigMessage_CarState_)(nil),
		(*ConfigMessage_Error_)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_remoteconfig_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_remoteconfig_proto_goTypes,
		DependencyIndexes: file_remoteconfig_proto_depIdxs,
		MessageInfos:      file_remoteconfig_proto_msgTypes,
	}.Build()
	File_remoteconfig_proto = out.File
	file_remoteconfig_proto_rawDesc = nil
	file_remoteconfig_proto_goTypes = nil
	file_remoteconfig_proto_depIdxs = nil
}
