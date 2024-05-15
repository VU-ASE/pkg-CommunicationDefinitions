// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.34.1
// 	protoc        v3.6.1
// source: systemmanager/wrapper.proto

package pb_systemmanager_messages

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

type Error struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Message string `protobuf:"bytes,1,opt,name=message,proto3" json:"message,omitempty"`
}

func (x *Error) Reset() {
	*x = Error{}
	if protoimpl.UnsafeEnabled {
		mi := &file_systemmanager_wrapper_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Error) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Error) ProtoMessage() {}

func (x *Error) ProtoReflect() protoreflect.Message {
	mi := &file_systemmanager_wrapper_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Error.ProtoReflect.Descriptor instead.
func (*Error) Descriptor() ([]byte, []int) {
	return file_systemmanager_wrapper_proto_rawDescGZIP(), []int{0}
}

func (x *Error) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

type SystemManagerMessage struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Types that are assignable to Msg:
	//
	//	*SystemManagerMessage_Service
	//	*SystemManagerMessage_ServiceOrder
	//	*SystemManagerMessage_TuningState
	//	*SystemManagerMessage_TuningStateRequest
	//	*SystemManagerMessage_ServiceListRequest
	//	*SystemManagerMessage_ServiceList
	//	*SystemManagerMessage_ServiceStatusUpdate
	//	*SystemManagerMessage_ServiceInformationRequest
	//	*SystemManagerMessage_Error
	Msg isSystemManagerMessage_Msg `protobuf_oneof:"msg"`
}

func (x *SystemManagerMessage) Reset() {
	*x = SystemManagerMessage{}
	if protoimpl.UnsafeEnabled {
		mi := &file_systemmanager_wrapper_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SystemManagerMessage) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SystemManagerMessage) ProtoMessage() {}

func (x *SystemManagerMessage) ProtoReflect() protoreflect.Message {
	mi := &file_systemmanager_wrapper_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SystemManagerMessage.ProtoReflect.Descriptor instead.
func (*SystemManagerMessage) Descriptor() ([]byte, []int) {
	return file_systemmanager_wrapper_proto_rawDescGZIP(), []int{1}
}

func (m *SystemManagerMessage) GetMsg() isSystemManagerMessage_Msg {
	if m != nil {
		return m.Msg
	}
	return nil
}

func (x *SystemManagerMessage) GetService() *Service {
	if x, ok := x.GetMsg().(*SystemManagerMessage_Service); ok {
		return x.Service
	}
	return nil
}

func (x *SystemManagerMessage) GetServiceOrder() *ServiceOrder {
	if x, ok := x.GetMsg().(*SystemManagerMessage_ServiceOrder); ok {
		return x.ServiceOrder
	}
	return nil
}

func (x *SystemManagerMessage) GetTuningState() *TuningState {
	if x, ok := x.GetMsg().(*SystemManagerMessage_TuningState); ok {
		return x.TuningState
	}
	return nil
}

func (x *SystemManagerMessage) GetTuningStateRequest() *TuningStateRequest {
	if x, ok := x.GetMsg().(*SystemManagerMessage_TuningStateRequest); ok {
		return x.TuningStateRequest
	}
	return nil
}

func (x *SystemManagerMessage) GetServiceListRequest() *ServiceListRequest {
	if x, ok := x.GetMsg().(*SystemManagerMessage_ServiceListRequest); ok {
		return x.ServiceListRequest
	}
	return nil
}

func (x *SystemManagerMessage) GetServiceList() *ServiceList {
	if x, ok := x.GetMsg().(*SystemManagerMessage_ServiceList); ok {
		return x.ServiceList
	}
	return nil
}

func (x *SystemManagerMessage) GetServiceStatusUpdate() *ServiceStatusUpdate {
	if x, ok := x.GetMsg().(*SystemManagerMessage_ServiceStatusUpdate); ok {
		return x.ServiceStatusUpdate
	}
	return nil
}

func (x *SystemManagerMessage) GetServiceInformationRequest() *ServiceInformationRequest {
	if x, ok := x.GetMsg().(*SystemManagerMessage_ServiceInformationRequest); ok {
		return x.ServiceInformationRequest
	}
	return nil
}

func (x *SystemManagerMessage) GetError() *Error {
	if x, ok := x.GetMsg().(*SystemManagerMessage_Error); ok {
		return x.Error
	}
	return nil
}

type isSystemManagerMessage_Msg interface {
	isSystemManagerMessage_Msg()
}

type SystemManagerMessage_Service struct {
	Service *Service `protobuf:"bytes,1,opt,name=service,proto3,oneof"`
}

type SystemManagerMessage_ServiceOrder struct {
	ServiceOrder *ServiceOrder `protobuf:"bytes,4,opt,name=serviceOrder,proto3,oneof"`
}

type SystemManagerMessage_TuningState struct {
	TuningState *TuningState `protobuf:"bytes,5,opt,name=tuningState,proto3,oneof"`
}

type SystemManagerMessage_TuningStateRequest struct {
	TuningStateRequest *TuningStateRequest `protobuf:"bytes,6,opt,name=tuningStateRequest,proto3,oneof"`
}

type SystemManagerMessage_ServiceListRequest struct {
	ServiceListRequest *ServiceListRequest `protobuf:"bytes,7,opt,name=serviceListRequest,proto3,oneof"`
}

type SystemManagerMessage_ServiceList struct {
	ServiceList *ServiceList `protobuf:"bytes,8,opt,name=serviceList,proto3,oneof"`
}

type SystemManagerMessage_ServiceStatusUpdate struct {
	ServiceStatusUpdate *ServiceStatusUpdate `protobuf:"bytes,9,opt,name=serviceStatusUpdate,proto3,oneof"`
}

type SystemManagerMessage_ServiceInformationRequest struct {
	ServiceInformationRequest *ServiceInformationRequest `protobuf:"bytes,10,opt,name=serviceInformationRequest,proto3,oneof"`
}

type SystemManagerMessage_Error struct {
	Error *Error `protobuf:"bytes,11,opt,name=error,proto3,oneof"`
}

func (*SystemManagerMessage_Service) isSystemManagerMessage_Msg() {}

func (*SystemManagerMessage_ServiceOrder) isSystemManagerMessage_Msg() {}

func (*SystemManagerMessage_TuningState) isSystemManagerMessage_Msg() {}

func (*SystemManagerMessage_TuningStateRequest) isSystemManagerMessage_Msg() {}

func (*SystemManagerMessage_ServiceListRequest) isSystemManagerMessage_Msg() {}

func (*SystemManagerMessage_ServiceList) isSystemManagerMessage_Msg() {}

func (*SystemManagerMessage_ServiceStatusUpdate) isSystemManagerMessage_Msg() {}

func (*SystemManagerMessage_ServiceInformationRequest) isSystemManagerMessage_Msg() {}

func (*SystemManagerMessage_Error) isSystemManagerMessage_Msg() {}

var File_systemmanager_wrapper_proto protoreflect.FileDescriptor

var file_systemmanager_wrapper_proto_rawDesc = []byte{
	0x0a, 0x1b, 0x73, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x72, 0x2f,
	0x77, 0x72, 0x61, 0x70, 0x70, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73, 0x1a, 0x24, 0x73, 0x79,
	0x73, 0x74, 0x65, 0x6d, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x72, 0x2f, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x64, 0x69, 0x73, 0x63, 0x6f, 0x76, 0x65, 0x72, 0x79, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x1a, 0x1f, 0x73, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65,
	0x72, 0x2f, 0x74, 0x75, 0x6e, 0x69, 0x6e, 0x67, 0x73, 0x74, 0x61, 0x74, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x22, 0x21, 0x0a, 0x05, 0x45, 0x72, 0x72, 0x6f, 0x72, 0x12, 0x18, 0x0a, 0x07,
	0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6d,
	0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x22, 0xae, 0x05, 0x0a, 0x14, 0x53, 0x79, 0x73, 0x74, 0x65,
	0x6d, 0x4d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x72, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12,
	0x32, 0x0a, 0x07, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x16, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73,
	0x2e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x48, 0x00, 0x52, 0x07, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x12, 0x41, 0x0a, 0x0c, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4f, 0x72,
	0x64, 0x65, 0x72, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x4f, 0x72, 0x64, 0x65, 0x72, 0x48, 0x00, 0x52, 0x0c, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x4f, 0x72, 0x64, 0x65, 0x72, 0x12, 0x3e, 0x0a, 0x0b, 0x74, 0x75, 0x6e, 0x69, 0x6e, 0x67,
	0x53, 0x74, 0x61, 0x74, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e, 0x54, 0x75, 0x6e, 0x69,
	0x6e, 0x67, 0x53, 0x74, 0x61, 0x74, 0x65, 0x48, 0x00, 0x52, 0x0b, 0x74, 0x75, 0x6e, 0x69, 0x6e,
	0x67, 0x53, 0x74, 0x61, 0x74, 0x65, 0x12, 0x53, 0x0a, 0x12, 0x74, 0x75, 0x6e, 0x69, 0x6e, 0x67,
	0x53, 0x74, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x18, 0x06, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x21, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73,
	0x67, 0x73, 0x2e, 0x54, 0x75, 0x6e, 0x69, 0x6e, 0x67, 0x53, 0x74, 0x61, 0x74, 0x65, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x48, 0x00, 0x52, 0x12, 0x74, 0x75, 0x6e, 0x69, 0x6e, 0x67, 0x53,
	0x74, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x53, 0x0a, 0x12, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x21, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c,
	0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x48, 0x00, 0x52, 0x12, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x12, 0x3e, 0x0a, 0x0b, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x18,
	0x08, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73,
	0x74, 0x48, 0x00, 0x52, 0x0b, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74,
	0x12, 0x56, 0x0a, 0x13, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x53, 0x74, 0x61, 0x74, 0x75,
	0x73, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x18, 0x09, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x22, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e, 0x53, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x55, 0x70, 0x64, 0x61, 0x74,
	0x65, 0x48, 0x00, 0x52, 0x13, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x53, 0x74, 0x61, 0x74,
	0x75, 0x73, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x12, 0x68, 0x0a, 0x19, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x28, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e, 0x53, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x48, 0x00, 0x52, 0x19, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x49, 0x6e, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x12, 0x2c, 0x0a, 0x05, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x18, 0x0b, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x14, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67,
	0x73, 0x2e, 0x45, 0x72, 0x72, 0x6f, 0x72, 0x48, 0x00, 0x52, 0x05, 0x65, 0x72, 0x72, 0x6f, 0x72,
	0x42, 0x05, 0x0a, 0x03, 0x6d, 0x73, 0x67, 0x42, 0x1f, 0x5a, 0x1d, 0x61, 0x73, 0x65, 0x2f, 0x70,
	0x62, 0x5f, 0x73, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x72, 0x5f,
	0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_systemmanager_wrapper_proto_rawDescOnce sync.Once
	file_systemmanager_wrapper_proto_rawDescData = file_systemmanager_wrapper_proto_rawDesc
)

func file_systemmanager_wrapper_proto_rawDescGZIP() []byte {
	file_systemmanager_wrapper_proto_rawDescOnce.Do(func() {
		file_systemmanager_wrapper_proto_rawDescData = protoimpl.X.CompressGZIP(file_systemmanager_wrapper_proto_rawDescData)
	})
	return file_systemmanager_wrapper_proto_rawDescData
}

var file_systemmanager_wrapper_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_systemmanager_wrapper_proto_goTypes = []interface{}{
	(*Error)(nil),                     // 0: protobuf_msgs.Error
	(*SystemManagerMessage)(nil),      // 1: protobuf_msgs.SystemManagerMessage
	(*Service)(nil),                   // 2: protobuf_msgs.Service
	(*ServiceOrder)(nil),              // 3: protobuf_msgs.ServiceOrder
	(*TuningState)(nil),               // 4: protobuf_msgs.TuningState
	(*TuningStateRequest)(nil),        // 5: protobuf_msgs.TuningStateRequest
	(*ServiceListRequest)(nil),        // 6: protobuf_msgs.ServiceListRequest
	(*ServiceList)(nil),               // 7: protobuf_msgs.ServiceList
	(*ServiceStatusUpdate)(nil),       // 8: protobuf_msgs.ServiceStatusUpdate
	(*ServiceInformationRequest)(nil), // 9: protobuf_msgs.ServiceInformationRequest
}
var file_systemmanager_wrapper_proto_depIdxs = []int32{
	2, // 0: protobuf_msgs.SystemManagerMessage.service:type_name -> protobuf_msgs.Service
	3, // 1: protobuf_msgs.SystemManagerMessage.serviceOrder:type_name -> protobuf_msgs.ServiceOrder
	4, // 2: protobuf_msgs.SystemManagerMessage.tuningState:type_name -> protobuf_msgs.TuningState
	5, // 3: protobuf_msgs.SystemManagerMessage.tuningStateRequest:type_name -> protobuf_msgs.TuningStateRequest
	6, // 4: protobuf_msgs.SystemManagerMessage.serviceListRequest:type_name -> protobuf_msgs.ServiceListRequest
	7, // 5: protobuf_msgs.SystemManagerMessage.serviceList:type_name -> protobuf_msgs.ServiceList
	8, // 6: protobuf_msgs.SystemManagerMessage.serviceStatusUpdate:type_name -> protobuf_msgs.ServiceStatusUpdate
	9, // 7: protobuf_msgs.SystemManagerMessage.serviceInformationRequest:type_name -> protobuf_msgs.ServiceInformationRequest
	0, // 8: protobuf_msgs.SystemManagerMessage.error:type_name -> protobuf_msgs.Error
	9, // [9:9] is the sub-list for method output_type
	9, // [9:9] is the sub-list for method input_type
	9, // [9:9] is the sub-list for extension type_name
	9, // [9:9] is the sub-list for extension extendee
	0, // [0:9] is the sub-list for field type_name
}

func init() { file_systemmanager_wrapper_proto_init() }
func file_systemmanager_wrapper_proto_init() {
	if File_systemmanager_wrapper_proto != nil {
		return
	}
	file_systemmanager_servicediscovery_proto_init()
	file_systemmanager_tuningstate_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_systemmanager_wrapper_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Error); i {
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
		file_systemmanager_wrapper_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SystemManagerMessage); i {
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
	file_systemmanager_wrapper_proto_msgTypes[1].OneofWrappers = []interface{}{
		(*SystemManagerMessage_Service)(nil),
		(*SystemManagerMessage_ServiceOrder)(nil),
		(*SystemManagerMessage_TuningState)(nil),
		(*SystemManagerMessage_TuningStateRequest)(nil),
		(*SystemManagerMessage_ServiceListRequest)(nil),
		(*SystemManagerMessage_ServiceList)(nil),
		(*SystemManagerMessage_ServiceStatusUpdate)(nil),
		(*SystemManagerMessage_ServiceInformationRequest)(nil),
		(*SystemManagerMessage_Error)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_systemmanager_wrapper_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_systemmanager_wrapper_proto_goTypes,
		DependencyIndexes: file_systemmanager_wrapper_proto_depIdxs,
		MessageInfos:      file_systemmanager_wrapper_proto_msgTypes,
	}.Build()
	File_systemmanager_wrapper_proto = out.File
	file_systemmanager_wrapper_proto_rawDesc = nil
	file_systemmanager_wrapper_proto_goTypes = nil
	file_systemmanager_wrapper_proto_depIdxs = nil
}
