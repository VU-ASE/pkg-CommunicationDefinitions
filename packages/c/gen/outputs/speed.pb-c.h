/* Generated by the protocol buffer compiler.  DO NOT EDIT! */
/* Generated from: outputs/speed.proto */

#ifndef PROTOBUF_C_outputs_2fspeed_2eproto__INCLUDED
#define PROTOBUF_C_outputs_2fspeed_2eproto__INCLUDED

#include <protobuf-c/protobuf-c.h>

PROTOBUF_C__BEGIN_DECLS

#if PROTOBUF_C_VERSION_NUMBER < 1003000
# error This file was generated by a newer version of protoc-c which is incompatible with your libprotobuf-c headers. Please update your headers.
#elif 1003003 < PROTOBUF_C_MIN_COMPILER_VERSION
# error This file was generated by an older version of protoc-c which is incompatible with your libprotobuf-c headers. Please regenerate this file with a newer version of protoc-c.
#endif


typedef struct _ProtobufMsgs__SpeedSensorOutput ProtobufMsgs__SpeedSensorOutput;


/* --- enums --- */


/* --- messages --- */

struct  _ProtobufMsgs__SpeedSensorOutput
{
  ProtobufCMessage base;
  int32_t rpm;
};
#define PROTOBUF_MSGS__SPEED_SENSOR_OUTPUT__INIT \
 { PROTOBUF_C_MESSAGE_INIT (&protobuf_msgs__speed_sensor_output__descriptor) \
    , 0 }


/* ProtobufMsgs__SpeedSensorOutput methods */
void   protobuf_msgs__speed_sensor_output__init
                     (ProtobufMsgs__SpeedSensorOutput         *message);
size_t protobuf_msgs__speed_sensor_output__get_packed_size
                     (const ProtobufMsgs__SpeedSensorOutput   *message);
size_t protobuf_msgs__speed_sensor_output__pack
                     (const ProtobufMsgs__SpeedSensorOutput   *message,
                      uint8_t             *out);
size_t protobuf_msgs__speed_sensor_output__pack_to_buffer
                     (const ProtobufMsgs__SpeedSensorOutput   *message,
                      ProtobufCBuffer     *buffer);
ProtobufMsgs__SpeedSensorOutput *
       protobuf_msgs__speed_sensor_output__unpack
                     (ProtobufCAllocator  *allocator,
                      size_t               len,
                      const uint8_t       *data);
void   protobuf_msgs__speed_sensor_output__free_unpacked
                     (ProtobufMsgs__SpeedSensorOutput *message,
                      ProtobufCAllocator *allocator);
/* --- per-message closures --- */

typedef void (*ProtobufMsgs__SpeedSensorOutput_Closure)
                 (const ProtobufMsgs__SpeedSensorOutput *message,
                  void *closure_data);

/* --- services --- */


/* --- descriptors --- */

extern const ProtobufCMessageDescriptor protobuf_msgs__speed_sensor_output__descriptor;

PROTOBUF_C__END_DECLS


#endif  /* PROTOBUF_C_outputs_2fspeed_2eproto__INCLUDED */
