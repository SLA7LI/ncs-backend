package controller

import (
	"fmt"
	"ncs-backend/go/config"

	//"ncs-backend/go/kafka"
	//"ncs-backend/go/kafka"
	"ncs-backend/go/model"

	"time"
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
		fmt.Println("Error creating escrow:", result.Error)
		return escrow, result.Error
	}

	clientTx := model.Transaction{
		UserID:    escrow.ClientID,
		EscrowID:  escrow.ID,
		Type:      "out",
		Amount:    escrow.Amount,
		Status:    "success",
		CreatedAt: time.Now(),
	}

	result1 := config.DB.Create(&clientTx)
	if result1.Error != nil {
		return escrow, result.Error
	}
	return escrow, nil
}

func WorkerPayAssurance(escrowID uint) (model.Escrow, error) {
	var escrow model.Escrow

	// 1. Get the escrow from DB and check for errors
	result := config.DB.First(&escrow, escrowID)
	if result.Error != nil {
		return escrow, result.Error // Could be "record not found"
	}

	// 2. Calculate 10% assurance
	assurance := (escrow.Amount * 10) / 100

	// 3. Create the worker transaction
	workerTx := model.Transaction{
		UserID:    escrow.WorkerID,
		EscrowID:  escrow.ID,
		Type:      "out",
		Amount:    assurance,
		Status:    "success",
		CreatedAt: time.Now(),
	}

	// 4. Save transaction and check for errors
	result = config.DB.Create(&workerTx)
	if result.Error != nil {
		return escrow, result.Error
	}

	// 5. Return the escrow info if everything succeeded
	return escrow, nil
}


func PayouToWorker(escrowID uint) (model.Escrow, error) {
	var escrow model.Escrow

	// 1. Get escrow record by ID
	result := config.DB.First(&escrow, escrowID)
	if result.Error != nil {
		return escrow, result.Error
	}

	// 2. Create transaction (full payout to worker)
	workerTx := model.Transaction{
		UserID:    escrow.WorkerID,
		EscrowID:  escrow.ID,
		Type:      "in", // ✅ Full payment to worker
		Amount:    escrow.Amount,
		Status:    "success",
		CreatedAt: time.Now(),
	}

	// 3. Insert transaction
	result = config.DB.Create(&workerTx)
	if result.Error != nil {
		return escrow, result.Error
	}

	return escrow, nil
}




