// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.33.0
// 	protoc        v4.25.1
// source: outputs/lux.proto

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

type LuxOutput struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Lux int32 `protobuf:"varint,1,opt,name=lux,proto3" json:"lux,omitempty"`
}

func (x *LuxOutput) Reset() {
	*x = LuxOutput{}
	if protoimpl.UnsafeEnabled {
		mi := &file_outputs_lux_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *LuxOutput) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*LuxOutput) ProtoMessage() {}

func (x *LuxOutput) ProtoReflect() protoreflect.Message {
	mi := &file_outputs_lux_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use LuxOutput.ProtoReflect.Descriptor instead.
func (*LuxOutput) Descriptor() ([]byte, []int) {
	return file_outputs_lux_proto_rawDescGZIP(), []int{0}
}

func (x *LuxOutput) GetLux() int32 {
	if x != nil {
		return x.Lux
	}
	return 0
}

var File_outputs_lux_proto protoreflect.FileDescriptor

var file_outputs_lux_proto_rawDesc = []byte{
	0x0a, 0x11, 0x6f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x73, 0x2f, 0x6c, 0x75, 0x78, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73,
	0x67, 0x73, 0x22, 0x1d, 0x0a, 0x09, 0x4c, 0x75, 0x78, 0x4f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x12,
	0x10, 0x0a, 0x03, 0x6c, 0x75, 0x78, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x03, 0x6c, 0x75,
	0x78, 0x42, 0x17, 0x5a, 0x15, 0x61, 0x73, 0x65, 0x2f, 0x70, 0x62, 0x5f, 0x6d, 0x6f, 0x64, 0x75,
	0x6c, 0x65, 0x5f, 0x6f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x33,
}

var (
	file_outputs_lux_proto_rawDescOnce sync.Once
	file_outputs_lux_proto_rawDescData = file_outputs_lux_proto_rawDesc
)

func file_outputs_lux_proto_rawDescGZIP() []byte {
	file_outputs_lux_proto_rawDescOnce.Do(func() {
		file_outputs_lux_proto_rawDescData = protoimpl.X.CompressGZIP(file_outputs_lux_proto_rawDescData)
	})
	return file_outputs_lux_proto_rawDescData
}

var file_outputs_lux_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_outputs_lux_proto_goTypes = []interface{}{
	(*LuxOutput)(nil), // 0: protobuf_msgs.LuxOutput
}
var file_outputs_lux_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_outputs_lux_proto_init() }
func file_outputs_lux_proto_init() {
	if File_outputs_lux_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_outputs_lux_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*LuxOutput); i {
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
			RawDescriptor: file_outputs_lux_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_outputs_lux_proto_goTypes,
		DependencyIndexes: file_outputs_lux_proto_depIdxs,
		MessageInfos:      file_outputs_lux_proto_msgTypes,
	}.Build()
	File_outputs_lux_proto = out.File
	file_outputs_lux_proto_rawDesc = nil
	file_outputs_lux_proto_goTypes = nil
	file_outputs_lux_proto_depIdxs = nil
}