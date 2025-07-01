package controller

import (
	"encoding/json"
	"ncs-hackathon/config"
	"ncs-hackathon/model"
	"net/http"
	"time"

	"github.com/go-chi/chi"
)

func CreateEscrow(w http.ResponseWriter, r *http.Request) {
	var escrow model.Escrow


	err := json.NewDecoder(r.Body).Decode(&escrow); 
	if err != nil {
		http.Error(w, "Invalid payload", http.StatusBadRequest)
		return
	}
	escrow.CreatedAt = time.Now()
	result := config.DB.Create(&escrow)
	if result.Error != nil {
		http.Error(w, "Failed to create escrow", http.StatusInternalServerError)
		return
	}

	clientTx := model.Transaction{
	UserID:    escrow.ClientID,
	EscrowID:  escrow.ID,
	Type:      "out",
	Amount:    escrow.Amount	,
	Status:    "success",
	CreatedAt: time.Now(),
	}
 
	result1 := config.DB.Create(&clientTx)
	if result1.Error != nil {
		http.Error(w, "Failed to create client transaction", http.StatusInternalServerError)	
	}

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(escrow)

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




