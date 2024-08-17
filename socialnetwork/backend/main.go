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

	mux := initRoutes(db) 

	fmt.Println("Starting server at port 8080")
	log.Fatal(http.ListenAndServe(":8080", mux))
}

func initRoutes(db database.Database) *http.ServeMux{
	mux := http.NewServeMux()

	users := db.Users()
	content := db.Content()
	content_lines := db.ContentLines()
	authors := db.Authors()
	albums := db.Albums()
	tracks := db.Tracks()
	playlists := db.Playlists()

	mux.HandleFunc("/api/login", middleware.WithMiddleware(LoginHandler(users)))
	mux.HandleFunc("/api/registration", middleware.WithMiddleware(RegistrationHandler(users)))
	mux.HandleFunc("/api/content" , middleware.WithMiddleware(ContentHandler(content)))
	mux.HandleFunc("/api/collection/" , middleware.WithMiddleware(CollectionHandler(content_lines)))
	mux.HandleFunc("/api/authors/" , middleware.WithMiddleware(AuthorsHandler(authors)))
	mux.HandleFunc("/api/albums/" , middleware.WithMiddleware(AlbumsHandler(albums)))
	mux.HandleFunc("/api/playlists/" , middleware.WithMiddleware(PlaylistsHandler(playlists)))
	mux.HandleFunc("/api/tracks/" , middleware.WithMiddleware(TracksHandler(tracks)))
	mux.HandleFunc("/api/tracks" , middleware.WithMiddleware(TracksByParamsHandler(tracks)))

	return mux
}