package kafka

import (
	"context"
	"encoding/json"
	"log"

	"github.com/segmentio/kafka-go"
)

func SendKafkaMessage(topic string, message interface{}) {
	writer := kafka.NewWriter(kafka.WriterConfig{
		Brokers: []string{"kafka:9092"},
		Topic:   topic,
	})
	defer writer.Close()

	value, err := json.Marshal(message)
	if err != nil {
		log.Println("❌ Failed to marshal Kafka message:", err)
		return
	}

	err = writer.WriteMessages(context.Background(), kafka.Message{
		Value: value,
	})
	if err != nil {
		log.Println("❌ Failed to send Kafka message:", err)
	} else {
		log.Printf("📤 Sent Kafka message to topic %s", topic)
	}
}
