// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.32.0
// 	protoc        v3.6.1
// source: systemmanager/servicediscovery.proto

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

type ServiceOption_Type int32

const (
	ServiceOption_STRING ServiceOption_Type = 0
	ServiceOption_INT    ServiceOption_Type = 1
	ServiceOption_FLOAT  ServiceOption_Type = 2
)

// Enum value maps for ServiceOption_Type.
var (
	ServiceOption_Type_name = map[int32]string{
		0: "STRING",
		1: "INT",
		2: "FLOAT",
	}
	ServiceOption_Type_value = map[string]int32{
		"STRING": 0,
		"INT":    1,
		"FLOAT":  2,
	}
)

func (x ServiceOption_Type) Enum() *ServiceOption_Type {
	p := new(ServiceOption_Type)
	*p = x
	return p
}

func (x ServiceOption_Type) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ServiceOption_Type) Descriptor() protoreflect.EnumDescriptor {
	return file_systemmanager_servicediscovery_proto_enumTypes[0].Descriptor()
}

func (ServiceOption_Type) Type() protoreflect.EnumType {
	return &file_systemmanager_servicediscovery_proto_enumTypes[0]
}

func (x ServiceOption_Type) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ServiceOption_Type.Descriptor instead.
func (ServiceOption_Type) EnumDescriptor() ([]byte, []int) {
	return file_systemmanager_servicediscovery_proto_rawDescGZIP(), []int{2, 0}
}

type ServiceStatus_Status int32

const (
	ServiceStatus_UNKNOWN        ServiceStatus_Status = 0
	ServiceStatus_RUNNING        ServiceStatus_Status = 1
	ServiceStatus_STOPPED        ServiceStatus_Status = 2
	ServiceStatus_NOT_REGISTERED ServiceStatus_Status = 3
)

// Enum value maps for ServiceStatus_Status.
var (
	ServiceStatus_Status_name = map[int32]string{
		0: "UNKNOWN",
		1: "RUNNING",
		2: "STOPPED",
		3: "NOT_REGISTERED",
	}
	ServiceStatus_Status_value = map[string]int32{
		"UNKNOWN":        0,
		"RUNNING":        1,
		"STOPPED":        2,
		"NOT_REGISTERED": 3,
	}
)

func (x ServiceStatus_Status) Enum() *ServiceStatus_Status {
	p := new(ServiceStatus_Status)
	*p = x
	return p
}

func (x ServiceStatus_Status) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ServiceStatus_Status) Descriptor() protoreflect.EnumDescriptor {
	return file_systemmanager_servicediscovery_proto_enumTypes[1].Descriptor()
}

func (ServiceStatus_Status) Type() protoreflect.EnumType {
	return &file_systemmanager_servicediscovery_proto_enumTypes[1]
}

func (x ServiceStatus_Status) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ServiceStatus_Status.Descriptor instead.
func (ServiceStatus_Status) EnumDescriptor() ([]byte, []int) {
	return file_systemmanager_servicediscovery_proto_rawDescGZIP(), []int{5, 0}
}

type ServiceOrder_OrderType int32

const (
	ServiceOrder_STOP          ServiceOrder_OrderType = 0 // will attempt a graceful shutdown
	ServiceOrder_KILL          ServiceOrder_OrderType = 1 // will kill the service immediately
	ServiceOrder_FORCE_RESTART ServiceOrder_OrderType = 2 // will kill the service immediately and restart
)

// Enum value maps for ServiceOrder_OrderType.
var (
	ServiceOrder_OrderType_name = map[int32]string{
		0: "STOP",
		1: "KILL",
		2: "FORCE_RESTART",
	}
	ServiceOrder_OrderType_value = map[string]int32{
		"STOP":          0,
		"KILL":          1,
		"FORCE_RESTART": 2,
	}
)

func (x ServiceOrder_OrderType) Enum() *ServiceOrder_OrderType {
	p := new(ServiceOrder_OrderType)
	*p = x
	return p
}

func (x ServiceOrder_OrderType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ServiceOrder_OrderType) Descriptor() protoreflect.EnumDescriptor {
	return file_systemmanager_servicediscovery_proto_enumTypes[2].Descriptor()
}

func (ServiceOrder_OrderType) Type() protoreflect.EnumType {
	return &file_systemmanager_servicediscovery_proto_enumTypes[2]
}

func (x ServiceOrder_OrderType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ServiceOrder_OrderType.Descriptor instead.
func (ServiceOrder_OrderType) EnumDescriptor() ([]byte, []int) {
	return file_systemmanager_servicediscovery_proto_rawDescGZIP(), []int{6, 0}
}

// Used to identify a service within the system
type ServiceIdentifier struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Pid  int32  `protobuf:"varint,2,opt,name=pid,proto3" json:"pid,omitempty"`
}

func (x *ServiceIdentifier) Reset() {
	*x = ServiceIdentifier{}
	if protoimpl.UnsafeEnabled {
		mi := &file_systemmanager_servicediscovery_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ServiceIdentifier) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ServiceIdentifier) ProtoMessage() {}

func (x *ServiceIdentifier) ProtoReflect() protoreflect.Message {
	mi := &file_systemmanager_servicediscovery_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ServiceIdentifier.ProtoReflect.Descriptor instead.
func (*ServiceIdentifier) Descriptor() ([]byte, []int) {
	return file_systemmanager_servicediscovery_proto_rawDescGZIP(), []int{0}
}

func (x *ServiceIdentifier) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *ServiceIdentifier) GetPid() int32 {
	if x != nil {
		return x.Pid
	}
	return 0
}

// An endpoint that is made available by a service
type ServiceEndpoint struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name    string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`       // the identifier to select this endpoint
	Address string `protobuf:"bytes,2,opt,name=address,proto3" json:"address,omitempty"` // the zmq address to connect to
}

func (x *ServiceEndpoint) Reset() {
	*x = ServiceEndpoint{}
	if protoimpl.UnsafeEnabled {
		mi := &file_systemmanager_servicediscovery_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ServiceEndpoint) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ServiceEndpoint) ProtoMessage() {}

func (x *ServiceEndpoint) ProtoReflect() protoreflect.Message {
	mi := &file_systemmanager_servicediscovery_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ServiceEndpoint.ProtoReflect.Descriptor instead.
func (*ServiceEndpoint) Descriptor() ([]byte, []int) {
	return file_systemmanager_servicediscovery_proto_rawDescGZIP(), []int{1}
}

func (x *ServiceEndpoint) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *ServiceEndpoint) GetAddress() string {
	if x != nil {
		return x.Address
	}
	return ""
}

// The options that can be set for a service
type ServiceOption struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name    string             `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Type    ServiceOption_Type `protobuf:"varint,2,opt,name=type,proto3,enum=protobuf_msgs.ServiceOption_Type" json:"type,omitempty"`
	Mutable bool               `protobuf:"varint,3,opt,name=mutable,proto3" json:"mutable,omitempty"`
	// should be set and checked based on the type
	StringValue string  `protobuf:"bytes,4,opt,name=string_value,json=stringValue,proto3" json:"string_value,omitempty"`
	IntValue    int32   `protobuf:"varint,5,opt,name=int_value,json=intValue,proto3" json:"int_value,omitempty"`
	FloatValue  float32 `protobuf:"fixed32,6,opt,name=float_value,json=floatValue,proto3" json:"float_value,omitempty"`
}

func (x *ServiceOption) Reset() {
	*x = ServiceOption{}
	if protoimpl.UnsafeEnabled {
		mi := &file_systemmanager_servicediscovery_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ServiceOption) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ServiceOption) ProtoMessage() {}

func (x *ServiceOption) ProtoReflect() protoreflect.Message {
	mi := &file_systemmanager_servicediscovery_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ServiceOption.ProtoReflect.Descriptor instead.
func (*ServiceOption) Descriptor() ([]byte, []int) {
	return file_systemmanager_servicediscovery_proto_rawDescGZIP(), []int{2}
}

func (x *ServiceOption) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *ServiceOption) GetType() ServiceOption_Type {
	if x != nil {
		return x.Type
	}
	return ServiceOption_STRING
}

func (x *ServiceOption) GetMutable() bool {
	if x != nil {
		return x.Mutable
	}
	return false
}

func (x *ServiceOption) GetStringValue() string {
	if x != nil {
		return x.StringValue
	}
	return ""
}

func (x *ServiceOption) GetIntValue() int32 {
	if x != nil {
		return x.IntValue
	}
	return 0
}

func (x *ServiceOption) GetFloatValue() float32 {
	if x != nil {
		return x.FloatValue
	}
	return 0
}

// A description of a service, sent by a service to register itself or broadcasted by the system manager
type Service struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Identifier *ServiceIdentifier `protobuf:"bytes,1,opt,name=identifier,proto3" json:"identifier,omitempty"`
	Endpoints  []*ServiceEndpoint `protobuf:"bytes,2,rep,name=endpoints,proto3" json:"endpoints,omitempty"`
	Options    []*ServiceOption   `protobuf:"bytes,3,rep,name=options,proto3" json:"options,omitempty"`
}

func (x *Service) Reset() {
	*x = Service{}
	if protoimpl.UnsafeEnabled {
		mi := &file_systemmanager_servicediscovery_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Service) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Service) ProtoMessage() {}

func (x *Service) ProtoReflect() protoreflect.Message {
	mi := &file_systemmanager_servicediscovery_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Service.ProtoReflect.Descriptor instead.
func (*Service) Descriptor() ([]byte, []int) {
	return file_systemmanager_servicediscovery_proto_rawDescGZIP(), []int{3}
}

func (x *Service) GetIdentifier() *ServiceIdentifier {
	if x != nil {
		return x.Identifier
	}
	return nil
}

func (x *Service) GetEndpoints() []*ServiceEndpoint {
	if x != nil {
		return x.Endpoints
	}
	return nil
}

func (x *Service) GetOptions() []*ServiceOption {
	if x != nil {
		return x.Options
	}
	return nil
}

// When a service requests information about other services, it sends an InformationRequest message
type ServiceInformationRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Requested *ServiceIdentifier `protobuf:"bytes,1,opt,name=requested,proto3" json:"requested,omitempty"`
}

func (x *ServiceInformationRequest) Reset() {
	*x = ServiceInformationRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_systemmanager_servicediscovery_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ServiceInformationRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ServiceInformationRequest) ProtoMessage() {}

func (x *ServiceInformationRequest) ProtoReflect() protoreflect.Message {
	mi := &file_systemmanager_servicediscovery_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ServiceInformationRequest.ProtoReflect.Descriptor instead.
func (*ServiceInformationRequest) Descriptor() ([]byte, []int) {
	return file_systemmanager_servicediscovery_proto_rawDescGZIP(), []int{4}
}

func (x *ServiceInformationRequest) GetRequested() *ServiceIdentifier {
	if x != nil {
		return x.Requested
	}
	return nil
}

// When the system manager sends information about a service, it sends an Information message
// Also used to broadcast registrations to all services
type ServiceStatus struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Service *Service             `protobuf:"bytes,1,opt,name=service,proto3" json:"service,omitempty"`
	Status  ServiceStatus_Status `protobuf:"varint,2,opt,name=status,proto3,enum=protobuf_msgs.ServiceStatus_Status" json:"status,omitempty"`
}

func (x *ServiceStatus) Reset() {
	*x = ServiceStatus{}
	if protoimpl.UnsafeEnabled {
		mi := &file_systemmanager_servicediscovery_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ServiceStatus) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ServiceStatus) ProtoMessage() {}

func (x *ServiceStatus) ProtoReflect() protoreflect.Message {
	mi := &file_systemmanager_servicediscovery_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ServiceStatus.ProtoReflect.Descriptor instead.
func (*ServiceStatus) Descriptor() ([]byte, []int) {
	return file_systemmanager_servicediscovery_proto_rawDescGZIP(), []int{5}
}

func (x *ServiceStatus) GetService() *Service {
	if x != nil {
		return x.Service
	}
	return nil
}

func (x *ServiceStatus) GetStatus() ServiceStatus_Status {
	if x != nil {
		return x.Status
	}
	return ServiceStatus_UNKNOWN
}

// The system manager can order services to stop/restart by sending a service order
type ServiceOrder struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The service this order is for
	Service *ServiceIdentifier     `protobuf:"bytes,1,opt,name=service,proto3" json:"service,omitempty"`
	Order   ServiceOrder_OrderType `protobuf:"varint,2,opt,name=order,proto3,enum=protobuf_msgs.ServiceOrder_OrderType" json:"order,omitempty"`
}

func (x *ServiceOrder) Reset() {
	*x = ServiceOrder{}
	if protoimpl.UnsafeEnabled {
		mi := &file_systemmanager_servicediscovery_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ServiceOrder) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ServiceOrder) ProtoMessage() {}

func (x *ServiceOrder) ProtoReflect() protoreflect.Message {
	mi := &file_systemmanager_servicediscovery_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ServiceOrder.ProtoReflect.Descriptor instead.
func (*ServiceOrder) Descriptor() ([]byte, []int) {
	return file_systemmanager_servicediscovery_proto_rawDescGZIP(), []int{6}
}

func (x *ServiceOrder) GetService() *ServiceIdentifier {
	if x != nil {
		return x.Service
	}
	return nil
}

func (x *ServiceOrder) GetOrder() ServiceOrder_OrderType {
	if x != nil {
		return x.Order
	}
	return ServiceOrder_STOP
}

// When a service wants to fetch all services, it sends a ServiceListRequest
type ServiceListRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Requested *ServiceIdentifier `protobuf:"bytes,1,opt,name=requested,proto3" json:"requested,omitempty"`
}

func (x *ServiceListRequest) Reset() {
	*x = ServiceListRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_systemmanager_servicediscovery_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ServiceListRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ServiceListRequest) ProtoMessage() {}

func (x *ServiceListRequest) ProtoReflect() protoreflect.Message {
	mi := &file_systemmanager_servicediscovery_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ServiceListRequest.ProtoReflect.Descriptor instead.
func (*ServiceListRequest) Descriptor() ([]byte, []int) {
	return file_systemmanager_servicediscovery_proto_rawDescGZIP(), []int{7}
}

func (x *ServiceListRequest) GetRequested() *ServiceIdentifier {
	if x != nil {
		return x.Requested
	}
	return nil
}

// When the system manager sends a list of services, it sends a ServiceList
type ServiceList struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Services []*Service `protobuf:"bytes,1,rep,name=services,proto3" json:"services,omitempty"`
}

func (x *ServiceList) Reset() {
	*x = ServiceList{}
	if protoimpl.UnsafeEnabled {
		mi := &file_systemmanager_servicediscovery_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ServiceList) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ServiceList) ProtoMessage() {}

func (x *ServiceList) ProtoReflect() protoreflect.Message {
	mi := &file_systemmanager_servicediscovery_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ServiceList.ProtoReflect.Descriptor instead.
func (*ServiceList) Descriptor() ([]byte, []int) {
	return file_systemmanager_servicediscovery_proto_rawDescGZIP(), []int{8}
}

func (x *ServiceList) GetServices() []*Service {
	if x != nil {
		return x.Services
	}
	return nil
}

var File_systemmanager_servicediscovery_proto protoreflect.FileDescriptor

var file_systemmanager_servicediscovery_proto_rawDesc = []byte{
	0x0a, 0x24, 0x73, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x72, 0x2f,
	0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x64, 0x69, 0x73, 0x63, 0x6f, 0x76, 0x65, 0x72, 0x79,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x5f, 0x6d, 0x73, 0x67, 0x73, 0x22, 0x39, 0x0a, 0x11, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x49, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x66, 0x69, 0x65, 0x72, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x10,
	0x0a, 0x03, 0x70, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x03, 0x70, 0x69, 0x64,
	0x22, 0x3f, 0x0a, 0x0f, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x45, 0x6e, 0x64, 0x70, 0x6f,
	0x69, 0x6e, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x61, 0x64, 0x64, 0x72, 0x65,
	0x73, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73,
	0x73, 0x22, 0xfd, 0x01, 0x0a, 0x0d, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4f, 0x70, 0x74,
	0x69, 0x6f, 0x6e, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x35, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x21, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4f, 0x70, 0x74,
	0x69, 0x6f, 0x6e, 0x2e, 0x54, 0x79, 0x70, 0x65, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x18,
	0x0a, 0x07, 0x6d, 0x75, 0x74, 0x61, 0x62, 0x6c, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x08, 0x52,
	0x07, 0x6d, 0x75, 0x74, 0x61, 0x62, 0x6c, 0x65, 0x12, 0x21, 0x0a, 0x0c, 0x73, 0x74, 0x72, 0x69,
	0x6e, 0x67, 0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b,
	0x73, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x69,
	0x6e, 0x74, 0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x05, 0x52, 0x08,
	0x69, 0x6e, 0x74, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x12, 0x1f, 0x0a, 0x0b, 0x66, 0x6c, 0x6f, 0x61,
	0x74, 0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x02, 0x52, 0x0a, 0x66,
	0x6c, 0x6f, 0x61, 0x74, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x22, 0x26, 0x0a, 0x04, 0x54, 0x79, 0x70,
	0x65, 0x12, 0x0a, 0x0a, 0x06, 0x53, 0x54, 0x52, 0x49, 0x4e, 0x47, 0x10, 0x00, 0x12, 0x07, 0x0a,
	0x03, 0x49, 0x4e, 0x54, 0x10, 0x01, 0x12, 0x09, 0x0a, 0x05, 0x46, 0x4c, 0x4f, 0x41, 0x54, 0x10,
	0x02, 0x22, 0xc1, 0x01, 0x0a, 0x07, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x40, 0x0a,
	0x0a, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x66, 0x69, 0x65, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x20, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67,
	0x73, 0x2e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x49, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x66,
	0x69, 0x65, 0x72, 0x52, 0x0a, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x66, 0x69, 0x65, 0x72, 0x12,
	0x3c, 0x0a, 0x09, 0x65, 0x6e, 0x64, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x73, 0x18, 0x02, 0x20, 0x03,
	0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73,
	0x67, 0x73, 0x2e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x45, 0x6e, 0x64, 0x70, 0x6f, 0x69,
	0x6e, 0x74, 0x52, 0x09, 0x65, 0x6e, 0x64, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x73, 0x12, 0x36, 0x0a,
	0x07, 0x6f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1c,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x07, 0x6f, 0x70,
	0x74, 0x69, 0x6f, 0x6e, 0x73, 0x22, 0x5b, 0x0a, 0x19, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x49, 0x6e, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x12, 0x3e, 0x0a, 0x09, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x65, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x20, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x49, 0x64, 0x65,
	0x6e, 0x74, 0x69, 0x66, 0x69, 0x65, 0x72, 0x52, 0x09, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x65, 0x64, 0x22, 0xc3, 0x01, 0x0a, 0x0d, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x53, 0x74,
	0x61, 0x74, 0x75, 0x73, 0x12, 0x30, 0x0a, 0x07, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x52, 0x07, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x3b, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x23, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x53, 0x74,
	0x61, 0x74, 0x75, 0x73, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61,
	0x74, 0x75, 0x73, 0x22, 0x43, 0x0a, 0x06, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x0b, 0x0a,
	0x07, 0x55, 0x4e, 0x4b, 0x4e, 0x4f, 0x57, 0x4e, 0x10, 0x00, 0x12, 0x0b, 0x0a, 0x07, 0x52, 0x55,
	0x4e, 0x4e, 0x49, 0x4e, 0x47, 0x10, 0x01, 0x12, 0x0b, 0x0a, 0x07, 0x53, 0x54, 0x4f, 0x50, 0x50,
	0x45, 0x44, 0x10, 0x02, 0x12, 0x12, 0x0a, 0x0e, 0x4e, 0x4f, 0x54, 0x5f, 0x52, 0x45, 0x47, 0x49,
	0x53, 0x54, 0x45, 0x52, 0x45, 0x44, 0x10, 0x03, 0x22, 0xbb, 0x01, 0x0a, 0x0c, 0x53, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x4f, 0x72, 0x64, 0x65, 0x72, 0x12, 0x3a, 0x0a, 0x07, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x20, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x49, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x66, 0x69, 0x65, 0x72, 0x52, 0x07, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x3b, 0x0a, 0x05, 0x6f, 0x72, 0x64, 0x65, 0x72, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x0e, 0x32, 0x25, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f,
	0x6d, 0x73, 0x67, 0x73, 0x2e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4f, 0x72, 0x64, 0x65,
	0x72, 0x2e, 0x4f, 0x72, 0x64, 0x65, 0x72, 0x54, 0x79, 0x70, 0x65, 0x52, 0x05, 0x6f, 0x72, 0x64,
	0x65, 0x72, 0x22, 0x32, 0x0a, 0x09, 0x4f, 0x72, 0x64, 0x65, 0x72, 0x54, 0x79, 0x70, 0x65, 0x12,
	0x08, 0x0a, 0x04, 0x53, 0x54, 0x4f, 0x50, 0x10, 0x00, 0x12, 0x08, 0x0a, 0x04, 0x4b, 0x49, 0x4c,
	0x4c, 0x10, 0x01, 0x12, 0x11, 0x0a, 0x0d, 0x46, 0x4f, 0x52, 0x43, 0x45, 0x5f, 0x52, 0x45, 0x53,
	0x54, 0x41, 0x52, 0x54, 0x10, 0x02, 0x22, 0x54, 0x0a, 0x12, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x3e, 0x0a, 0x09,
	0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x65, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x20, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e,
	0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x49, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x66, 0x69, 0x65,
	0x72, 0x52, 0x09, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x65, 0x64, 0x22, 0x41, 0x0a, 0x0b,
	0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x32, 0x0a, 0x08, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x16, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e, 0x53, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x52, 0x08, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x42,
	0x1f, 0x5a, 0x1d, 0x61, 0x73, 0x65, 0x2f, 0x70, 0x62, 0x5f, 0x73, 0x79, 0x73, 0x74, 0x65, 0x6d,
	0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x72, 0x5f, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_systemmanager_servicediscovery_proto_rawDescOnce sync.Once
	file_systemmanager_servicediscovery_proto_rawDescData = file_systemmanager_servicediscovery_proto_rawDesc
)

func file_systemmanager_servicediscovery_proto_rawDescGZIP() []byte {
	file_systemmanager_servicediscovery_proto_rawDescOnce.Do(func() {
		file_systemmanager_servicediscovery_proto_rawDescData = protoimpl.X.CompressGZIP(file_systemmanager_servicediscovery_proto_rawDescData)
	})
	return file_systemmanager_servicediscovery_proto_rawDescData
}

var file_systemmanager_servicediscovery_proto_enumTypes = make([]protoimpl.EnumInfo, 3)
var file_systemmanager_servicediscovery_proto_msgTypes = make([]protoimpl.MessageInfo, 9)
var file_systemmanager_servicediscovery_proto_goTypes = []interface{}{
	(ServiceOption_Type)(0),           // 0: protobuf_msgs.ServiceOption.Type
	(ServiceStatus_Status)(0),         // 1: protobuf_msgs.ServiceStatus.Status
	(ServiceOrder_OrderType)(0),       // 2: protobuf_msgs.ServiceOrder.OrderType
	(*ServiceIdentifier)(nil),         // 3: protobuf_msgs.ServiceIdentifier
	(*ServiceEndpoint)(nil),           // 4: protobuf_msgs.ServiceEndpoint
	(*ServiceOption)(nil),             // 5: protobuf_msgs.ServiceOption
	(*Service)(nil),                   // 6: protobuf_msgs.Service
	(*ServiceInformationRequest)(nil), // 7: protobuf_msgs.ServiceInformationRequest
	(*ServiceStatus)(nil),             // 8: protobuf_msgs.ServiceStatus
	(*ServiceOrder)(nil),              // 9: protobuf_msgs.ServiceOrder
	(*ServiceListRequest)(nil),        // 10: protobuf_msgs.ServiceListRequest
	(*ServiceList)(nil),               // 11: protobuf_msgs.ServiceList
}
var file_systemmanager_servicediscovery_proto_depIdxs = []int32{
	0,  // 0: protobuf_msgs.ServiceOption.type:type_name -> protobuf_msgs.ServiceOption.Type
	3,  // 1: protobuf_msgs.Service.identifier:type_name -> protobuf_msgs.ServiceIdentifier
	4,  // 2: protobuf_msgs.Service.endpoints:type_name -> protobuf_msgs.ServiceEndpoint
	5,  // 3: protobuf_msgs.Service.options:type_name -> protobuf_msgs.ServiceOption
	3,  // 4: protobuf_msgs.ServiceInformationRequest.requested:type_name -> protobuf_msgs.ServiceIdentifier
	6,  // 5: protobuf_msgs.ServiceStatus.service:type_name -> protobuf_msgs.Service
	1,  // 6: protobuf_msgs.ServiceStatus.status:type_name -> protobuf_msgs.ServiceStatus.Status
	3,  // 7: protobuf_msgs.ServiceOrder.service:type_name -> protobuf_msgs.ServiceIdentifier
	2,  // 8: protobuf_msgs.ServiceOrder.order:type_name -> protobuf_msgs.ServiceOrder.OrderType
	3,  // 9: protobuf_msgs.ServiceListRequest.requested:type_name -> protobuf_msgs.ServiceIdentifier
	6,  // 10: protobuf_msgs.ServiceList.services:type_name -> protobuf_msgs.Service
	11, // [11:11] is the sub-list for method output_type
	11, // [11:11] is the sub-list for method input_type
	11, // [11:11] is the sub-list for extension type_name
	11, // [11:11] is the sub-list for extension extendee
	0,  // [0:11] is the sub-list for field type_name
}

func init() { file_systemmanager_servicediscovery_proto_init() }
func file_systemmanager_servicediscovery_proto_init() {
	if File_systemmanager_servicediscovery_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_systemmanager_servicediscovery_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ServiceIdentifier); i {
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
		file_systemmanager_servicediscovery_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ServiceEndpoint); i {
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
		file_systemmanager_servicediscovery_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ServiceOption); i {
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
		file_systemmanager_servicediscovery_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Service); i {
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
		file_systemmanager_servicediscovery_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ServiceInformationRequest); i {
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
		file_systemmanager_servicediscovery_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ServiceStatus); i {
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
		file_systemmanager_servicediscovery_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ServiceOrder); i {
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
		file_systemmanager_servicediscovery_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ServiceListRequest); i {
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
		file_systemmanager_servicediscovery_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ServiceList); i {
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
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_systemmanager_servicediscovery_proto_rawDesc,
			NumEnums:      3,
			NumMessages:   9,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_systemmanager_servicediscovery_proto_goTypes,
		DependencyIndexes: file_systemmanager_servicediscovery_proto_depIdxs,
		EnumInfos:         file_systemmanager_servicediscovery_proto_enumTypes,
		MessageInfos:      file_systemmanager_servicediscovery_proto_msgTypes,
	}.Build()
	File_systemmanager_servicediscovery_proto = out.File
	file_systemmanager_servicediscovery_proto_rawDesc = nil
	file_systemmanager_servicediscovery_proto_goTypes = nil
	file_systemmanager_servicediscovery_proto_depIdxs = nil
}
