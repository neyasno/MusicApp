package main

import (
	"backend/database"
	"backend/middleware"
	"context"
	"fmt"
	"log"
	"net/http"
	"strconv"
)

func main() {

	ctx := context.Background()
	db := database.InitDatabase(ctx)
	defer db.Disconnect()

	users := db.Users()
	content := db.Content()

	contentLines := db.ContentLines()
	authors := db.Authors()

	
	var newLineAuthors []database.ContentUnit

	for i := 2; i < 23; i++ {
		author := authors.GetAuthor((strconv.Itoa(i)))
		newLineAuthors = append(newLineAuthors, author)
	}

	contentLine :=  database.ContentLine{
		Title: "Best singers for year",
		Type_of: "AUTHORS",
		Link: "ddd",
		Data:  newLineAuthors ,
	}
	
	contentLines.AddContentLine(contentLine)

	http.HandleFunc("/api/login", middleware.WithMiddleware(LoginHandler(users)))
	http.HandleFunc("/api/registration", middleware.WithMiddleware(RegistrationHandler(users)))
	http.HandleFunc("/api/content" , middleware.WithTokenMiddleware(ContentHandler(content)))

	fmt.Println("Starting server at port 8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}