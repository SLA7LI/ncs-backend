package routes

import (
	//"ncs-hackathon/controller"
	"ncs-backend/go/controller"
	"net/http"

	"github.com/go-chi/chi"
)

func Router() *chi.Mux{
	r := chi.NewRouter()

	r.Get("/sayhello",func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello, World!"))
	})

	r.Route("/notifs", func(r chi.Router) {
		r.Post("/createnotif",controller.CreatedNotifications ) 
		r.Get("/getunreadusernotif/{id}", controller.GetUnreadUserNotif)
		r.Put("/updatereadable/{id}", controller.UpdateReadable)
	})

	r.Route("/payment", func(r chi.Router) {
		//r.Post("/createescrow", controller.CreateEscrow)
		//r.Post("/workerpayassurance/{id}", controller.WorkerPayAssurance)
		r.Post("/payoutoworker/{id}", controller.PayouToWorker)
	})

	return r
}