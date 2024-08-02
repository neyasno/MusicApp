package main

import (
	"backend/database"
	"backend/middleware"
	"context"
	"fmt"
	"log"
	"net/http"
)

func main() {

	ctx := context.Background()
	db := database.InitDatabase(ctx)
	defer db.Disconnect()

	users := db.Users()
	

	http.HandleFunc("/api/login", middleware.WithMiddleware(LoginHandler(users)))
	http.HandleFunc("/api/registration", middleware.WithMiddleware(RegistrationHandler(users)))

	fmt.Println("Starting server at port 8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}


