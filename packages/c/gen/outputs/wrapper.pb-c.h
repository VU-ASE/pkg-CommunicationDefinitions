/* Generated by the protocol buffer compiler.  DO NOT EDIT! */
/* Generated from: outputs/wrapper.proto */

#ifndef PROTOBUF_C_outputs_2fwrapper_2eproto__INCLUDED
#define PROTOBUF_C_outputs_2fwrapper_2eproto__INCLUDED

#include <protobuf-c/protobuf-c.h>

PROTOBUF_C__BEGIN_DECLS

#if PROTOBUF_C_VERSION_NUMBER < 1003000
# error This file was generated by a newer version of protoc-c which is incompatible with your libprotobuf-c headers. Please update your headers.
#elif 1003003 < PROTOBUF_C_MIN_COMPILER_VERSION
# error This file was generated by an older version of protoc-c which is incompatible with your libprotobuf-c headers. Please regenerate this file with a newer version of protoc-c.
#endif

#include "outputs/camera.pb-c.h"
#include "outputs/distance.pb-c.h"
#include "outputs/speed.pb-c.h"
#include "outputs/controller.pb-c.h"
#include "outputs/imu.pb-c.h"
#include "outputs/battery.pb-c.h"
#include "outputs/rpm.pb-c.h"
#include "outputs/lux.pb-c.h"

typedef struct _ProtobufMsgs__SensorOutput ProtobufMsgs__SensorOutput;


/* --- enums --- */


/* --- messages --- */

typedef enum {
  PROTOBUF_MSGS__SENSOR_OUTPUT__SENSOR_OUTPUT__NOT_SET = 0,
  PROTOBUF_MSGS__SENSOR_OUTPUT__SENSOR_OUTPUT_CAMERA_OUTPUT = 4,
  PROTOBUF_MSGS__SENSOR_OUTPUT__SENSOR_OUTPUT_DISTANCE_OUTPUT = 5,
  PROTOBUF_MSGS__SENSOR_OUTPUT__SENSOR_OUTPUT_SPEED_OUTPUT = 6,
  PROTOBUF_MSGS__SENSOR_OUTPUT__SENSOR_OUTPUT_CONTROLLER_OUTPUT = 7,
  PROTOBUF_MSGS__SENSOR_OUTPUT__SENSOR_OUTPUT_IMU_OUTPUT = 8,
  PROTOBUF_MSGS__SENSOR_OUTPUT__SENSOR_OUTPUT_BATTERY_OUTPUT = 9,
  PROTOBUF_MSGS__SENSOR_OUTPUT__SENSOR_OUTPUT_RPM_OUPUT = 10,
  PROTOBUF_MSGS__SENSOR_OUTPUT__SENSOR_OUTPUT_LUX_OUTPUT = 11
    PROTOBUF_C__FORCE_ENUM_TO_BE_INT_SIZE(PROTOBUF_MSGS__SENSOR_OUTPUT__SENSOR_OUTPUT)
} ProtobufMsgs__SensorOutput__SensorOutputCase;

struct  _ProtobufMsgs__SensorOutput
{
  ProtobufCMessage base;
  /*
   * Every sensor has a unique ID to support multiple sensors of the same type
   */
  uint32_t sensorid;
  /*
   * Add a timestamp to the output to make debugging, logging and synchronisation easier
   */
  uint64_t timestamp;
  /*
   * Report an error if the sensor is not working correctly (controller can decide to ignore or stop the car)
   * 0 = no error, any other value = error
   */
  uint32_t status;
  ProtobufMsgs__SensorOutput__SensorOutputCase sensor_output_case;
  union {
    ProtobufMsgs__CameraSensorOutput *cameraoutput;
    ProtobufMsgs__DistanceSensorOutput *distanceoutput;
    ProtobufMsgs__SpeedSensorOutput *speedoutput;
    ProtobufMsgs__ControllerOutput *controlleroutput;
    ProtobufMsgs__ImuSensorOutput *imuoutput;
    ProtobufMsgs__BatterySensorOutput *batteryoutput;
    ProtobufMsgs__RpmSensorOutput *rpmouput;
    ProtobufMsgs__LuxSensorOutput *luxoutput;
  };
};
#define PROTOBUF_MSGS__SENSOR_OUTPUT__INIT \
 { PROTOBUF_C_MESSAGE_INIT (&protobuf_msgs__sensor_output__descriptor) \
    , 0, 0, 0, PROTOBUF_MSGS__SENSOR_OUTPUT__SENSOR_OUTPUT__NOT_SET, {0} }


/* ProtobufMsgs__SensorOutput methods */
void   protobuf_msgs__sensor_output__init
                     (ProtobufMsgs__SensorOutput         *message);
size_t protobuf_msgs__sensor_output__get_packed_size
                     (const ProtobufMsgs__SensorOutput   *message);
size_t protobuf_msgs__sensor_output__pack
                     (const ProtobufMsgs__SensorOutput   *message,
                      uint8_t             *out);
size_t protobuf_msgs__sensor_output__pack_to_buffer
                     (const ProtobufMsgs__SensorOutput   *message,
                      ProtobufCBuffer     *buffer);
ProtobufMsgs__SensorOutput *
       protobuf_msgs__sensor_output__unpack
                     (ProtobufCAllocator  *allocator,
                      size_t               len,
                      const uint8_t       *data);
void   protobuf_msgs__sensor_output__free_unpacked
                     (ProtobufMsgs__SensorOutput *message,
                      ProtobufCAllocator *allocator);
/* --- per-message closures --- */

typedef void (*ProtobufMsgs__SensorOutput_Closure)
                 (const ProtobufMsgs__SensorOutput *message,
                  void *closure_data);

/* --- services --- */


/* --- descriptors --- */

extern const ProtobufCMessageDescriptor protobuf_msgs__sensor_output__descriptor;

PROTOBUF_C__END_DECLS


#endif  /* PROTOBUF_C_outputs_2fwrapper_2eproto__INCLUDED */
