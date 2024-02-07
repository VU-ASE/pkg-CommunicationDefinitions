/* Generated by the protocol buffer compiler.  DO NOT EDIT! */
/* Generated from: systemmanager/servicediscovery.proto */

/* Do not generate deprecated warnings for self */
#ifndef PROTOBUF_C__NO_DEPRECATED
#define PROTOBUF_C__NO_DEPRECATED
#endif

#include "systemmanager/servicediscovery.pb-c.h"
void   protobuf_msgs__service_identifier__init
                     (ProtobufMsgs__ServiceIdentifier         *message)
{
  static const ProtobufMsgs__ServiceIdentifier init_value = PROTOBUF_MSGS__SERVICE_IDENTIFIER__INIT;
  *message = init_value;
}
size_t protobuf_msgs__service_identifier__get_packed_size
                     (const ProtobufMsgs__ServiceIdentifier *message)
{
  assert(message->base.descriptor == &protobuf_msgs__service_identifier__descriptor);
  return protobuf_c_message_get_packed_size ((const ProtobufCMessage*)(message));
}
size_t protobuf_msgs__service_identifier__pack
                     (const ProtobufMsgs__ServiceIdentifier *message,
                      uint8_t       *out)
{
  assert(message->base.descriptor == &protobuf_msgs__service_identifier__descriptor);
  return protobuf_c_message_pack ((const ProtobufCMessage*)message, out);
}
size_t protobuf_msgs__service_identifier__pack_to_buffer
                     (const ProtobufMsgs__ServiceIdentifier *message,
                      ProtobufCBuffer *buffer)
{
  assert(message->base.descriptor == &protobuf_msgs__service_identifier__descriptor);
  return protobuf_c_message_pack_to_buffer ((const ProtobufCMessage*)message, buffer);
}
ProtobufMsgs__ServiceIdentifier *
       protobuf_msgs__service_identifier__unpack
                     (ProtobufCAllocator  *allocator,
                      size_t               len,
                      const uint8_t       *data)
{
  return (ProtobufMsgs__ServiceIdentifier *)
     protobuf_c_message_unpack (&protobuf_msgs__service_identifier__descriptor,
                                allocator, len, data);
}
void   protobuf_msgs__service_identifier__free_unpacked
                     (ProtobufMsgs__ServiceIdentifier *message,
                      ProtobufCAllocator *allocator)
{
  if(!message)
    return;
  assert(message->base.descriptor == &protobuf_msgs__service_identifier__descriptor);
  protobuf_c_message_free_unpacked ((ProtobufCMessage*)message, allocator);
}
void   protobuf_msgs__service_endpoint__init
                     (ProtobufMsgs__ServiceEndpoint         *message)
{
  static const ProtobufMsgs__ServiceEndpoint init_value = PROTOBUF_MSGS__SERVICE_ENDPOINT__INIT;
  *message = init_value;
}
size_t protobuf_msgs__service_endpoint__get_packed_size
                     (const ProtobufMsgs__ServiceEndpoint *message)
{
  assert(message->base.descriptor == &protobuf_msgs__service_endpoint__descriptor);
  return protobuf_c_message_get_packed_size ((const ProtobufCMessage*)(message));
}
size_t protobuf_msgs__service_endpoint__pack
                     (const ProtobufMsgs__ServiceEndpoint *message,
                      uint8_t       *out)
{
  assert(message->base.descriptor == &protobuf_msgs__service_endpoint__descriptor);
  return protobuf_c_message_pack ((const ProtobufCMessage*)message, out);
}
size_t protobuf_msgs__service_endpoint__pack_to_buffer
                     (const ProtobufMsgs__ServiceEndpoint *message,
                      ProtobufCBuffer *buffer)
{
  assert(message->base.descriptor == &protobuf_msgs__service_endpoint__descriptor);
  return protobuf_c_message_pack_to_buffer ((const ProtobufCMessage*)message, buffer);
}
ProtobufMsgs__ServiceEndpoint *
       protobuf_msgs__service_endpoint__unpack
                     (ProtobufCAllocator  *allocator,
                      size_t               len,
                      const uint8_t       *data)
{
  return (ProtobufMsgs__ServiceEndpoint *)
     protobuf_c_message_unpack (&protobuf_msgs__service_endpoint__descriptor,
                                allocator, len, data);
}
void   protobuf_msgs__service_endpoint__free_unpacked
                     (ProtobufMsgs__ServiceEndpoint *message,
                      ProtobufCAllocator *allocator)
{
  if(!message)
    return;
  assert(message->base.descriptor == &protobuf_msgs__service_endpoint__descriptor);
  protobuf_c_message_free_unpacked ((ProtobufCMessage*)message, allocator);
}
void   protobuf_msgs__service_option__init
                     (ProtobufMsgs__ServiceOption         *message)
{
  static const ProtobufMsgs__ServiceOption init_value = PROTOBUF_MSGS__SERVICE_OPTION__INIT;
  *message = init_value;
}
size_t protobuf_msgs__service_option__get_packed_size
                     (const ProtobufMsgs__ServiceOption *message)
{
  assert(message->base.descriptor == &protobuf_msgs__service_option__descriptor);
  return protobuf_c_message_get_packed_size ((const ProtobufCMessage*)(message));
}
size_t protobuf_msgs__service_option__pack
                     (const ProtobufMsgs__ServiceOption *message,
                      uint8_t       *out)
{
  assert(message->base.descriptor == &protobuf_msgs__service_option__descriptor);
  return protobuf_c_message_pack ((const ProtobufCMessage*)message, out);
}
size_t protobuf_msgs__service_option__pack_to_buffer
                     (const ProtobufMsgs__ServiceOption *message,
                      ProtobufCBuffer *buffer)
{
  assert(message->base.descriptor == &protobuf_msgs__service_option__descriptor);
  return protobuf_c_message_pack_to_buffer ((const ProtobufCMessage*)message, buffer);
}
ProtobufMsgs__ServiceOption *
       protobuf_msgs__service_option__unpack
                     (ProtobufCAllocator  *allocator,
                      size_t               len,
                      const uint8_t       *data)
{
  return (ProtobufMsgs__ServiceOption *)
     protobuf_c_message_unpack (&protobuf_msgs__service_option__descriptor,
                                allocator, len, data);
}
void   protobuf_msgs__service_option__free_unpacked
                     (ProtobufMsgs__ServiceOption *message,
                      ProtobufCAllocator *allocator)
{
  if(!message)
    return;
  assert(message->base.descriptor == &protobuf_msgs__service_option__descriptor);
  protobuf_c_message_free_unpacked ((ProtobufCMessage*)message, allocator);
}
void   protobuf_msgs__service__init
                     (ProtobufMsgs__Service         *message)
{
  static const ProtobufMsgs__Service init_value = PROTOBUF_MSGS__SERVICE__INIT;
  *message = init_value;
}
size_t protobuf_msgs__service__get_packed_size
                     (const ProtobufMsgs__Service *message)
{
  assert(message->base.descriptor == &protobuf_msgs__service__descriptor);
  return protobuf_c_message_get_packed_size ((const ProtobufCMessage*)(message));
}
size_t protobuf_msgs__service__pack
                     (const ProtobufMsgs__Service *message,
                      uint8_t       *out)
{
  assert(message->base.descriptor == &protobuf_msgs__service__descriptor);
  return protobuf_c_message_pack ((const ProtobufCMessage*)message, out);
}
size_t protobuf_msgs__service__pack_to_buffer
                     (const ProtobufMsgs__Service *message,
                      ProtobufCBuffer *buffer)
{
  assert(message->base.descriptor == &protobuf_msgs__service__descriptor);
  return protobuf_c_message_pack_to_buffer ((const ProtobufCMessage*)message, buffer);
}
ProtobufMsgs__Service *
       protobuf_msgs__service__unpack
                     (ProtobufCAllocator  *allocator,
                      size_t               len,
                      const uint8_t       *data)
{
  return (ProtobufMsgs__Service *)
     protobuf_c_message_unpack (&protobuf_msgs__service__descriptor,
                                allocator, len, data);
}
void   protobuf_msgs__service__free_unpacked
                     (ProtobufMsgs__Service *message,
                      ProtobufCAllocator *allocator)
{
  if(!message)
    return;
  assert(message->base.descriptor == &protobuf_msgs__service__descriptor);
  protobuf_c_message_free_unpacked ((ProtobufCMessage*)message, allocator);
}
void   protobuf_msgs__service_information_request__init
                     (ProtobufMsgs__ServiceInformationRequest         *message)
{
  static const ProtobufMsgs__ServiceInformationRequest init_value = PROTOBUF_MSGS__SERVICE_INFORMATION_REQUEST__INIT;
  *message = init_value;
}
size_t protobuf_msgs__service_information_request__get_packed_size
                     (const ProtobufMsgs__ServiceInformationRequest *message)
{
  assert(message->base.descriptor == &protobuf_msgs__service_information_request__descriptor);
  return protobuf_c_message_get_packed_size ((const ProtobufCMessage*)(message));
}
size_t protobuf_msgs__service_information_request__pack
                     (const ProtobufMsgs__ServiceInformationRequest *message,
                      uint8_t       *out)
{
  assert(message->base.descriptor == &protobuf_msgs__service_information_request__descriptor);
  return protobuf_c_message_pack ((const ProtobufCMessage*)message, out);
}
size_t protobuf_msgs__service_information_request__pack_to_buffer
                     (const ProtobufMsgs__ServiceInformationRequest *message,
                      ProtobufCBuffer *buffer)
{
  assert(message->base.descriptor == &protobuf_msgs__service_information_request__descriptor);
  return protobuf_c_message_pack_to_buffer ((const ProtobufCMessage*)message, buffer);
}
ProtobufMsgs__ServiceInformationRequest *
       protobuf_msgs__service_information_request__unpack
                     (ProtobufCAllocator  *allocator,
                      size_t               len,
                      const uint8_t       *data)
{
  return (ProtobufMsgs__ServiceInformationRequest *)
     protobuf_c_message_unpack (&protobuf_msgs__service_information_request__descriptor,
                                allocator, len, data);
}
void   protobuf_msgs__service_information_request__free_unpacked
                     (ProtobufMsgs__ServiceInformationRequest *message,
                      ProtobufCAllocator *allocator)
{
  if(!message)
    return;
  assert(message->base.descriptor == &protobuf_msgs__service_information_request__descriptor);
  protobuf_c_message_free_unpacked ((ProtobufCMessage*)message, allocator);
}
void   protobuf_msgs__service_status__init
                     (ProtobufMsgs__ServiceStatus         *message)
{
  static const ProtobufMsgs__ServiceStatus init_value = PROTOBUF_MSGS__SERVICE_STATUS__INIT;
  *message = init_value;
}
size_t protobuf_msgs__service_status__get_packed_size
                     (const ProtobufMsgs__ServiceStatus *message)
{
  assert(message->base.descriptor == &protobuf_msgs__service_status__descriptor);
  return protobuf_c_message_get_packed_size ((const ProtobufCMessage*)(message));
}
size_t protobuf_msgs__service_status__pack
                     (const ProtobufMsgs__ServiceStatus *message,
                      uint8_t       *out)
{
  assert(message->base.descriptor == &protobuf_msgs__service_status__descriptor);
  return protobuf_c_message_pack ((const ProtobufCMessage*)message, out);
}
size_t protobuf_msgs__service_status__pack_to_buffer
                     (const ProtobufMsgs__ServiceStatus *message,
                      ProtobufCBuffer *buffer)
{
  assert(message->base.descriptor == &protobuf_msgs__service_status__descriptor);
  return protobuf_c_message_pack_to_buffer ((const ProtobufCMessage*)message, buffer);
}
ProtobufMsgs__ServiceStatus *
       protobuf_msgs__service_status__unpack
                     (ProtobufCAllocator  *allocator,
                      size_t               len,
                      const uint8_t       *data)
{
  return (ProtobufMsgs__ServiceStatus *)
     protobuf_c_message_unpack (&protobuf_msgs__service_status__descriptor,
                                allocator, len, data);
}
void   protobuf_msgs__service_status__free_unpacked
                     (ProtobufMsgs__ServiceStatus *message,
                      ProtobufCAllocator *allocator)
{
  if(!message)
    return;
  assert(message->base.descriptor == &protobuf_msgs__service_status__descriptor);
  protobuf_c_message_free_unpacked ((ProtobufCMessage*)message, allocator);
}
void   protobuf_msgs__service_order__init
                     (ProtobufMsgs__ServiceOrder         *message)
{
  static const ProtobufMsgs__ServiceOrder init_value = PROTOBUF_MSGS__SERVICE_ORDER__INIT;
  *message = init_value;
}
size_t protobuf_msgs__service_order__get_packed_size
                     (const ProtobufMsgs__ServiceOrder *message)
{
  assert(message->base.descriptor == &protobuf_msgs__service_order__descriptor);
  return protobuf_c_message_get_packed_size ((const ProtobufCMessage*)(message));
}
size_t protobuf_msgs__service_order__pack
                     (const ProtobufMsgs__ServiceOrder *message,
                      uint8_t       *out)
{
  assert(message->base.descriptor == &protobuf_msgs__service_order__descriptor);
  return protobuf_c_message_pack ((const ProtobufCMessage*)message, out);
}
size_t protobuf_msgs__service_order__pack_to_buffer
                     (const ProtobufMsgs__ServiceOrder *message,
                      ProtobufCBuffer *buffer)
{
  assert(message->base.descriptor == &protobuf_msgs__service_order__descriptor);
  return protobuf_c_message_pack_to_buffer ((const ProtobufCMessage*)message, buffer);
}
ProtobufMsgs__ServiceOrder *
       protobuf_msgs__service_order__unpack
                     (ProtobufCAllocator  *allocator,
                      size_t               len,
                      const uint8_t       *data)
{
  return (ProtobufMsgs__ServiceOrder *)
     protobuf_c_message_unpack (&protobuf_msgs__service_order__descriptor,
                                allocator, len, data);
}
void   protobuf_msgs__service_order__free_unpacked
                     (ProtobufMsgs__ServiceOrder *message,
                      ProtobufCAllocator *allocator)
{
  if(!message)
    return;
  assert(message->base.descriptor == &protobuf_msgs__service_order__descriptor);
  protobuf_c_message_free_unpacked ((ProtobufCMessage*)message, allocator);
}
void   protobuf_msgs__service_list_request__init
                     (ProtobufMsgs__ServiceListRequest         *message)
{
  static const ProtobufMsgs__ServiceListRequest init_value = PROTOBUF_MSGS__SERVICE_LIST_REQUEST__INIT;
  *message = init_value;
}
size_t protobuf_msgs__service_list_request__get_packed_size
                     (const ProtobufMsgs__ServiceListRequest *message)
{
  assert(message->base.descriptor == &protobuf_msgs__service_list_request__descriptor);
  return protobuf_c_message_get_packed_size ((const ProtobufCMessage*)(message));
}
size_t protobuf_msgs__service_list_request__pack
                     (const ProtobufMsgs__ServiceListRequest *message,
                      uint8_t       *out)
{
  assert(message->base.descriptor == &protobuf_msgs__service_list_request__descriptor);
  return protobuf_c_message_pack ((const ProtobufCMessage*)message, out);
}
size_t protobuf_msgs__service_list_request__pack_to_buffer
                     (const ProtobufMsgs__ServiceListRequest *message,
                      ProtobufCBuffer *buffer)
{
  assert(message->base.descriptor == &protobuf_msgs__service_list_request__descriptor);
  return protobuf_c_message_pack_to_buffer ((const ProtobufCMessage*)message, buffer);
}
ProtobufMsgs__ServiceListRequest *
       protobuf_msgs__service_list_request__unpack
                     (ProtobufCAllocator  *allocator,
                      size_t               len,
                      const uint8_t       *data)
{
  return (ProtobufMsgs__ServiceListRequest *)
     protobuf_c_message_unpack (&protobuf_msgs__service_list_request__descriptor,
                                allocator, len, data);
}
void   protobuf_msgs__service_list_request__free_unpacked
                     (ProtobufMsgs__ServiceListRequest *message,
                      ProtobufCAllocator *allocator)
{
  if(!message)
    return;
  assert(message->base.descriptor == &protobuf_msgs__service_list_request__descriptor);
  protobuf_c_message_free_unpacked ((ProtobufCMessage*)message, allocator);
}
void   protobuf_msgs__service_list__init
                     (ProtobufMsgs__ServiceList         *message)
{
  static const ProtobufMsgs__ServiceList init_value = PROTOBUF_MSGS__SERVICE_LIST__INIT;
  *message = init_value;
}
size_t protobuf_msgs__service_list__get_packed_size
                     (const ProtobufMsgs__ServiceList *message)
{
  assert(message->base.descriptor == &protobuf_msgs__service_list__descriptor);
  return protobuf_c_message_get_packed_size ((const ProtobufCMessage*)(message));
}
size_t protobuf_msgs__service_list__pack
                     (const ProtobufMsgs__ServiceList *message,
                      uint8_t       *out)
{
  assert(message->base.descriptor == &protobuf_msgs__service_list__descriptor);
  return protobuf_c_message_pack ((const ProtobufCMessage*)message, out);
}
size_t protobuf_msgs__service_list__pack_to_buffer
                     (const ProtobufMsgs__ServiceList *message,
                      ProtobufCBuffer *buffer)
{
  assert(message->base.descriptor == &protobuf_msgs__service_list__descriptor);
  return protobuf_c_message_pack_to_buffer ((const ProtobufCMessage*)message, buffer);
}
ProtobufMsgs__ServiceList *
       protobuf_msgs__service_list__unpack
                     (ProtobufCAllocator  *allocator,
                      size_t               len,
                      const uint8_t       *data)
{
  return (ProtobufMsgs__ServiceList *)
     protobuf_c_message_unpack (&protobuf_msgs__service_list__descriptor,
                                allocator, len, data);
}
void   protobuf_msgs__service_list__free_unpacked
                     (ProtobufMsgs__ServiceList *message,
                      ProtobufCAllocator *allocator)
{
  if(!message)
    return;
  assert(message->base.descriptor == &protobuf_msgs__service_list__descriptor);
  protobuf_c_message_free_unpacked ((ProtobufCMessage*)message, allocator);
}
static const ProtobufCFieldDescriptor protobuf_msgs__service_identifier__field_descriptors[2] =
{
  {
    "name",
    1,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_STRING,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__ServiceIdentifier, name),
    NULL,
    &protobuf_c_empty_string,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "pid",
    2,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_INT32,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__ServiceIdentifier, pid),
    NULL,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
};
static const unsigned protobuf_msgs__service_identifier__field_indices_by_name[] = {
  0,   /* field[0] = name */
  1,   /* field[1] = pid */
};
static const ProtobufCIntRange protobuf_msgs__service_identifier__number_ranges[1 + 1] =
{
  { 1, 0 },
  { 0, 2 }
};
const ProtobufCMessageDescriptor protobuf_msgs__service_identifier__descriptor =
{
  PROTOBUF_C__MESSAGE_DESCRIPTOR_MAGIC,
  "protobuf_msgs.ServiceIdentifier",
  "ServiceIdentifier",
  "ProtobufMsgs__ServiceIdentifier",
  "protobuf_msgs",
  sizeof(ProtobufMsgs__ServiceIdentifier),
  2,
  protobuf_msgs__service_identifier__field_descriptors,
  protobuf_msgs__service_identifier__field_indices_by_name,
  1,  protobuf_msgs__service_identifier__number_ranges,
  (ProtobufCMessageInit) protobuf_msgs__service_identifier__init,
  NULL,NULL,NULL    /* reserved[123] */
};
static const ProtobufCFieldDescriptor protobuf_msgs__service_endpoint__field_descriptors[2] =
{
  {
    "name",
    1,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_STRING,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__ServiceEndpoint, name),
    NULL,
    &protobuf_c_empty_string,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "address",
    2,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_STRING,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__ServiceEndpoint, address),
    NULL,
    &protobuf_c_empty_string,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
};
static const unsigned protobuf_msgs__service_endpoint__field_indices_by_name[] = {
  1,   /* field[1] = address */
  0,   /* field[0] = name */
};
static const ProtobufCIntRange protobuf_msgs__service_endpoint__number_ranges[1 + 1] =
{
  { 1, 0 },
  { 0, 2 }
};
const ProtobufCMessageDescriptor protobuf_msgs__service_endpoint__descriptor =
{
  PROTOBUF_C__MESSAGE_DESCRIPTOR_MAGIC,
  "protobuf_msgs.ServiceEndpoint",
  "ServiceEndpoint",
  "ProtobufMsgs__ServiceEndpoint",
  "protobuf_msgs",
  sizeof(ProtobufMsgs__ServiceEndpoint),
  2,
  protobuf_msgs__service_endpoint__field_descriptors,
  protobuf_msgs__service_endpoint__field_indices_by_name,
  1,  protobuf_msgs__service_endpoint__number_ranges,
  (ProtobufCMessageInit) protobuf_msgs__service_endpoint__init,
  NULL,NULL,NULL    /* reserved[123] */
};
static const ProtobufCEnumValue protobuf_msgs__service_option__type__enum_values_by_number[3] =
{
  { "STRING", "PROTOBUF_MSGS__SERVICE_OPTION__TYPE__STRING", 0 },
  { "INT", "PROTOBUF_MSGS__SERVICE_OPTION__TYPE__INT", 1 },
  { "FLOAT", "PROTOBUF_MSGS__SERVICE_OPTION__TYPE__FLOAT", 2 },
};
static const ProtobufCIntRange protobuf_msgs__service_option__type__value_ranges[] = {
{0, 0},{0, 3}
};
static const ProtobufCEnumValueIndex protobuf_msgs__service_option__type__enum_values_by_name[3] =
{
  { "FLOAT", 2 },
  { "INT", 1 },
  { "STRING", 0 },
};
const ProtobufCEnumDescriptor protobuf_msgs__service_option__type__descriptor =
{
  PROTOBUF_C__ENUM_DESCRIPTOR_MAGIC,
  "protobuf_msgs.ServiceOption.Type",
  "Type",
  "ProtobufMsgs__ServiceOption__Type",
  "protobuf_msgs",
  3,
  protobuf_msgs__service_option__type__enum_values_by_number,
  3,
  protobuf_msgs__service_option__type__enum_values_by_name,
  1,
  protobuf_msgs__service_option__type__value_ranges,
  NULL,NULL,NULL,NULL   /* reserved[1234] */
};
static const ProtobufCFieldDescriptor protobuf_msgs__service_option__field_descriptors[6] =
{
  {
    "name",
    1,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_STRING,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__ServiceOption, name),
    NULL,
    &protobuf_c_empty_string,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "type",
    2,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_ENUM,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__ServiceOption, type),
    &protobuf_msgs__service_option__type__descriptor,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "mutable",
    3,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_BOOL,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__ServiceOption, mutable_),
    NULL,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "string_default",
    4,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_STRING,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__ServiceOption, string_default),
    NULL,
    &protobuf_c_empty_string,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "int_default",
    5,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_INT32,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__ServiceOption, int_default),
    NULL,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "float_default",
    6,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_FLOAT,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__ServiceOption, float_default),
    NULL,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
};
static const unsigned protobuf_msgs__service_option__field_indices_by_name[] = {
  5,   /* field[5] = float_default */
  4,   /* field[4] = int_default */
  2,   /* field[2] = mutable */
  0,   /* field[0] = name */
  3,   /* field[3] = string_default */
  1,   /* field[1] = type */
};
static const ProtobufCIntRange protobuf_msgs__service_option__number_ranges[1 + 1] =
{
  { 1, 0 },
  { 0, 6 }
};
const ProtobufCMessageDescriptor protobuf_msgs__service_option__descriptor =
{
  PROTOBUF_C__MESSAGE_DESCRIPTOR_MAGIC,
  "protobuf_msgs.ServiceOption",
  "ServiceOption",
  "ProtobufMsgs__ServiceOption",
  "protobuf_msgs",
  sizeof(ProtobufMsgs__ServiceOption),
  6,
  protobuf_msgs__service_option__field_descriptors,
  protobuf_msgs__service_option__field_indices_by_name,
  1,  protobuf_msgs__service_option__number_ranges,
  (ProtobufCMessageInit) protobuf_msgs__service_option__init,
  NULL,NULL,NULL    /* reserved[123] */
};
static const ProtobufCFieldDescriptor protobuf_msgs__service__field_descriptors[3] =
{
  {
    "identifier",
    1,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_MESSAGE,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__Service, identifier),
    &protobuf_msgs__service_identifier__descriptor,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "endpoints",
    2,
    PROTOBUF_C_LABEL_REPEATED,
    PROTOBUF_C_TYPE_MESSAGE,
    offsetof(ProtobufMsgs__Service, n_endpoints),
    offsetof(ProtobufMsgs__Service, endpoints),
    &protobuf_msgs__service_endpoint__descriptor,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "options",
    3,
    PROTOBUF_C_LABEL_REPEATED,
    PROTOBUF_C_TYPE_MESSAGE,
    offsetof(ProtobufMsgs__Service, n_options),
    offsetof(ProtobufMsgs__Service, options),
    &protobuf_msgs__service_option__descriptor,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
};
static const unsigned protobuf_msgs__service__field_indices_by_name[] = {
  1,   /* field[1] = endpoints */
  0,   /* field[0] = identifier */
  2,   /* field[2] = options */
};
static const ProtobufCIntRange protobuf_msgs__service__number_ranges[1 + 1] =
{
  { 1, 0 },
  { 0, 3 }
};
const ProtobufCMessageDescriptor protobuf_msgs__service__descriptor =
{
  PROTOBUF_C__MESSAGE_DESCRIPTOR_MAGIC,
  "protobuf_msgs.Service",
  "Service",
  "ProtobufMsgs__Service",
  "protobuf_msgs",
  sizeof(ProtobufMsgs__Service),
  3,
  protobuf_msgs__service__field_descriptors,
  protobuf_msgs__service__field_indices_by_name,
  1,  protobuf_msgs__service__number_ranges,
  (ProtobufCMessageInit) protobuf_msgs__service__init,
  NULL,NULL,NULL    /* reserved[123] */
};
static const ProtobufCFieldDescriptor protobuf_msgs__service_information_request__field_descriptors[1] =
{
  {
    "requested",
    1,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_MESSAGE,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__ServiceInformationRequest, requested),
    &protobuf_msgs__service_identifier__descriptor,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
};
static const unsigned protobuf_msgs__service_information_request__field_indices_by_name[] = {
  0,   /* field[0] = requested */
};
static const ProtobufCIntRange protobuf_msgs__service_information_request__number_ranges[1 + 1] =
{
  { 1, 0 },
  { 0, 1 }
};
const ProtobufCMessageDescriptor protobuf_msgs__service_information_request__descriptor =
{
  PROTOBUF_C__MESSAGE_DESCRIPTOR_MAGIC,
  "protobuf_msgs.ServiceInformationRequest",
  "ServiceInformationRequest",
  "ProtobufMsgs__ServiceInformationRequest",
  "protobuf_msgs",
  sizeof(ProtobufMsgs__ServiceInformationRequest),
  1,
  protobuf_msgs__service_information_request__field_descriptors,
  protobuf_msgs__service_information_request__field_indices_by_name,
  1,  protobuf_msgs__service_information_request__number_ranges,
  (ProtobufCMessageInit) protobuf_msgs__service_information_request__init,
  NULL,NULL,NULL    /* reserved[123] */
};
static const ProtobufCEnumValue protobuf_msgs__service_status__status__enum_values_by_number[4] =
{
  { "UNKNOWN", "PROTOBUF_MSGS__SERVICE_STATUS__STATUS__UNKNOWN", 0 },
  { "RUNNING", "PROTOBUF_MSGS__SERVICE_STATUS__STATUS__RUNNING", 1 },
  { "STOPPED", "PROTOBUF_MSGS__SERVICE_STATUS__STATUS__STOPPED", 2 },
  { "NOT_REGISTERED", "PROTOBUF_MSGS__SERVICE_STATUS__STATUS__NOT_REGISTERED", 3 },
};
static const ProtobufCIntRange protobuf_msgs__service_status__status__value_ranges[] = {
{0, 0},{0, 4}
};
static const ProtobufCEnumValueIndex protobuf_msgs__service_status__status__enum_values_by_name[4] =
{
  { "NOT_REGISTERED", 3 },
  { "RUNNING", 1 },
  { "STOPPED", 2 },
  { "UNKNOWN", 0 },
};
const ProtobufCEnumDescriptor protobuf_msgs__service_status__status__descriptor =
{
  PROTOBUF_C__ENUM_DESCRIPTOR_MAGIC,
  "protobuf_msgs.ServiceStatus.Status",
  "Status",
  "ProtobufMsgs__ServiceStatus__Status",
  "protobuf_msgs",
  4,
  protobuf_msgs__service_status__status__enum_values_by_number,
  4,
  protobuf_msgs__service_status__status__enum_values_by_name,
  1,
  protobuf_msgs__service_status__status__value_ranges,
  NULL,NULL,NULL,NULL   /* reserved[1234] */
};
static const ProtobufCFieldDescriptor protobuf_msgs__service_status__field_descriptors[2] =
{
  {
    "service",
    1,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_MESSAGE,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__ServiceStatus, service),
    &protobuf_msgs__service__descriptor,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "status",
    2,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_ENUM,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__ServiceStatus, status),
    &protobuf_msgs__service_status__status__descriptor,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
};
static const unsigned protobuf_msgs__service_status__field_indices_by_name[] = {
  0,   /* field[0] = service */
  1,   /* field[1] = status */
};
static const ProtobufCIntRange protobuf_msgs__service_status__number_ranges[1 + 1] =
{
  { 1, 0 },
  { 0, 2 }
};
const ProtobufCMessageDescriptor protobuf_msgs__service_status__descriptor =
{
  PROTOBUF_C__MESSAGE_DESCRIPTOR_MAGIC,
  "protobuf_msgs.ServiceStatus",
  "ServiceStatus",
  "ProtobufMsgs__ServiceStatus",
  "protobuf_msgs",
  sizeof(ProtobufMsgs__ServiceStatus),
  2,
  protobuf_msgs__service_status__field_descriptors,
  protobuf_msgs__service_status__field_indices_by_name,
  1,  protobuf_msgs__service_status__number_ranges,
  (ProtobufCMessageInit) protobuf_msgs__service_status__init,
  NULL,NULL,NULL    /* reserved[123] */
};
static const ProtobufCEnumValue protobuf_msgs__service_order__order_type__enum_values_by_number[3] =
{
  { "STOP", "PROTOBUF_MSGS__SERVICE_ORDER__ORDER_TYPE__STOP", 0 },
  { "KILL", "PROTOBUF_MSGS__SERVICE_ORDER__ORDER_TYPE__KILL", 1 },
  { "FORCE_RESTART", "PROTOBUF_MSGS__SERVICE_ORDER__ORDER_TYPE__FORCE_RESTART", 2 },
};
static const ProtobufCIntRange protobuf_msgs__service_order__order_type__value_ranges[] = {
{0, 0},{0, 3}
};
static const ProtobufCEnumValueIndex protobuf_msgs__service_order__order_type__enum_values_by_name[3] =
{
  { "FORCE_RESTART", 2 },
  { "KILL", 1 },
  { "STOP", 0 },
};
const ProtobufCEnumDescriptor protobuf_msgs__service_order__order_type__descriptor =
{
  PROTOBUF_C__ENUM_DESCRIPTOR_MAGIC,
  "protobuf_msgs.ServiceOrder.OrderType",
  "OrderType",
  "ProtobufMsgs__ServiceOrder__OrderType",
  "protobuf_msgs",
  3,
  protobuf_msgs__service_order__order_type__enum_values_by_number,
  3,
  protobuf_msgs__service_order__order_type__enum_values_by_name,
  1,
  protobuf_msgs__service_order__order_type__value_ranges,
  NULL,NULL,NULL,NULL   /* reserved[1234] */
};
static const ProtobufCFieldDescriptor protobuf_msgs__service_order__field_descriptors[2] =
{
  {
    "service",
    1,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_MESSAGE,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__ServiceOrder, service),
    &protobuf_msgs__service_identifier__descriptor,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
  {
    "order",
    2,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_ENUM,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__ServiceOrder, order),
    &protobuf_msgs__service_order__order_type__descriptor,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
};
static const unsigned protobuf_msgs__service_order__field_indices_by_name[] = {
  1,   /* field[1] = order */
  0,   /* field[0] = service */
};
static const ProtobufCIntRange protobuf_msgs__service_order__number_ranges[1 + 1] =
{
  { 1, 0 },
  { 0, 2 }
};
const ProtobufCMessageDescriptor protobuf_msgs__service_order__descriptor =
{
  PROTOBUF_C__MESSAGE_DESCRIPTOR_MAGIC,
  "protobuf_msgs.ServiceOrder",
  "ServiceOrder",
  "ProtobufMsgs__ServiceOrder",
  "protobuf_msgs",
  sizeof(ProtobufMsgs__ServiceOrder),
  2,
  protobuf_msgs__service_order__field_descriptors,
  protobuf_msgs__service_order__field_indices_by_name,
  1,  protobuf_msgs__service_order__number_ranges,
  (ProtobufCMessageInit) protobuf_msgs__service_order__init,
  NULL,NULL,NULL    /* reserved[123] */
};
static const ProtobufCFieldDescriptor protobuf_msgs__service_list_request__field_descriptors[1] =
{
  {
    "requested",
    1,
    PROTOBUF_C_LABEL_NONE,
    PROTOBUF_C_TYPE_MESSAGE,
    0,   /* quantifier_offset */
    offsetof(ProtobufMsgs__ServiceListRequest, requested),
    &protobuf_msgs__service_identifier__descriptor,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
};
static const unsigned protobuf_msgs__service_list_request__field_indices_by_name[] = {
  0,   /* field[0] = requested */
};
static const ProtobufCIntRange protobuf_msgs__service_list_request__number_ranges[1 + 1] =
{
  { 1, 0 },
  { 0, 1 }
};
const ProtobufCMessageDescriptor protobuf_msgs__service_list_request__descriptor =
{
  PROTOBUF_C__MESSAGE_DESCRIPTOR_MAGIC,
  "protobuf_msgs.ServiceListRequest",
  "ServiceListRequest",
  "ProtobufMsgs__ServiceListRequest",
  "protobuf_msgs",
  sizeof(ProtobufMsgs__ServiceListRequest),
  1,
  protobuf_msgs__service_list_request__field_descriptors,
  protobuf_msgs__service_list_request__field_indices_by_name,
  1,  protobuf_msgs__service_list_request__number_ranges,
  (ProtobufCMessageInit) protobuf_msgs__service_list_request__init,
  NULL,NULL,NULL    /* reserved[123] */
};
static const ProtobufCFieldDescriptor protobuf_msgs__service_list__field_descriptors[1] =
{
  {
    "services",
    1,
    PROTOBUF_C_LABEL_REPEATED,
    PROTOBUF_C_TYPE_MESSAGE,
    offsetof(ProtobufMsgs__ServiceList, n_services),
    offsetof(ProtobufMsgs__ServiceList, services),
    &protobuf_msgs__service__descriptor,
    NULL,
    0,             /* flags */
    0,NULL,NULL    /* reserved1,reserved2, etc */
  },
};
static const unsigned protobuf_msgs__service_list__field_indices_by_name[] = {
  0,   /* field[0] = services */
};
static const ProtobufCIntRange protobuf_msgs__service_list__number_ranges[1 + 1] =
{
  { 1, 0 },
  { 0, 1 }
};
const ProtobufCMessageDescriptor protobuf_msgs__service_list__descriptor =
{
  PROTOBUF_C__MESSAGE_DESCRIPTOR_MAGIC,
  "protobuf_msgs.ServiceList",
  "ServiceList",
  "ProtobufMsgs__ServiceList",
  "protobuf_msgs",
  sizeof(ProtobufMsgs__ServiceList),
  1,
  protobuf_msgs__service_list__field_descriptors,
  protobuf_msgs__service_list__field_indices_by_name,
  1,  protobuf_msgs__service_list__number_ranges,
  (ProtobufCMessageInit) protobuf_msgs__service_list__init,
  NULL,NULL,NULL    /* reserved[123] */
};