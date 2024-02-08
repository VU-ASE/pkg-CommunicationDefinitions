// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.32.0
// 	protoc        v3.6.1
// source: simulator.proto

package pb_simulator_messages

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

// Simulator sensor outputs
type SimulatorImageOutput struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Frameid uint32 `protobuf:"varint,1,opt,name=frameid,proto3" json:"frameid,omitempty"`
	Width   uint32 `protobuf:"varint,2,opt,name=width,proto3" json:"width,omitempty"`
	Height  uint32 `protobuf:"varint,3,opt,name=height,proto3" json:"height,omitempty"`
	Pixels  []byte `protobuf:"bytes,4,opt,name=pixels,proto3" json:"pixels,omitempty"`
}

func (x *SimulatorImageOutput) Reset() {
	*x = SimulatorImageOutput{}
	if protoimpl.UnsafeEnabled {
		mi := &file_simulator_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SimulatorImageOutput) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SimulatorImageOutput) ProtoMessage() {}

func (x *SimulatorImageOutput) ProtoReflect() protoreflect.Message {
	mi := &file_simulator_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SimulatorImageOutput.ProtoReflect.Descriptor instead.
func (*SimulatorImageOutput) Descriptor() ([]byte, []int) {
	return file_simulator_proto_rawDescGZIP(), []int{0}
}

func (x *SimulatorImageOutput) GetFrameid() uint32 {
	if x != nil {
		return x.Frameid
	}
	return 0
}

func (x *SimulatorImageOutput) GetWidth() uint32 {
	if x != nil {
		return x.Width
	}
	return 0
}

func (x *SimulatorImageOutput) GetHeight() uint32 {
	if x != nil {
		return x.Height
	}
	return 0
}

func (x *SimulatorImageOutput) GetPixels() []byte {
	if x != nil {
		return x.Pixels
	}
	return nil
}

var File_simulator_proto protoreflect.FileDescriptor

var file_simulator_proto_rawDesc = []byte{
	0x0a, 0x0f, 0x73, 0x69, 0x6d, 0x75, 0x6c, 0x61, 0x74, 0x6f, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x0d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73,
	0x22, 0x76, 0x0a, 0x14, 0x53, 0x69, 0x6d, 0x75, 0x6c, 0x61, 0x74, 0x6f, 0x72, 0x49, 0x6d, 0x61,
	0x67, 0x65, 0x4f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x12, 0x18, 0x0a, 0x07, 0x66, 0x72, 0x61, 0x6d,
	0x65, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x07, 0x66, 0x72, 0x61, 0x6d, 0x65,
	0x69, 0x64, 0x12, 0x14, 0x0a, 0x05, 0x77, 0x69, 0x64, 0x74, 0x68, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x0d, 0x52, 0x05, 0x77, 0x69, 0x64, 0x74, 0x68, 0x12, 0x16, 0x0a, 0x06, 0x68, 0x65, 0x69, 0x67,
	0x68, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x06, 0x68, 0x65, 0x69, 0x67, 0x68, 0x74,
	0x12, 0x16, 0x0a, 0x06, 0x70, 0x69, 0x78, 0x65, 0x6c, 0x73, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0c,
	0x52, 0x06, 0x70, 0x69, 0x78, 0x65, 0x6c, 0x73, 0x42, 0x1b, 0x5a, 0x19, 0x61, 0x73, 0x65, 0x2f,
	0x70, 0x62, 0x5f, 0x73, 0x69, 0x6d, 0x75, 0x6c, 0x61, 0x74, 0x6f, 0x72, 0x5f, 0x6d, 0x65, 0x73,
	0x73, 0x61, 0x67, 0x65, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_simulator_proto_rawDescOnce sync.Once
	file_simulator_proto_rawDescData = file_simulator_proto_rawDesc
)

func file_simulator_proto_rawDescGZIP() []byte {
	file_simulator_proto_rawDescOnce.Do(func() {
		file_simulator_proto_rawDescData = protoimpl.X.CompressGZIP(file_simulator_proto_rawDescData)
	})
	return file_simulator_proto_rawDescData
}

var file_simulator_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_simulator_proto_goTypes = []interface{}{
	(*SimulatorImageOutput)(nil), // 0: protobuf_msgs.SimulatorImageOutput
}
var file_simulator_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_simulator_proto_init() }
func file_simulator_proto_init() {
	if File_simulator_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_simulator_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SimulatorImageOutput); i {
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
			RawDescriptor: file_simulator_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_simulator_proto_goTypes,
		DependencyIndexes: file_simulator_proto_depIdxs,
		MessageInfos:      file_simulator_proto_msgTypes,
	}.Build()
	File_simulator_proto = out.File
	file_simulator_proto_rawDesc = nil
	file_simulator_proto_goTypes = nil
	file_simulator_proto_depIdxs = nil
}
