/* Generated by the protocol buffer compiler.  DO NOT EDIT! */
/* Generated from: outputs/controller.proto */

/* Do not generate deprecated warnings for self */
#ifndef PROTOBUF_C__NO_DEPRECATED
#define PROTOBUF_C__NO_DEPRECATED
#endif

#include "outputs/controller.pb-c.h"
void   protobuf_msgs__controller_output__init
                     (ProtobufMsgs__ControllerOutput         *message)
{
  static const ProtobufMsgs__ControllerOutput init_value = PROTOBUF_MSGS__CONTROLLER_OUTPUT__INIT;
  *message = init_value;
}
size_t protobuf_msgs__controller_output__get_packed_size
                     (const ProtobufMsgs__ControllerOutput *message)
{
  assert(message->base.descriptor == &protobuf_msgs__controller_output__descriptor);
  return protobuf_c_message_get_packed_size ((const ProtobufCMessage*)(message));
}
size_t protobuf_msgs__controller_output__pack
                     (const ProtobufMsgs__ControllerOutput *message,
                      uint8_t       *out)
{
  assert(message->base.descriptor == &protobuf_msgs__controller_output__descriptor);
  return protobuf_c_message_pack ((const ProtobufCMessage*)message, out);
}
size_t protobuf_msgs__controller_output__pack_to_buffer
                     (const ProtobufMsgs__ControllerOutput *message,
                      ProtobufCBuffer *buffer)
{
  assert(message->base.descriptor == &protobuf_msgs__controller_output__descriptor);
  return protobuf_c_message_pack_to_buffer ((const ProtobufCMessage*)message, buffer);
}
ProtobufMsgs__ControllerOutput *
       protobuf_msgs__controller_output__unpack
                     (ProtobufCAllocator  *allocator,
                      size_t               len,
                      const uint8_t       *data)
{
  return (ProtobufMsgs__ControllerOutput *)
     protobuf_c_message_unpack (&protobuf_msgs__controller_output__descriptor,
                                allocator, len, data);
}
void   protobuf_msgs__controller_output__free_unpacked
                     (ProtobufMsgs__ControllerOutput *message,
                      ProtobufCAllocator *allocator)
{
  if(!message)
    return;
  assert(message->base.descriptor == &protobuf_msgs__controller_output__descriptor);
  protobuf_c_message_free_unpacked ((ProtobufCMessage*)message, allocator);
}
static const ProtobufCFieldDescriptor protobuf_msgs__controller_output__field_descriptors[5] =
{
  {
    "timestamp",
    1,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_UINT64,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__ControllerOutput, timestamp),
    NULL,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "steeringAngle",
    2,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_FLOAT,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__ControllerOutput, steeringangle),
    NULL,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "leftThrottle",
    3,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_FLOAT,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__ControllerOutput, leftthrottle),
    NULL,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "rightThrottle",
    4,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_FLOAT,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__ControllerOutput, rightthrottle),
    NULL,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "frontLights",
    5,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_BOOL,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__ControllerOutput, frontlights),
    NULL,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
};
static const unsigned protobuf_msgs__controller_output__field_indices_by_name[] = {
  4,   /* field[4] = frontLights */
  2,   /* field[2] = leftThrottle */
  3,   /* field[3] = rightThrottle */
  1,   /* field[1] = steeringAngle */
  0,   /* field[0] = timestamp */
};
static const ProtobufCIntRange protobuf_msgs__controller_output__number_ranges[1 + 1] =
{
  { 1, 0 },
  { 0, 5 }
};
const ProtobufCMessageDescriptor protobuf_msgs__controller_output__descriptor =
{
  PROTOBUF_C__MESSAGE_DESCRIPTOR_MAGIC,
  "protobuf_msgs.ControllerOutput",
  "ControllerOutput",
  "ProtobufMsgs__ControllerOutput",
  "protobuf_msgs",
  sizeof(ProtobufMsgs__ControllerOutput),
  5,
  protobuf_msgs__controller_output__field_descriptors,
  protobuf_msgs__controller_output__field_indices_by_name,
  1,  protobuf_msgs__controller_output__number_ranges,
  (ProtobufCMessageInit) protobuf_msgs__controller_output__init,
  NULL,NULL,NULL    /* reserved[123] */
};
