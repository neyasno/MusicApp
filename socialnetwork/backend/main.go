package main

import (
	"backend/database"
	"backend/middleware"
	p "backend/paths_handlers"
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

	mux.HandleFunc("/api/", 		middleware.WithTokenMiddleware(p.TokenHandler()))
	mux.HandleFunc("/api/login", 		middleware.WithMiddleware(p.LoginHandler(users)))
	mux.HandleFunc("/api/registration", middleware.WithMiddleware(p.RegistrationHandler(users)))
	mux.HandleFunc("/api/content" , 	middleware.WithMiddleware(p.ContentHandler(content)))
	mux.HandleFunc("/api/collections/" ,middleware.WithMiddleware(p.CollectionHandler(content_lines)))
	mux.HandleFunc("/api/authors/" , 	middleware.WithMiddleware(p.AuthorsHandler(authors)))
	mux.HandleFunc("/api/albums/" , 	middleware.WithMiddleware(p.AlbumsHandler(albums)))
	mux.HandleFunc("/api/playlists/" ,  middleware.WithMiddleware(p.PlaylistsHandler(playlists)))
	mux.HandleFunc("/api/tracks/" , 	middleware.WithMiddleware(p.TracksHandler(tracks)))
	mux.HandleFunc("/api/tracks" , 		middleware.WithMiddleware(p.TracksByParamsHandler(tracks)))
	mux.HandleFunc("/api/userplaylists",middleware.WithTokenMiddleware(p.UserPlaylistsHandler(users)))

	return mux
}