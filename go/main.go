package main

import (
	"log"
	"ncs-backend/go/config"
	"ncs-backend/go/kafka"
	"ncs-backend/go/routes"
	"net/http"
)

func main() {
	// Connect to DB
	config.Connectdb()

	// Start Kafka consumer in a goroutine
	go kafka.StartCreateEscrowConsumer()
	go kafka.StartPayWorkerConsumer()
	go kafka.StartFullPayoutConsumer()
	// Init producer once
	//kafka.InitProducer()

	// Set up routes and HTTP server
	myrouter := routes.Router()
	srv := &http.Server{
		Addr:    "0.0.0.0:8085",
		Handler: myrouter,
	}

	log.Println("🚀 HTTP server starting on :8085")
	err := srv.ListenAndServe()
	if err != nil {
		log.Fatalf("❌ Error starting server: %v", err)
	}
}
