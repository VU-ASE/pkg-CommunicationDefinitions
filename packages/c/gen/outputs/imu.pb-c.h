/* Generated by the protocol buffer compiler.  DO NOT EDIT! */
/* Generated from: outputs/imu.proto */

#ifndef PROTOBUF_C_outputs_2fimu_2eproto__INCLUDED
#define PROTOBUF_C_outputs_2fimu_2eproto__INCLUDED

#include <protobuf-c/protobuf-c.h>

PROTOBUF_C__BEGIN_DECLS

#if PROTOBUF_C_VERSION_NUMBER < 1003000
# error This file was generated by a newer version of protoc-c which is incompatible with your libprotobuf-c headers. Please update your headers.
#elif 1003003 < PROTOBUF_C_MIN_COMPILER_VERSION
# error This file was generated by an older version of protoc-c which is incompatible with your libprotobuf-c headers. Please regenerate this file with a newer version of protoc-c.
#endif


typedef struct _ProtobufMsgs__ImuOutput ProtobufMsgs__ImuOutput;
typedef struct _ProtobufMsgs__ImuOutput__Vector ProtobufMsgs__ImuOutput__Vector;


/* --- enums --- */


/* --- messages --- */

struct  _ProtobufMsgs__ImuOutput__Vector
{
  ProtobufCMessage base;
  float x;
  float y;
  float z;
};
#define PROTOBUF_MSGS__IMU_OUTPUT__VECTOR__INIT \
 { PROTOBUF_C_MESSAGE_INIT (&protobuf_msgs__imu_output__vector__descriptor) \
    , 0, 0, 0 }


struct  _ProtobufMsgs__ImuOutput
{
  ProtobufCMessage base;
  int32_t temperature;
  ProtobufMsgs__ImuOutput__Vector *magnetometer;
  ProtobufMsgs__ImuOutput__Vector *gyroscope;
  ProtobufMsgs__ImuOutput__Vector *euler;
  ProtobufMsgs__ImuOutput__Vector *accelerometer;
  ProtobufMsgs__ImuOutput__Vector *linearaccelerometer;
};
#define PROTOBUF_MSGS__IMU_OUTPUT__INIT \
 { PROTOBUF_C_MESSAGE_INIT (&protobuf_msgs__imu_output__descriptor) \
    , 0, NULL, NULL, NULL, NULL, NULL }


/* ProtobufMsgs__ImuOutput__Vector methods */
void   protobuf_msgs__imu_output__vector__init
                     (ProtobufMsgs__ImuOutput__Vector         *message);
/* ProtobufMsgs__ImuOutput methods */
void   protobuf_msgs__imu_output__init
                     (ProtobufMsgs__ImuOutput         *message);
size_t protobuf_msgs__imu_output__get_packed_size
                     (const ProtobufMsgs__ImuOutput   *message);
size_t protobuf_msgs__imu_output__pack
                     (const ProtobufMsgs__ImuOutput   *message,
                      uint8_t             *out);
size_t protobuf_msgs__imu_output__pack_to_buffer
                     (const ProtobufMsgs__ImuOutput   *message,
                      ProtobufCBuffer     *buffer);
ProtobufMsgs__ImuOutput *
       protobuf_msgs__imu_output__unpack
                     (ProtobufCAllocator  *allocator,
                      size_t               len,
                      const uint8_t       *data);
void   protobuf_msgs__imu_output__free_unpacked
                     (ProtobufMsgs__ImuOutput *message,
                      ProtobufCAllocator *allocator);
/* --- per-message closures --- */

typedef void (*ProtobufMsgs__ImuOutput__Vector_Closure)
                 (const ProtobufMsgs__ImuOutput__Vector *message,
                  void *closure_data);
typedef void (*ProtobufMsgs__ImuOutput_Closure)
                 (const ProtobufMsgs__ImuOutput *message,
                  void *closure_data);

/* --- services --- */


/* --- descriptors --- */

extern const ProtobufCMessageDescriptor protobuf_msgs__imu_output__descriptor;
extern const ProtobufCMessageDescriptor protobuf_msgs__imu_output__vector__descriptor;

PROTOBUF_C__END_DECLS


#endif  /* PROTOBUF_C_outputs_2fimu_2eproto__INCLUDED */