package kafka

import (
	"encoding/json"
	"log"
	"ncs-backend/go/controller"

	//"ncs-backend/go/kafka"
	"ncs-backend/go/model"
)

type EscrowPayload struct {
	JobID     uint    `json:"jobID"`
	ClientID  uint    `json:"clientID"`
	WorkerID  uint    `json:"workerID"`
	Amount    float64 `json:"amount"`
	RequestID string  `json:"requestId"` // ✅ This is for Kafka only
}



func HandleCreateEscrow(data []byte) {
	var payload EscrowPayload

	if err := json.Unmarshal(data, &payload); err != nil {
		log.Println("❌ Unmarshal error:", err)
		SendKafkaMessage("escrow-response", map[string]any{
			"success": false,
			"error":   "Invalid payload",
			"requestId": "", // just return empty
		})
		return
	}

	// Build model.Escrow for DB insert
	escrowInput := model.Escrow{
		JobID:    int64(payload.JobID),
		ClientID: int64(payload.ClientID),
		WorkerID: int64(payload.WorkerID),
		Amount:   payload.Amount,
	}

	escrow, err := controller.CreateEscrow(escrowInput)
	if err != nil {
		SendKafkaMessage("escrow-response", map[string]any{
			"success": false,
			"error":   err.Error(),
			"requestId": payload.RequestID, // ✅ echo it back to Node
		})
		return
	}

	SendKafkaMessage("escrow-response", map[string]any{
		"success":   true,
		"escrow":    escrow,
		"requestId": payload.RequestID, // ✅ important for Node match
	})
}

type WorkerPayPayload struct {
	EscrowID uint   `json:"escrow_id"`
	RequestID string `json:"requestId"`
}

func HandlePayouToWorker(data []byte) {
	var payload WorkerPayPayload

	if err := json.Unmarshal(data, &payload); err != nil {
		log.Println("❌ Unmarshal error:", err)
		SendKafkaMessage("payworker-response", map[string]any{
			"success": false,
			"error":   "Invalid payload",
			"requestId": "", // just return empty
		})
		return
	}

	// Build model.Escrow for DB insert
	

	escrow, err := controller.WorkerPayAssurance(payload.EscrowID)
	if err != nil {
		SendKafkaMessage("escrow-response", map[string]any{
			"success": false,
			"error":   err.Error(),
			"requestId": payload.RequestID, // ✅ echo it back to Node
		})
		return
	}

	SendKafkaMessage("escrow-response", map[string]any{
		"success":   true,
		"escrow":    escrow,
		"requestId": payload.RequestID, // ✅ important for Node match
	})
}

