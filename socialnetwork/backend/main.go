package main

import (
	"backend/middleware"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type RegistrationData struct{
	Email string `json:"email"`
	Password string `json:"password"`
	Username string `json:"username"`
}

func loginHandler(w http.ResponseWriter, r *http.Request) {
	log.Print(r.URL)

	w.Write([]byte("Sasha"))

}

func registrationHandler(w http.ResponseWriter , r *http.Request) {

	var responseData RegistrationData

	err := json.NewDecoder(r.Body).Decode(&responseData)

	if err!= nil{
		http.Error(w , "Bad request" , http.StatusBadRequest)
	}

	log.Print(responseData)
	
}

func main() {

	http.HandleFunc("/api/login", middleware.CorsMiddleware(loginHandler))
	http.HandleFunc("/api/registration", middleware.CorsMiddleware(registrationHandler))

	fmt.Println("Starting server at port 8080")
	log.Fatal(http.ListenAndServe(":8080", nil))

}
