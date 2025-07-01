package controller

import (
	"encoding/json"
	"ncs-backend/go/config"
	"ncs-backend/go/model"

	"net/http"
	"time"

	"github.com/go-chi/chi"
)

func CreatedNotifications(w http.ResponseWriter, r *http.Request) {
	var notif model.Notification

	err := json.NewDecoder(r.Body).Decode(&notif)
	if err != nil{
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	notif.Read = false // Default value for Read field
	notif.CreatedAt = time.Now()

	result := config.DB.Create(&notif)
	if result.Error != nil {
		http.Error(w, "Failed to create notification", http.StatusInternalServerError)
		return
	}
	
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(notif)

}

func GetUnreadUserNotif(w http.ResponseWriter, r *http.Request) {
	userID := chi.URLParam(r, "id")
	if userID == "" {
		http.Error(w, "User ID is required", http.StatusBadRequest)
		return
	}

	var notifications []model.Notification
	result := config.DB.Where("userId = ?", userID).Where("`read` = ?",false).Find(&notifications)
	if result.Error != nil {
		http.Error(w, "Failed to retrieve notifications", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(notifications)

}

func UpdateReadable(w http.ResponseWriter,r *http.Request){
	notifId := chi.URLParam(r, "id")

	if notifId == "" {
		http.Error(w, "Notification ID is required", http.StatusBadRequest)
		return
	}
	var notif model.Notification
	result := config.DB.First(&notif, notifId)
	if result.Error != nil {
		http.Error(w, "Notification not found", http.StatusNotFound)
		return
	}

	notif.Read = !notif.Read 
	result = config.DB.Save(&notif)
	if result.Error != nil {	
		http.Error(w, "Failed to update notification", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(notif)
}