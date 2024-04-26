/* Generated by the protocol buffer compiler.  DO NOT EDIT! */
/* Generated from: remoteconfig.proto */

/* Do not generate deprecated warnings for self */
#ifndef PROTOBUF_C__NO_DEPRECATED
#define PROTOBUF_C__NO_DEPRECATED
#endif

#include "remoteconfig.pb-c.h"
void   protobuf_msgs__config_message__human_control_request__init
                     (ProtobufMsgs__ConfigMessage__HumanControlRequest         *message)
{
  static const ProtobufMsgs__ConfigMessage__HumanControlRequest init_value = PROTOBUF_MSGS__CONFIG_MESSAGE__HUMAN_CONTROL_REQUEST__INIT;
  *message = init_value;
}
void   protobuf_msgs__config_message__human_control_state__init
                     (ProtobufMsgs__ConfigMessage__HumanControlState         *message)
{
  static const ProtobufMsgs__ConfigMessage__HumanControlState init_value = PROTOBUF_MSGS__CONFIG_MESSAGE__HUMAN_CONTROL_STATE__INIT;
  *message = init_value;
}
void   protobuf_msgs__config_message__car_state__init
                     (ProtobufMsgs__ConfigMessage__CarState         *message)
{
  static const ProtobufMsgs__ConfigMessage__CarState init_value = PROTOBUF_MSGS__CONFIG_MESSAGE__CAR_STATE__INIT;
  *message = init_value;
}
void   protobuf_msgs__config_message__error__init
                     (ProtobufMsgs__ConfigMessage__Error         *message)
{
  static const ProtobufMsgs__ConfigMessage__Error init_value = PROTOBUF_MSGS__CONFIG_MESSAGE__ERROR__INIT;
  *message = init_value;
}
void   protobuf_msgs__config_message__init
                     (ProtobufMsgs__ConfigMessage         *message)
{
  static const ProtobufMsgs__ConfigMessage init_value = PROTOBUF_MSGS__CONFIG_MESSAGE__INIT;
  *message = init_value;
}
size_t protobuf_msgs__config_message__get_packed_size
                     (const ProtobufMsgs__ConfigMessage *message)
{
  assert(message->base.descriptor == &protobuf_msgs__config_message__descriptor);
  return protobuf_c_message_get_packed_size ((const ProtobufCMessage*)(message));
}
size_t protobuf_msgs__config_message__pack
                     (const ProtobufMsgs__ConfigMessage *message,
                      uint8_t       *out)
{
  assert(message->base.descriptor == &protobuf_msgs__config_message__descriptor);
  return protobuf_c_message_pack ((const ProtobufCMessage*)message, out);
}
size_t protobuf_msgs__config_message__pack_to_buffer
                     (const ProtobufMsgs__ConfigMessage *message,
                      ProtobufCBuffer *buffer)
{
  assert(message->base.descriptor == &protobuf_msgs__config_message__descriptor);
  return protobuf_c_message_pack_to_buffer ((const ProtobufCMessage*)message, buffer);
}
ProtobufMsgs__ConfigMessage *
       protobuf_msgs__config_message__unpack
                     (ProtobufCAllocator  *allocator,
                      size_t               len,
                      const uint8_t       *data)
{
  return (ProtobufMsgs__ConfigMessage *)
     protobuf_c_message_unpack (&protobuf_msgs__config_message__descriptor,
                                allocator, len, data);
}
void   protobuf_msgs__config_message__free_unpacked
                     (ProtobufMsgs__ConfigMessage *message,
                      ProtobufCAllocator *allocator)
{
  if(!message)
    return;
  assert(message->base.descriptor == &protobuf_msgs__config_message__descriptor);
  protobuf_c_message_free_unpacked ((ProtobufCMessage*)message, allocator);
}
static const ProtobufCFieldDescriptor protobuf_msgs__config_message__human_control_request__field_descriptors[1] =
{
  {
    "type",
    1,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_ENUM,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__ConfigMessage__HumanControlRequest, type),
    &protobuf_msgs__config_message__control_request_type__descriptor,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
};
static const unsigned protobuf_msgs__config_message__human_control_request__field_indices_by_name[] = {
  0,   /* field[0] = type */
};
static const ProtobufCIntRange protobuf_msgs__config_message__human_control_request__number_ranges[1 + 1] =
{
  { 1, 0 },
  { 0, 1 }
};
const ProtobufCMessageDescriptor protobuf_msgs__config_message__human_control_request__descriptor =
{
  PROTOBUF_C__MESSAGE_DESCRIPTOR_MAGIC,
  "protobuf_msgs.ConfigMessage.HumanControlRequest",
  "HumanControlRequest",
  "ProtobufMsgs__ConfigMessage__HumanControlRequest",
  "protobuf_msgs",
  sizeof(ProtobufMsgs__ConfigMessage__HumanControlRequest),
  1,
  protobuf_msgs__config_message__human_control_request__field_descriptors,
  protobuf_msgs__config_message__human_control_request__field_indices_by_name,
  1,  protobuf_msgs__config_message__human_control_request__number_ranges,
  (ProtobufCMessageInit) protobuf_msgs__config_message__human_control_request__init,
  NULL,NULL,NULL    /* reserved[123] */
};
static const ProtobufCFieldDescriptor protobuf_msgs__config_message__human_control_state__field_descriptors[1] =
{
  {
    "activeControllerId",
    1,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_STRING,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__ConfigMessage__HumanControlState, activecontrollerid),
    NULL,
    &protobuf_c_empty_string,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
};
static const unsigned protobuf_msgs__config_message__human_control_state__field_indices_by_name[] = {
  0,   /* field[0] = activeControllerId */
};
static const ProtobufCIntRange protobuf_msgs__config_message__human_control_state__number_ranges[1 + 1] =
{
  { 1, 0 },
  { 0, 1 }
};
const ProtobufCMessageDescriptor protobuf_msgs__config_message__human_control_state__descriptor =
{
  PROTOBUF_C__MESSAGE_DESCRIPTOR_MAGIC,
  "protobuf_msgs.ConfigMessage.HumanControlState",
  "HumanControlState",
  "ProtobufMsgs__ConfigMessage__HumanControlState",
  "protobuf_msgs",
  sizeof(ProtobufMsgs__ConfigMessage__HumanControlState),
  1,
  protobuf_msgs__config_message__human_control_state__field_descriptors,
  protobuf_msgs__config_message__human_control_state__field_indices_by_name,
  1,  protobuf_msgs__config_message__human_control_state__number_ranges,
  (ProtobufCMessageInit) protobuf_msgs__config_message__human_control_state__init,
  NULL,NULL,NULL    /* reserved[123] */
};
static const ProtobufCFieldDescriptor protobuf_msgs__config_message__car_state__field_descriptors[1] =
{
  {
    "connected",
    1,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_BOOL,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__ConfigMessage__CarState, connected),
    NULL,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
};
static const unsigned protobuf_msgs__config_message__car_state__field_indices_by_name[] = {
  0,   /* field[0] = connected */
};
static const ProtobufCIntRange protobuf_msgs__config_message__car_state__number_ranges[1 + 1] =
{
  { 1, 0 },
  { 0, 1 }
};
const ProtobufCMessageDescriptor protobuf_msgs__config_message__car_state__descriptor =
{
  PROTOBUF_C__MESSAGE_DESCRIPTOR_MAGIC,
  "protobuf_msgs.ConfigMessage.CarState",
  "CarState",
  "ProtobufMsgs__ConfigMessage__CarState",
  "protobuf_msgs",
  sizeof(ProtobufMsgs__ConfigMessage__CarState),
  1,
  protobuf_msgs__config_message__car_state__field_descriptors,
  protobuf_msgs__config_message__car_state__field_indices_by_name,
  1,  protobuf_msgs__config_message__car_state__number_ranges,
  (ProtobufCMessageInit) protobuf_msgs__config_message__car_state__init,
  NULL,NULL,NULL    /* reserved[123] */
};
static const ProtobufCFieldDescriptor protobuf_msgs__config_message__error__field_descriptors[1] =
{
  {
    "message",
    1,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_STRING,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__ConfigMessage__Error, message),
    NULL,
    &protobuf_c_empty_string,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
};
static const unsigned protobuf_msgs__config_message__error__field_indices_by_name[] = {
  0,   /* field[0] = message */
};
static const ProtobufCIntRange protobuf_msgs__config_message__error__number_ranges[1 + 1] =
{
  { 1, 0 },
  { 0, 1 }
};
const ProtobufCMessageDescriptor protobuf_msgs__config_message__error__descriptor =
{
  PROTOBUF_C__MESSAGE_DESCRIPTOR_MAGIC,
  "protobuf_msgs.ConfigMessage.Error",
  "Error",
  "ProtobufMsgs__ConfigMessage__Error",
  "protobuf_msgs",
  sizeof(ProtobufMsgs__ConfigMessage__Error),
  1,
  protobuf_msgs__config_message__error__field_descriptors,
  protobuf_msgs__config_message__error__field_indices_by_name,
  1,  protobuf_msgs__config_message__error__number_ranges,
  (ProtobufCMessageInit) protobuf_msgs__config_message__error__init,
  NULL,NULL,NULL    /* reserved[123] */
};
static const ProtobufCEnumValue protobuf_msgs__config_message__control_request_type__enum_values_by_number[2] =
{
  { "HUMAN_CONTROL_TAKEOVER", "PROTOBUF_MSGS__CONFIG_MESSAGE__CONTROL_REQUEST_TYPE__HUMAN_CONTROL_TAKEOVER", 0 },
  { "HUMAN_CONTROL_RELEASE", "PROTOBUF_MSGS__CONFIG_MESSAGE__CONTROL_REQUEST_TYPE__HUMAN_CONTROL_RELEASE", 1 },
};
static const ProtobufCIntRange protobuf_msgs__config_message__control_request_type__value_ranges[] = {
{0, 0},{0, 2}
};
static const ProtobufCEnumValueIndex protobuf_msgs__config_message__control_request_type__enum_values_by_name[2] =
{
  { "HUMAN_CONTROL_RELEASE", 1 },
  { "HUMAN_CONTROL_TAKEOVER", 0 },
};
const ProtobufCEnumDescriptor protobuf_msgs__config_message__control_request_type__descriptor =
{
  PROTOBUF_C__ENUM_DESCRIPTOR_MAGIC,
  "protobuf_msgs.ConfigMessage.ControlRequestType",
  "ControlRequestType",
  "ProtobufMsgs__ConfigMessage__ControlRequestType",
  "protobuf_msgs",
  2,
  protobuf_msgs__config_message__control_request_type__enum_values_by_number,
  2,
  protobuf_msgs__config_message__control_request_type__enum_values_by_name,
  1,
  protobuf_msgs__config_message__control_request_type__value_ranges,
  NULL,NULL,NULL,NULL   /* reserved[1234] */
};
static const ProtobufCFieldDescriptor protobuf_msgs__config_message__field_descriptors[5] =
{
  {
    "humanControlRequest",
    1,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_MESSAGE,
    offsetof(ProtobufMsgs__ConfigMessage, action_case),
    offsetof(ProtobufMsgs__ConfigMessage, humancontrolrequest),
    &protobuf_msgs__config_message__human_control_request__descriptor,
    NULL,
    0 | PROTOBUF_C_FIELD_FLAG_ONEOF,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "timestamp",
    2,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_INT64,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__ConfigMessage, timestamp),
    NULL,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "humanControlState",
    3,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_MESSAGE,
    offsetof(ProtobufMsgs__ConfigMessage, action_case),
    offsetof(ProtobufMsgs__ConfigMessage, humancontrolstate),
    &protobuf_msgs__config_message__human_control_state__descriptor,
    NULL,
    0 | PROTOBUF_C_FIELD_FLAG_ONEOF,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "carState",
    6,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_MESSAGE,
    offsetof(ProtobufMsgs__ConfigMessage, action_case),
    offsetof(ProtobufMsgs__ConfigMessage, carstate),
    &protobuf_msgs__config_message__car_state__descriptor,
    NULL,
    0 | PROTOBUF_C_FIELD_FLAG_ONEOF,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "error",
    7,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_MESSAGE,
    offsetof(ProtobufMsgs__ConfigMessage, action_case),
    offsetof(ProtobufMsgs__ConfigMessage, error),
    &protobuf_msgs__config_message__error__descriptor,
    NULL,
    0 | PROTOBUF_C_FIELD_FLAG_ONEOF,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
};
static const unsigned protobuf_msgs__config_message__field_indices_by_name[] = {
  3,   /* field[3] = carState */
  4,   /* field[4] = error */
  0,   /* field[0] = humanControlRequest */
  2,   /* field[2] = humanControlState */
  1,   /* field[1] = timestamp */
};
static const ProtobufCIntRange protobuf_msgs__config_message__number_ranges[2 + 1] =
{
  { 1, 0 },
  { 6, 3 },
  { 0, 5 }
};
const ProtobufCMessageDescriptor protobuf_msgs__config_message__descriptor =
{
  PROTOBUF_C__MESSAGE_DESCRIPTOR_MAGIC,
  "protobuf_msgs.ConfigMessage",
  "ConfigMessage",
  "ProtobufMsgs__ConfigMessage",
  "protobuf_msgs",
  sizeof(ProtobufMsgs__ConfigMessage),
  5,
  protobuf_msgs__config_message__field_descriptors,
  protobuf_msgs__config_message__field_indices_by_name,
  2,  protobuf_msgs__config_message__number_ranges,
  (ProtobufCMessageInit) protobuf_msgs__config_message__init,
  NULL,NULL,NULL    /* reserved[123] */
};
