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
	content := db.Content()

	http.HandleFunc("/api/login", middleware.WithMiddleware(LoginHandler(users)))
	http.HandleFunc("/api/registration", middleware.WithMiddleware(RegistrationHandler(users)))
	http.HandleFunc("/api/content" , middleware.WithTokenMiddleware(ContentHandler(content)))

	fmt.Println("Starting server at port 8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}