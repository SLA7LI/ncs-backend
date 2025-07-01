package controller

import (
	"encoding/json"
	"ncs-backend/go/config"

	//"ncs-backend/go/kafka"
	//"ncs-backend/go/kafka"
	"ncs-backend/go/model"

	"net/http"
	"time"

	"github.com/go-chi/chi"
)

func CreateEscrow(payload model.Escrow) (model.Escrow, error) {
	escrow := model.Escrow{
		JobID:     payload.JobID,
		ClientID:  payload.ClientID,
		WorkerID:  payload.WorkerID,
		Amount:    payload.Amount,
		CreatedAt: time.Now(),
	}

	result := config.DB.Create(&escrow)
	if result.Error != nil {
		return escrow, result.Error
	}
	return escrow, nil
}

func WorkerPayAssurance(w http.ResponseWriter, r *http.Request) {

	var Escrow model.Escrow
	escrowId := chi.URLParam(r, "id")

	if escrowId == "" {
		http.Error(w, "Escrow ID is required", http.StatusBadRequest)
		return
	}

	config.DB.First(&Escrow, escrowId)
	
	workerTx := model.Transaction{
	UserID:    Escrow.WorkerID,
	EscrowID:  Escrow.ID,
	Type:      "out",
	Amount:    (Escrow.Amount * 10)/100,
	Status:    "success",
	CreatedAt: time.Now(),
	}

	result1 := config.DB.Create(&workerTx)
	if result1.Error != nil {
		http.Error(w, "Failed to create worker transaction", http.StatusInternalServerError)	
	}

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(Escrow)

}

func PayouToWorker(w http.ResponseWriter, r *http.Request) {

	var Escrow model.Escrow
	escrowId := chi.URLParam(r, "id")

	if escrowId == "" {
		http.Error(w, "Escrow ID is required", http.StatusBadRequest)
		return
	}

	config.DB.First(&Escrow, escrowId)

	workerTx := model.Transaction{
	UserID:    Escrow.WorkerID,
	EscrowID:  Escrow.ID,
	Type:      "in",
	Amount:    Escrow.Amount,
	Status:    "success",
	CreatedAt: time.Now(),
	}

	result1 := config.DB.Create(&workerTx)
	if result1.Error != nil {
		http.Error(w, "Failed to create worker transaction", http.StatusInternalServerError)	
	}

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(Escrow)
}	




