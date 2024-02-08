/* Generated by the protocol buffer compiler.  DO NOT EDIT! */
/* Generated from: systemmanager/wrapper.proto */

/* Do not generate deprecated warnings for self */
#ifndef PROTOBUF_C__NO_DEPRECATED
#define PROTOBUF_C__NO_DEPRECATED
#endif

#include "systemmanager/wrapper.pb-c.h"
void   protobuf_msgs__system_manager_message__init
                     (ProtobufMsgs__SystemManagerMessage         *message)
{
  static const ProtobufMsgs__SystemManagerMessage init_value = PROTOBUF_MSGS__SYSTEM_MANAGER_MESSAGE__INIT;
  *message = init_value;
}
size_t protobuf_msgs__system_manager_message__get_packed_size
                     (const ProtobufMsgs__SystemManagerMessage *message)
{
  assert(message->base.descriptor == &protobuf_msgs__system_manager_message__descriptor);
  return protobuf_c_message_get_packed_size ((const ProtobufCMessage*)(message));
}
size_t protobuf_msgs__system_manager_message__pack
                     (const ProtobufMsgs__SystemManagerMessage *message,
                      uint8_t       *out)
{
  assert(message->base.descriptor == &protobuf_msgs__system_manager_message__descriptor);
  return protobuf_c_message_pack ((const ProtobufCMessage*)message, out);
}
size_t protobuf_msgs__system_manager_message__pack_to_buffer
                     (const ProtobufMsgs__SystemManagerMessage *message,
                      ProtobufCBuffer *buffer)
{
  assert(message->base.descriptor == &protobuf_msgs__system_manager_message__descriptor);
  return protobuf_c_message_pack_to_buffer ((const ProtobufCMessage*)message, buffer);
}
ProtobufMsgs__SystemManagerMessage *
       protobuf_msgs__system_manager_message__unpack
                     (ProtobufCAllocator  *allocator,
                      size_t               len,
                      const uint8_t       *data)
{
  return (ProtobufMsgs__SystemManagerMessage *)
     protobuf_c_message_unpack (&protobuf_msgs__system_manager_message__descriptor,
                                allocator, len, data);
}
void   protobuf_msgs__system_manager_message__free_unpacked
                     (ProtobufMsgs__SystemManagerMessage *message,
                      ProtobufCAllocator *allocator)
{
  if(!message)
    return;
  assert(message->base.descriptor == &protobuf_msgs__system_manager_message__descriptor);
  protobuf_c_message_free_unpacked ((ProtobufCMessage*)message, allocator);
}
static const ProtobufCFieldDescriptor protobuf_msgs__system_manager_message__field_descriptors[9] =
{
  {
    "service",
    1,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_MESSAGE,
    offsetof(ProtobufMsgs__SystemManagerMessage, msg_case),
    offsetof(ProtobufMsgs__SystemManagerMessage, service),
    &protobuf_msgs__service__descriptor,
    NULL,
    0 | PROTOBUF_C_FIELD_FLAG_ONEOF,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "serviceStatus",
    3,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_ENUM,
    offsetof(ProtobufMsgs__SystemManagerMessage, msg_case),
    offsetof(ProtobufMsgs__SystemManagerMessage, servicestatus),
    &protobuf_msgs__service_status__descriptor,
    NULL,
    0 | PROTOBUF_C_FIELD_FLAG_ONEOF,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "serviceOrder",
    4,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_MESSAGE,
    offsetof(ProtobufMsgs__SystemManagerMessage, msg_case),
    offsetof(ProtobufMsgs__SystemManagerMessage, serviceorder),
    &protobuf_msgs__service_order__descriptor,
    NULL,
    0 | PROTOBUF_C_FIELD_FLAG_ONEOF,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "tuningState",
    5,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_MESSAGE,
    offsetof(ProtobufMsgs__SystemManagerMessage, msg_case),
    offsetof(ProtobufMsgs__SystemManagerMessage, tuningstate),
    &protobuf_msgs__tuning_state__descriptor,
    NULL,
    0 | PROTOBUF_C_FIELD_FLAG_ONEOF,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "tuningStateRequest",
    6,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_MESSAGE,
    offsetof(ProtobufMsgs__SystemManagerMessage, msg_case),
    offsetof(ProtobufMsgs__SystemManagerMessage, tuningstaterequest),
    &protobuf_msgs__tuning_state_request__descriptor,
    NULL,
    0 | PROTOBUF_C_FIELD_FLAG_ONEOF,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "serviceListRequest",
    7,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_MESSAGE,
    offsetof(ProtobufMsgs__SystemManagerMessage, msg_case),
    offsetof(ProtobufMsgs__SystemManagerMessage, servicelistrequest),
    &protobuf_msgs__service_list_request__descriptor,
    NULL,
    0 | PROTOBUF_C_FIELD_FLAG_ONEOF,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "serviceList",
    8,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_MESSAGE,
    offsetof(ProtobufMsgs__SystemManagerMessage, msg_case),
    offsetof(ProtobufMsgs__SystemManagerMessage, servicelist),
    &protobuf_msgs__service_list__descriptor,
    NULL,
    0 | PROTOBUF_C_FIELD_FLAG_ONEOF,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "serviceStatusUpdate",
    9,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_MESSAGE,
    offsetof(ProtobufMsgs__SystemManagerMessage, msg_case),
    offsetof(ProtobufMsgs__SystemManagerMessage, servicestatusupdate),
    &protobuf_msgs__service_status_update__descriptor,
    NULL,
    0 | PROTOBUF_C_FIELD_FLAG_ONEOF,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "serviceInformationRequest",
    10,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_MESSAGE,
    offsetof(ProtobufMsgs__SystemManagerMessage, msg_case),
    offsetof(ProtobufMsgs__SystemManagerMessage, serviceinformationrequest),
    &protobuf_msgs__service_information_request__descriptor,
    NULL,
    0 | PROTOBUF_C_FIELD_FLAG_ONEOF,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
};
static const unsigned protobuf_msgs__system_manager_message__field_indices_by_name[] = {
  0,   /* field[0] = service */
  8,   /* field[8] = serviceInformationRequest */
  6,   /* field[6] = serviceList */
  5,   /* field[5] = serviceListRequest */
  2,   /* field[2] = serviceOrder */
  1,   /* field[1] = serviceStatus */
  7,   /* field[7] = serviceStatusUpdate */
  3,   /* field[3] = tuningState */
  4,   /* field[4] = tuningStateRequest */
};
static const ProtobufCIntRange protobuf_msgs__system_manager_message__number_ranges[2 + 1] =
{
  { 1, 0 },
  { 3, 1 },
  { 0, 9 }
};
const ProtobufCMessageDescriptor protobuf_msgs__system_manager_message__descriptor =
{
  PROTOBUF_C__MESSAGE_DESCRIPTOR_MAGIC,
  "protobuf_msgs.SystemManagerMessage",
  "SystemManagerMessage",
  "ProtobufMsgs__SystemManagerMessage",
  "protobuf_msgs",
  sizeof(ProtobufMsgs__SystemManagerMessage),
  9,
  protobuf_msgs__system_manager_message__field_descriptors,
  protobuf_msgs__system_manager_message__field_indices_by_name,
  2,  protobuf_msgs__system_manager_message__number_ranges,
  (ProtobufCMessageInit) protobuf_msgs__system_manager_message__init,
  NULL,NULL,NULL    /* reserved[123] */
};
