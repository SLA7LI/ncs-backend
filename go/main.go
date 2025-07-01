package main

import (
	"log"
	"ncs-hackathon/config"
	"ncs-hackathon/routes"
	"net/http"
)

func main() {
	config.Connectdb()

	myrouter := routes.Router()

	srv := &http.Server{
		Addr:    "0.0.0.0:8085",
		Handler: myrouter,
	}

	err := srv.ListenAndServe()
	if err != nil {
		log.Fatalf("Error starting server: %v", err)
	}

	log.Println("Server started on :8085")
}