/* Generated by the protocol buffer compiler.  DO NOT EDIT! */
/* Generated from: simulator/simulator.proto */

#ifndef PROTOBUF_C_simulator_2fsimulator_2eproto__INCLUDED
#define PROTOBUF_C_simulator_2fsimulator_2eproto__INCLUDED

#include <protobuf-c/protobuf-c.h>

PROTOBUF_C__BEGIN_DECLS

#if PROTOBUF_C_VERSION_NUMBER < 1003000
# error This file was generated by a newer version of protoc-c which is incompatible with your libprotobuf-c headers. Please update your headers.
#elif 1003003 < PROTOBUF_C_MIN_COMPILER_VERSION
# error This file was generated by an older version of protoc-c which is incompatible with your libprotobuf-c headers. Please regenerate this file with a newer version of protoc-c.
#endif


typedef struct _ProtobufMsgs__SimulatorImageOutput ProtobufMsgs__SimulatorImageOutput;


/* --- enums --- */


/* --- messages --- */

/*
 * Simulator sensor outputs.
 */
struct  _ProtobufMsgs__SimulatorImageOutput
{
  ProtobufCMessage base;
  uint32_t frameid;
  uint32_t width;
  uint32_t height;
  ProtobufCBinaryData pixels;
};
#define PROTOBUF_MSGS__SIMULATOR_IMAGE_OUTPUT__INIT \
 { PROTOBUF_C_MESSAGE_INIT (&protobuf_msgs__simulator_image_output__descriptor) \
    , 0, 0, 0, {0,NULL} }


/* ProtobufMsgs__SimulatorImageOutput methods */
void   protobuf_msgs__simulator_image_output__init
                     (ProtobufMsgs__SimulatorImageOutput         *message);
size_t protobuf_msgs__simulator_image_output__get_packed_size
                     (const ProtobufMsgs__SimulatorImageOutput   *message);
size_t protobuf_msgs__simulator_image_output__pack
                     (const ProtobufMsgs__SimulatorImageOutput   *message,
                      uint8_t             *out);
size_t protobuf_msgs__simulator_image_output__pack_to_buffer
                     (const ProtobufMsgs__SimulatorImageOutput   *message,
                      ProtobufCBuffer     *buffer);
ProtobufMsgs__SimulatorImageOutput *
       protobuf_msgs__simulator_image_output__unpack
                     (ProtobufCAllocator  *allocator,
                      size_t               len,
                      const uint8_t       *data);
void   protobuf_msgs__simulator_image_output__free_unpacked
                     (ProtobufMsgs__SimulatorImageOutput *message,
                      ProtobufCAllocator *allocator);
/* --- per-message closures --- */

typedef void (*ProtobufMsgs__SimulatorImageOutput_Closure)
                 (const ProtobufMsgs__SimulatorImageOutput *message,
                  void *closure_data);

/* --- services --- */


/* --- descriptors --- */

extern const ProtobufCMessageDescriptor protobuf_msgs__simulator_image_output__descriptor;

PROTOBUF_C__END_DECLS


#endif  /* PROTOBUF_C_simulator_2fsimulator_2eproto__INCLUDED */