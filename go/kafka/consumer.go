package kafka

import (
	"context"
	"log"

	//"ncs-backend/go/kafka/handler"

	"github.com/segmentio/kafka-go"
)

func StartConsumer() {
	reader := kafka.NewReader(kafka.ReaderConfig{
		Brokers: []string{"kafka:9092"},
		Topic:   "create-escrow",
		GroupID: "go-group",
	})

	log.Println("🎧 Kafka consumer started...")

	for {
		msg, err := reader.ReadMessage(context.Background())
		if err != nil {
			log.Println("❌ Kafka read error:", err)
			continue
		}

		go HandleCreateEscrow(msg.Value)
	}
}
