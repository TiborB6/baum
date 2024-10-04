package web

import (
	"html/template"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/gorilla/csrf"
)

type Handler struct {
	chi.Mux
}

func NewHandler() *Handler {
	h := &Handler{
		Mux: *chi.NewMux(),
	}

	legal := LegalHandler{}

	key, err := ioutil.ReadFile("./cmd/server/csrf.key")
	if err != nil {
		log.Fatalf("Error reading CSRF key: %v", err)
	}

	csrfMiddleware := csrf.Protect(
		key,
		csrf.Path("/"),
		csrf.Secure(false), // Set this to true in production
	)

	h.Use(csrfMiddleware)

	h.Get("/", h.Home())
	h.Get("/services", h.Services())
	h.Get("/kontakt", h.Kontakt())

	h.Route("/legal", func(r chi.Router) {
		r.Get("/agb", legal.AGB())
		r.Get("/impressum", legal.Impressum())
		r.Get("/privacy", legal.Privacy())
	})

	return h
}

func (h *Handler) Home() http.HandlerFunc {
	tmpl := template.Must(template.ParseFiles("static/templates/layout.html", "static/templates/home.html"))

	return func(w http.ResponseWriter, r *http.Request) {
		tmpl.Execute(w, nil)
	}
}

func (h *Handler) Services() http.HandlerFunc {
	tmpl := template.Must(template.ParseFiles("static/templates/layout.html", "static/templates/services.html"))

	return func(w http.ResponseWriter, r *http.Request) {
		tmpl.Execute(w, nil)
	}
}

func (h *Handler) Kontakt() http.HandlerFunc {
	tmpl := template.Must(template.ParseFiles("static/templates/layout.html", "static/templates/kontakt.html"))

	return func(w http.ResponseWriter, r *http.Request) {
		tmpl.Execute(w, nil)
	}
}

func (h *Handler) Mail() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		form := ContactModelForm{
			Name:    r.FormValue("name"),
			Email:   r.FormValue("email"),
			Tel:     r.FormValue("tel"),
			Message: r.FormValue("message"),
		}

		err := SendEmail(form)
		if err != nil {
			panic(err)
		}
	}
}
