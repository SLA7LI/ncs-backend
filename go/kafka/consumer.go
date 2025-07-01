package kafka

import (
	"context"
	"log"

	//"ncs-backend/go/kafka/handler"

	"github.com/segmentio/kafka-go"
)

func StartCreateEscrowConsumer() {
	reader := kafka.NewReader(kafka.ReaderConfig{
		Brokers: []string{"kafka:9092"},
		Topic:   "create-escrow",
		GroupID: "go-group-create",
	})
	log.Println("🎧 Consumer: create-escrow started")

	for {
		msg, err := reader.ReadMessage(context.Background())
		if err != nil {
			log.Println("❌ Kafka read error:", err)
			continue
		}
		go HandleCreateEscrow(msg.Value)
	}
}

func StartPayWorkerConsumer() {
	reader := kafka.NewReader(kafka.ReaderConfig{
		Brokers: []string{"kafka:9092"},
		Topic:   "worker-pay-assurance",
		GroupID: "go-group-payworker",
	})
	log.Println("🎧 Consumer: worker-pay-assurance started")

	for {
		msg, err := reader.ReadMessage(context.Background())
		if err != nil {
			log.Println("❌ Kafka read error:", err)
			continue
		}
		go HandlePayouToWorker(msg.Value)
	}
}

func StartFullPayoutConsumer() {
	reader := kafka.NewReader(kafka.ReaderConfig{
		Brokers: []string{"kafka:9092"},
		Topic:   "worker-full-payout",
		GroupID: "go-group-fullpayout",
	})
	log.Println("🎧 Consumer: worker-full-payout started")

	for {
		msg, err := reader.ReadMessage(context.Background())
		if err != nil {
			log.Println("❌ Kafka read error:", err)
			continue
		}
		go HandlePayoutToWorker(msg.Value)
	}
}