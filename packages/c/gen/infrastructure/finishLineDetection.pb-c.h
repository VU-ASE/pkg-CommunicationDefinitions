/* Generated by the protocol buffer compiler.  DO NOT EDIT! */
/* Generated from: infrastructure/finishLineDetection.proto */

#ifndef PROTOBUF_C_infrastructure_2ffinishLineDetection_2eproto__INCLUDED
#define PROTOBUF_C_infrastructure_2ffinishLineDetection_2eproto__INCLUDED

#include <protobuf-c/protobuf-c.h>

PROTOBUF_C__BEGIN_DECLS

#if PROTOBUF_C_VERSION_NUMBER < 1003000
# error This file was generated by a newer version of protoc-c which is incompatible with your libprotobuf-c headers. Please update your headers.
#elif 1003003 < PROTOBUF_C_MIN_COMPILER_VERSION
# error This file was generated by an older version of protoc-c which is incompatible with your libprotobuf-c headers. Please regenerate this file with a newer version of protoc-c.
#endif


typedef struct _ProtobufMsgs__FinsihLineDetectionOutput ProtobufMsgs__FinsihLineDetectionOutput;


/* --- enums --- */


/* --- messages --- */

struct  _ProtobufMsgs__FinsihLineDetectionOutput
{
  ProtobufCMessage base;
  /*
   * Time of event
   */
  uint64_t timestamp;
};
#define PROTOBUF_MSGS__FINSIH_LINE_DETECTION_OUTPUT__INIT \
 { PROTOBUF_C_MESSAGE_INIT (&protobuf_msgs__finsih_line_detection_output__descriptor) \
    , 0 }


/* ProtobufMsgs__FinsihLineDetectionOutput methods */
void   protobuf_msgs__finsih_line_detection_output__init
                     (ProtobufMsgs__FinsihLineDetectionOutput         *message);
size_t protobuf_msgs__finsih_line_detection_output__get_packed_size
                     (const ProtobufMsgs__FinsihLineDetectionOutput   *message);
size_t protobuf_msgs__finsih_line_detection_output__pack
                     (const ProtobufMsgs__FinsihLineDetectionOutput   *message,
                      uint8_t             *out);
size_t protobuf_msgs__finsih_line_detection_output__pack_to_buffer
                     (const ProtobufMsgs__FinsihLineDetectionOutput   *message,
                      ProtobufCBuffer     *buffer);
ProtobufMsgs__FinsihLineDetectionOutput *
       protobuf_msgs__finsih_line_detection_output__unpack
                     (ProtobufCAllocator  *allocator,
                      size_t               len,
                      const uint8_t       *data);
void   protobuf_msgs__finsih_line_detection_output__free_unpacked
                     (ProtobufMsgs__FinsihLineDetectionOutput *message,
                      ProtobufCAllocator *allocator);
/* --- per-message closures --- */

typedef void (*ProtobufMsgs__FinsihLineDetectionOutput_Closure)
                 (const ProtobufMsgs__FinsihLineDetectionOutput *message,
                  void *closure_data);

/* --- services --- */


/* --- descriptors --- */

extern const ProtobufCMessageDescriptor protobuf_msgs__finsih_line_detection_output__descriptor;

PROTOBUF_C__END_DECLS


#endif  /* PROTOBUF_C_infrastructure_2ffinishLineDetection_2eproto__INCLUDED */