package kafka

import (
	"encoding/json"
	"log"
	"ncs-backend/go/controller"

	//"ncs-backend/go/kafka"
	"ncs-backend/go/model"
)

/*
func HandleCreateEscrow(data []byte) {
	var payload model.Escrow

	if err := json.Unmarshal(data, &payload); err != nil {
		log.Println("❌ Unmarshal error:", err)
		SendKafkaMessage("escrow-response", map[string]any{
			"success": false,
			"error":   "Invalid payload",
		})
		return
	}

	escrow, err := controller.CreateEscrow(payload)
	 if err != nil {
		SendKafkaMessage("escrow-response", map[string]any{
			"success": false,
			"error":   err.Error(),
		})
		return
	}

	SendKafkaMessage("escrow-response", map[string]any{
		"success":   true,
		"escrow":    escrow,
		"requestId": escrow.JobID,
	})
} */


func HandleCreateEscrow(data []byte) {
	var payload model.Escrow

	// Unmarshal the incoming JSON message into your Escrow model
	if err := json.Unmarshal(data, &payload); err != nil {
		log.Println("❌ Unmarshal error:", err)
		return
	}

	// Call business logic to create the escrow
	escrow, err := controller.CreateEscrow(payload)
	if err != nil {
		log.Println("❌ Failed to create escrow:", err)
		return
	}

	// Log the created escrow (or handle it however you want)
	log.Printf("✅ Escrow created: %+v\n", escrow)
}