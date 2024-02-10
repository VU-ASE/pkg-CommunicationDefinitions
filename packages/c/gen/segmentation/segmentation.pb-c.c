/* Generated by the protocol buffer compiler.  DO NOT EDIT! */
/* Generated from: segmentation/segmentation.proto */

/* Do not generate deprecated warnings for self */
#ifndef PROTOBUF_C__NO_DEPRECATED
#define PROTOBUF_C__NO_DEPRECATED
#endif

#include "segmentation/segmentation.pb-c.h"
void   protobuf_msgs__segment__init
                     (ProtobufMsgs__Segment         *message)
{
  static const ProtobufMsgs__Segment init_value = PROTOBUF_MSGS__SEGMENT__INIT;
  *message = init_value;
}
size_t protobuf_msgs__segment__get_packed_size
                     (const ProtobufMsgs__Segment *message)
{
  assert(message->base.descriptor == &protobuf_msgs__segment__descriptor);
  return protobuf_c_message_get_packed_size ((const ProtobufCMessage*)(message));
}
size_t protobuf_msgs__segment__pack
                     (const ProtobufMsgs__Segment *message,
                      uint8_t       *out)
{
  assert(message->base.descriptor == &protobuf_msgs__segment__descriptor);
  return protobuf_c_message_pack ((const ProtobufCMessage*)message, out);
}
size_t protobuf_msgs__segment__pack_to_buffer
                     (const ProtobufMsgs__Segment *message,
                      ProtobufCBuffer *buffer)
{
  assert(message->base.descriptor == &protobuf_msgs__segment__descriptor);
  return protobuf_c_message_pack_to_buffer ((const ProtobufCMessage*)message, buffer);
}
ProtobufMsgs__Segment *
       protobuf_msgs__segment__unpack
                     (ProtobufCAllocator  *allocator,
                      size_t               len,
                      const uint8_t       *data)
{
  return (ProtobufMsgs__Segment *)
     protobuf_c_message_unpack (&protobuf_msgs__segment__descriptor,
                                allocator, len, data);
}
void   protobuf_msgs__segment__free_unpacked
                     (ProtobufMsgs__Segment *message,
                      ProtobufCAllocator *allocator)
{
  if(!message)
    return;
  assert(message->base.descriptor == &protobuf_msgs__segment__descriptor);
  protobuf_c_message_free_unpacked ((ProtobufCMessage*)message, allocator);
}
static const ProtobufCFieldDescriptor protobuf_msgs__segment__field_descriptors[4] =
{
  {
    "PacketId",
    1,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_INT64,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__Segment, packetid),
    NULL,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "SegmentId",
    2,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_INT64,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__Segment, segmentid),
    NULL,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "TotalSegments",
    3,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_INT64,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__Segment, totalsegments),
    NULL,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "Data",
    4,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_BYTES,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__Segment, data),
    NULL,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
};
static const unsigned protobuf_msgs__segment__field_indices_by_name[] = {
  3,   /* field[3] = Data */
  0,   /* field[0] = PacketId */
  1,   /* field[1] = SegmentId */
  2,   /* field[2] = TotalSegments */
};
static const ProtobufCIntRange protobuf_msgs__segment__number_ranges[1 + 1] =
{
  { 1, 0 },
  { 0, 4 }
};
const ProtobufCMessageDescriptor protobuf_msgs__segment__descriptor =
{
  PROTOBUF_C__MESSAGE_DESCRIPTOR_MAGIC,
  "protobuf_msgs.Segment",
  "Segment",
  "ProtobufMsgs__Segment",
  "protobuf_msgs",
  sizeof(ProtobufMsgs__Segment),
  4,
  protobuf_msgs__segment__field_descriptors,
  protobuf_msgs__segment__field_indices_by_name,
  1,  protobuf_msgs__segment__number_ranges,
  (ProtobufCMessageInit) protobuf_msgs__segment__init,
  NULL,NULL,NULL    /* reserved[123] */
};