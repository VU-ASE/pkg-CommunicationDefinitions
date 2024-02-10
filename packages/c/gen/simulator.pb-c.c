/* Generated by the protocol buffer compiler.  DO NOT EDIT! */
/* Generated from: simulator.proto */

/* Do not generate deprecated warnings for self */
#ifndef PROTOBUF_C__NO_DEPRECATED
#define PROTOBUF_C__NO_DEPRECATED
#endif

#include "simulator.pb-c.h"
void   protobuf_msgs__simulator_image_output__init
                     (ProtobufMsgs__SimulatorImageOutput         *message)
{
  static const ProtobufMsgs__SimulatorImageOutput init_value = PROTOBUF_MSGS__SIMULATOR_IMAGE_OUTPUT__INIT;
  *message = init_value;
}
size_t protobuf_msgs__simulator_image_output__get_packed_size
                     (const ProtobufMsgs__SimulatorImageOutput *message)
{
  assert(message->base.descriptor == &protobuf_msgs__simulator_image_output__descriptor);
  return protobuf_c_message_get_packed_size ((const ProtobufCMessage*)(message));
}
size_t protobuf_msgs__simulator_image_output__pack
                     (const ProtobufMsgs__SimulatorImageOutput *message,
                      uint8_t       *out)
{
  assert(message->base.descriptor == &protobuf_msgs__simulator_image_output__descriptor);
  return protobuf_c_message_pack ((const ProtobufCMessage*)message, out);
}
size_t protobuf_msgs__simulator_image_output__pack_to_buffer
                     (const ProtobufMsgs__SimulatorImageOutput *message,
                      ProtobufCBuffer *buffer)
{
  assert(message->base.descriptor == &protobuf_msgs__simulator_image_output__descriptor);
  return protobuf_c_message_pack_to_buffer ((const ProtobufCMessage*)message, buffer);
}
ProtobufMsgs__SimulatorImageOutput *
       protobuf_msgs__simulator_image_output__unpack
                     (ProtobufCAllocator  *allocator,
                      size_t               len,
                      const uint8_t       *data)
{
  return (ProtobufMsgs__SimulatorImageOutput *)
     protobuf_c_message_unpack (&protobuf_msgs__simulator_image_output__descriptor,
                                allocator, len, data);
}
void   protobuf_msgs__simulator_image_output__free_unpacked
                     (ProtobufMsgs__SimulatorImageOutput *message,
                      ProtobufCAllocator *allocator)
{
  if(!message)
    return;
  assert(message->base.descriptor == &protobuf_msgs__simulator_image_output__descriptor);
  protobuf_c_message_free_unpacked ((ProtobufCMessage*)message, allocator);
}
static const ProtobufCFieldDescriptor protobuf_msgs__simulator_image_output__field_descriptors[4] =
{
  {
    "frameid",
    1,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_UINT32,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__SimulatorImageOutput, frameid),
    NULL,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "width",
    2,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_UINT32,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__SimulatorImageOutput, width),
    NULL,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "height",
    3,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_UINT32,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__SimulatorImageOutput, height),
    NULL,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "pixels",
    4,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_BYTES,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__SimulatorImageOutput, pixels),
    NULL,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
};
static const unsigned protobuf_msgs__simulator_image_output__field_indices_by_name[] = {
  0,   /* field[0] = frameid */
  2,   /* field[2] = height */
  3,   /* field[3] = pixels */
  1,   /* field[1] = width */
};
static const ProtobufCIntRange protobuf_msgs__simulator_image_output__number_ranges[1 + 1] =
{
  { 1, 0 },
  { 0, 4 }
};
const ProtobufCMessageDescriptor protobuf_msgs__simulator_image_output__descriptor =
{
  PROTOBUF_C__MESSAGE_DESCRIPTOR_MAGIC,
  "protobuf_msgs.SimulatorImageOutput",
  "SimulatorImageOutput",
  "ProtobufMsgs__SimulatorImageOutput",
  "protobuf_msgs",
  sizeof(ProtobufMsgs__SimulatorImageOutput),
  4,
  protobuf_msgs__simulator_image_output__field_descriptors,
  protobuf_msgs__simulator_image_output__field_indices_by_name,
  1,  protobuf_msgs__simulator_image_output__number_ranges,
  (ProtobufCMessageInit) protobuf_msgs__simulator_image_output__init,
  NULL,NULL,NULL    /* reserved[123] */
};