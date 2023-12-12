package messages

import "encoding/json"

// The meta message codes that are accepted by the server
type MetaCode int64

const (
	MessageCodeUnknown         MetaCode = 0
	MessageCodeUnsupported     MetaCode = 1
	MessageCodeDataForwarding  MetaCode = 2
	MessageCodeControlTakeover MetaCode = 20
	MessageCodeControlRelease  MetaCode = 21
	MessageCodeEmergencyStop   MetaCode = 22
	MessageCodeCarConnected    MetaCode = 30
	MessageCodeCarDisconnected MetaCode = 31
)

// These messages are sent as JSON over the webRTC Meta channel to clients or the car
type MetaMessage struct {
	Error       bool            `json:"error"`       // whether the message is an error
	Code        MetaCode        `json:"code"`        // unique code for each message action
	Description string          `json:"description"` // a description of the message§
	Data        json.RawMessage `json:"data"`        // the payload of the message
}

// Different payloads for different message types
type MessagePayloadControlTakeover struct {
	// The ID of the client that is requesting (or is handed) control
	ClientId string `json:"clientId"`
}

//
// Utility functions to create meta messages
//

func CreateMetaMessage(code MetaCode, description string, isError bool, data interface{}) (string, error) {
	payload, err := json.Marshal(data)
	if err != nil {
		return "nil", err
	}

	metaMessage := MetaMessage{
		Error:       isError,
		Code:        code,
		Description: description,
		Data:        payload,
	}

	raw, err := json.Marshal(metaMessage)
	if err != nil {
		return "", err
	}

	return string(raw), nil
}

func ParseMetaMessage(data []byte) (*MetaMessage, error) {
	metaMessage := MetaMessage{}
	if err := json.Unmarshal(data, &metaMessage); err != nil {
		return nil, err
	}

	return &metaMessage, nil
}
