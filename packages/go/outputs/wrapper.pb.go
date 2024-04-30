// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.34.0
// 	protoc        v4.25.1
// source: outputs/wrapper.proto

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

type SensorOutput struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Every sensor has a unique ID to support multiple sensors of the same type
	SensorId uint32 `protobuf:"varint,1,opt,name=sensorId,proto3" json:"sensorId,omitempty"`
	// Add a timestamp to the output to make debugging, logging and synchronisation easier
	Timestamp uint64 `protobuf:"varint,2,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
	// Report an error if the sensor is not working correctly (controller can decide to ignore or stop the car)
	// 0 = no error, any other value = error
	Status uint32 `protobuf:"varint,3,opt,name=status,proto3" json:"status,omitempty"`
	// Add the output here to make it available to the receiver
	//
	// Types that are assignable to SensorOutput:
	//
	//	*SensorOutput_CameraOutput
	//	*SensorOutput_DistanceOutput
	//	*SensorOutput_SpeedOutput
	//	*SensorOutput_ControllerOutput
	//	*SensorOutput_ImuOutput
	//	*SensorOutput_BatteryOutput
	//	*SensorOutput_RpmOutput
	SensorOutput isSensorOutput_SensorOutput `protobuf_oneof:"sensorOutput"`
}

func (x *SensorOutput) Reset() {
	*x = SensorOutput{}
	if protoimpl.UnsafeEnabled {
		mi := &file_outputs_wrapper_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SensorOutput) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SensorOutput) ProtoMessage() {}

func (x *SensorOutput) ProtoReflect() protoreflect.Message {
	mi := &file_outputs_wrapper_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SensorOutput.ProtoReflect.Descriptor instead.
func (*SensorOutput) Descriptor() ([]byte, []int) {
	return file_outputs_wrapper_proto_rawDescGZIP(), []int{0}
}

func (x *SensorOutput) GetSensorId() uint32 {
	if x != nil {
		return x.SensorId
	}
	return 0
}

func (x *SensorOutput) GetTimestamp() uint64 {
	if x != nil {
		return x.Timestamp
	}
	return 0
}

func (x *SensorOutput) GetStatus() uint32 {
	if x != nil {
		return x.Status
	}
	return 0
}

func (m *SensorOutput) GetSensorOutput() isSensorOutput_SensorOutput {
	if m != nil {
		return m.SensorOutput
	}
	return nil
}

func (x *SensorOutput) GetCameraOutput() *CameraSensorOutput {
	if x, ok := x.GetSensorOutput().(*SensorOutput_CameraOutput); ok {
		return x.CameraOutput
	}
	return nil
}

func (x *SensorOutput) GetDistanceOutput() *DistanceSensorOutput {
	if x, ok := x.GetSensorOutput().(*SensorOutput_DistanceOutput); ok {
		return x.DistanceOutput
	}
	return nil
}

func (x *SensorOutput) GetSpeedOutput() *SpeedSensorOutput {
	if x, ok := x.GetSensorOutput().(*SensorOutput_SpeedOutput); ok {
		return x.SpeedOutput
	}
	return nil
}

func (x *SensorOutput) GetControllerOutput() *ControllerOutput {
	if x, ok := x.GetSensorOutput().(*SensorOutput_ControllerOutput); ok {
		return x.ControllerOutput
	}
	return nil
}

func (x *SensorOutput) GetImuOutput() *ImuSensorOutput {
	if x, ok := x.GetSensorOutput().(*SensorOutput_ImuOutput); ok {
		return x.ImuOutput
	}
	return nil
}

func (x *SensorOutput) GetBatteryOutput() *BatterySensorOutput {
	if x, ok := x.GetSensorOutput().(*SensorOutput_BatteryOutput); ok {
		return x.BatteryOutput
	}
	return nil
}

func (x *SensorOutput) GetRpmOutput() *RpmSensorOutput {
	if x, ok := x.GetSensorOutput().(*SensorOutput_RpmOutput); ok {
		return x.RpmOutput
	}
	return nil
}

type isSensorOutput_SensorOutput interface {
	isSensorOutput_SensorOutput()
}

type SensorOutput_CameraOutput struct {
	CameraOutput *CameraSensorOutput `protobuf:"bytes,4,opt,name=cameraOutput,proto3,oneof"`
}

type SensorOutput_DistanceOutput struct {
	DistanceOutput *DistanceSensorOutput `protobuf:"bytes,5,opt,name=distanceOutput,proto3,oneof"`
}

type SensorOutput_SpeedOutput struct {
	SpeedOutput *SpeedSensorOutput `protobuf:"bytes,6,opt,name=speedOutput,proto3,oneof"`
}

type SensorOutput_ControllerOutput struct {
	ControllerOutput *ControllerOutput `protobuf:"bytes,7,opt,name=controllerOutput,proto3,oneof"`
}

type SensorOutput_ImuOutput struct {
	ImuOutput *ImuSensorOutput `protobuf:"bytes,8,opt,name=imuOutput,proto3,oneof"`
}

type SensorOutput_BatteryOutput struct {
	BatteryOutput *BatterySensorOutput `protobuf:"bytes,9,opt,name=batteryOutput,proto3,oneof"`
}

type SensorOutput_RpmOutput struct {
	RpmOutput *RpmSensorOutput `protobuf:"bytes,10,opt,name=rpmOutput,proto3,oneof"`
}

func (*SensorOutput_CameraOutput) isSensorOutput_SensorOutput() {}

func (*SensorOutput_DistanceOutput) isSensorOutput_SensorOutput() {}

func (*SensorOutput_SpeedOutput) isSensorOutput_SensorOutput() {}

func (*SensorOutput_ControllerOutput) isSensorOutput_SensorOutput() {}

func (*SensorOutput_ImuOutput) isSensorOutput_SensorOutput() {}

func (*SensorOutput_BatteryOutput) isSensorOutput_SensorOutput() {}

func (*SensorOutput_RpmOutput) isSensorOutput_SensorOutput() {}

var File_outputs_wrapper_proto protoreflect.FileDescriptor

var file_outputs_wrapper_proto_rawDesc = []byte{
	0x0a, 0x15, 0x6f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x73, 0x2f, 0x77, 0x72, 0x61, 0x70, 0x70, 0x65,
	0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73, 0x1a, 0x14, 0x6f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x73, 0x2f,
	0x63, 0x61, 0x6d, 0x65, 0x72, 0x61, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x16, 0x6f, 0x75,
	0x74, 0x70, 0x75, 0x74, 0x73, 0x2f, 0x64, 0x69, 0x73, 0x74, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x13, 0x6f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x73, 0x2f, 0x73, 0x70,
	0x65, 0x65, 0x64, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x18, 0x6f, 0x75, 0x74, 0x70, 0x75,
	0x74, 0x73, 0x2f, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x6c, 0x65, 0x72, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x11, 0x6f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x73, 0x2f, 0x69, 0x6d, 0x75,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x15, 0x6f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x73, 0x2f,
	0x62, 0x61, 0x74, 0x74, 0x65, 0x72, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x11, 0x6f,
	0x75, 0x74, 0x70, 0x75, 0x74, 0x73, 0x2f, 0x72, 0x70, 0x6d, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x22, 0xe9, 0x04, 0x0a, 0x0c, 0x53, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x4f, 0x75, 0x74, 0x70, 0x75,
	0x74, 0x12, 0x1a, 0x0a, 0x08, 0x73, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x49, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x0d, 0x52, 0x08, 0x73, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x49, 0x64, 0x12, 0x1c, 0x0a,
	0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x02, 0x20, 0x01, 0x28, 0x04,
	0x52, 0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x12, 0x16, 0x0a, 0x06, 0x73,
	0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x06, 0x73, 0x74, 0x61,
	0x74, 0x75, 0x73, 0x12, 0x47, 0x0a, 0x0c, 0x63, 0x61, 0x6d, 0x65, 0x72, 0x61, 0x4f, 0x75, 0x74,
	0x70, 0x75, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x21, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e, 0x43, 0x61, 0x6d, 0x65, 0x72, 0x61,
	0x53, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x4f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x48, 0x00, 0x52, 0x0c,
	0x63, 0x61, 0x6d, 0x65, 0x72, 0x61, 0x4f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x12, 0x4d, 0x0a, 0x0e,
	0x64, 0x69, 0x73, 0x74, 0x61, 0x6e, 0x63, 0x65, 0x4f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x18, 0x05,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x23, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f,
	0x6d, 0x73, 0x67, 0x73, 0x2e, 0x44, 0x69, 0x73, 0x74, 0x61, 0x6e, 0x63, 0x65, 0x53, 0x65, 0x6e,
	0x73, 0x6f, 0x72, 0x4f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x48, 0x00, 0x52, 0x0e, 0x64, 0x69, 0x73,
	0x74, 0x61, 0x6e, 0x63, 0x65, 0x4f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x12, 0x44, 0x0a, 0x0b, 0x73,
	0x70, 0x65, 0x65, 0x64, 0x4f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x20, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73,
	0x2e, 0x53, 0x70, 0x65, 0x65, 0x64, 0x53, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x4f, 0x75, 0x74, 0x70,
	0x75, 0x74, 0x48, 0x00, 0x52, 0x0b, 0x73, 0x70, 0x65, 0x65, 0x64, 0x4f, 0x75, 0x74, 0x70, 0x75,
	0x74, 0x12, 0x4d, 0x0a, 0x10, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x6c, 0x65, 0x72, 0x4f,
	0x75, 0x74, 0x70, 0x75, 0x74, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1f, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e, 0x43, 0x6f, 0x6e, 0x74,
	0x72, 0x6f, 0x6c, 0x6c, 0x65, 0x72, 0x4f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x48, 0x00, 0x52, 0x10,
	0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x6c, 0x65, 0x72, 0x4f, 0x75, 0x74, 0x70, 0x75, 0x74,
	0x12, 0x3e, 0x0a, 0x09, 0x69, 0x6d, 0x75, 0x4f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x18, 0x08, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d,
	0x73, 0x67, 0x73, 0x2e, 0x49, 0x6d, 0x75, 0x53, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x4f, 0x75, 0x74,
	0x70, 0x75, 0x74, 0x48, 0x00, 0x52, 0x09, 0x69, 0x6d, 0x75, 0x4f, 0x75, 0x74, 0x70, 0x75, 0x74,
	0x12, 0x4a, 0x0a, 0x0d, 0x62, 0x61, 0x74, 0x74, 0x65, 0x72, 0x79, 0x4f, 0x75, 0x74, 0x70, 0x75,
	0x74, 0x18, 0x09, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x22, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e, 0x42, 0x61, 0x74, 0x74, 0x65, 0x72, 0x79, 0x53,
	0x65, 0x6e, 0x73, 0x6f, 0x72, 0x4f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x48, 0x00, 0x52, 0x0d, 0x62,
	0x61, 0x74, 0x74, 0x65, 0x72, 0x79, 0x4f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x12, 0x3e, 0x0a, 0x09,
	0x72, 0x70, 0x6d, 0x4f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x1e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x5f, 0x6d, 0x73, 0x67, 0x73, 0x2e,
	0x52, 0x70, 0x6d, 0x53, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x4f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x48,
	0x00, 0x52, 0x09, 0x72, 0x70, 0x6d, 0x4f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x42, 0x0e, 0x0a, 0x0c,
	0x73, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x4f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x42, 0x17, 0x5a, 0x15,
	0x61, 0x73, 0x65, 0x2f, 0x70, 0x62, 0x5f, 0x6d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x5f, 0x6f, 0x75,
	0x74, 0x70, 0x75, 0x74, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_outputs_wrapper_proto_rawDescOnce sync.Once
	file_outputs_wrapper_proto_rawDescData = file_outputs_wrapper_proto_rawDesc
)

func file_outputs_wrapper_proto_rawDescGZIP() []byte {
	file_outputs_wrapper_proto_rawDescOnce.Do(func() {
		file_outputs_wrapper_proto_rawDescData = protoimpl.X.CompressGZIP(file_outputs_wrapper_proto_rawDescData)
	})
	return file_outputs_wrapper_proto_rawDescData
}

var file_outputs_wrapper_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_outputs_wrapper_proto_goTypes = []interface{}{
	(*SensorOutput)(nil),         // 0: protobuf_msgs.SensorOutput
	(*CameraSensorOutput)(nil),   // 1: protobuf_msgs.CameraSensorOutput
	(*DistanceSensorOutput)(nil), // 2: protobuf_msgs.DistanceSensorOutput
	(*SpeedSensorOutput)(nil),    // 3: protobuf_msgs.SpeedSensorOutput
	(*ControllerOutput)(nil),     // 4: protobuf_msgs.ControllerOutput
	(*ImuSensorOutput)(nil),      // 5: protobuf_msgs.ImuSensorOutput
	(*BatterySensorOutput)(nil),  // 6: protobuf_msgs.BatterySensorOutput
	(*RpmSensorOutput)(nil),      // 7: protobuf_msgs.RpmSensorOutput
}
var file_outputs_wrapper_proto_depIdxs = []int32{
	1, // 0: protobuf_msgs.SensorOutput.cameraOutput:type_name -> protobuf_msgs.CameraSensorOutput
	2, // 1: protobuf_msgs.SensorOutput.distanceOutput:type_name -> protobuf_msgs.DistanceSensorOutput
	3, // 2: protobuf_msgs.SensorOutput.speedOutput:type_name -> protobuf_msgs.SpeedSensorOutput
	4, // 3: protobuf_msgs.SensorOutput.controllerOutput:type_name -> protobuf_msgs.ControllerOutput
	5, // 4: protobuf_msgs.SensorOutput.imuOutput:type_name -> protobuf_msgs.ImuSensorOutput
	6, // 5: protobuf_msgs.SensorOutput.batteryOutput:type_name -> protobuf_msgs.BatterySensorOutput
	7, // 6: protobuf_msgs.SensorOutput.rpmOutput:type_name -> protobuf_msgs.RpmSensorOutput
	7, // [7:7] is the sub-list for method output_type
	7, // [7:7] is the sub-list for method input_type
	7, // [7:7] is the sub-list for extension type_name
	7, // [7:7] is the sub-list for extension extendee
	0, // [0:7] is the sub-list for field type_name
}

func init() { file_outputs_wrapper_proto_init() }
func file_outputs_wrapper_proto_init() {
	if File_outputs_wrapper_proto != nil {
		return
	}
	file_outputs_camera_proto_init()
	file_outputs_distance_proto_init()
	file_outputs_speed_proto_init()
	file_outputs_controller_proto_init()
	file_outputs_imu_proto_init()
	file_outputs_battery_proto_init()
	file_outputs_rpm_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_outputs_wrapper_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SensorOutput); i {
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
	file_outputs_wrapper_proto_msgTypes[0].OneofWrappers = []interface{}{
		(*SensorOutput_CameraOutput)(nil),
		(*SensorOutput_DistanceOutput)(nil),
		(*SensorOutput_SpeedOutput)(nil),
		(*SensorOutput_ControllerOutput)(nil),
		(*SensorOutput_ImuOutput)(nil),
		(*SensorOutput_BatteryOutput)(nil),
		(*SensorOutput_RpmOutput)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_outputs_wrapper_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_outputs_wrapper_proto_goTypes,
		DependencyIndexes: file_outputs_wrapper_proto_depIdxs,
		MessageInfos:      file_outputs_wrapper_proto_msgTypes,
	}.Build()
	File_outputs_wrapper_proto = out.File
	file_outputs_wrapper_proto_rawDesc = nil
	file_outputs_wrapper_proto_goTypes = nil
	file_outputs_wrapper_proto_depIdxs = nil
}
