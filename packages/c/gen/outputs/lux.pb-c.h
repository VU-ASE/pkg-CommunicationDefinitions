/* Generated by the protocol buffer compiler.  DO NOT EDIT! */
/* Generated from: outputs/lux.proto */

#ifndef PROTOBUF_C_outputs_2flux_2eproto__INCLUDED
#define PROTOBUF_C_outputs_2flux_2eproto__INCLUDED

#include <protobuf-c/protobuf-c.h>

PROTOBUF_C__BEGIN_DECLS

#if PROTOBUF_C_VERSION_NUMBER < 1003000
# error This file was generated by a newer version of protoc-c which is incompatible with your libprotobuf-c headers. Please update your headers.
#elif 1003003 < PROTOBUF_C_MIN_COMPILER_VERSION
# error This file was generated by an older version of protoc-c which is incompatible with your libprotobuf-c headers. Please regenerate this file with a newer version of protoc-c.
#endif


typedef struct _ProtobufMsgs__LuxOutput ProtobufMsgs__LuxOutput;


/* --- enums --- */


/* --- messages --- */

struct  _ProtobufMsgs__LuxOutput
{
  ProtobufCMessage base;
  int32_t lux;
};
#define PROTOBUF_MSGS__LUX_OUTPUT__INIT \
 { PROTOBUF_C_MESSAGE_INIT (&protobuf_msgs__lux_output__descriptor) \
    , 0 }


/* ProtobufMsgs__LuxOutput methods */
void   protobuf_msgs__lux_output__init
                     (ProtobufMsgs__LuxOutput         *message);
size_t protobuf_msgs__lux_output__get_packed_size
                     (const ProtobufMsgs__LuxOutput   *message);
size_t protobuf_msgs__lux_output__pack
                     (const ProtobufMsgs__LuxOutput   *message,
                      uint8_t             *out);
size_t protobuf_msgs__lux_output__pack_to_buffer
                     (const ProtobufMsgs__LuxOutput   *message,
                      ProtobufCBuffer     *buffer);
ProtobufMsgs__LuxOutput *
       protobuf_msgs__lux_output__unpack
                     (ProtobufCAllocator  *allocator,
                      size_t               len,
                      const uint8_t       *data);
void   protobuf_msgs__lux_output__free_unpacked
                     (ProtobufMsgs__LuxOutput *message,
                      ProtobufCAllocator *allocator);
/* --- per-message closures --- */

typedef void (*ProtobufMsgs__LuxOutput_Closure)
                 (const ProtobufMsgs__LuxOutput *message,
                  void *closure_data);

/* --- services --- */


/* --- descriptors --- */

extern const ProtobufCMessageDescriptor protobuf_msgs__lux_output__descriptor;

PROTOBUF_C__END_DECLS


#endif  /* PROTOBUF_C_outputs_2flux_2eproto__INCLUDED */