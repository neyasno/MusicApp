package main

import (
	"backend/database"
	"backend/middleware"
	"context"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"

	"go.mongodb.org/mongo-driver/mongo/gridfs"
)

func main() {

	ctx := context.Background()
	db := database.InitDatabase(ctx)
	defer db.Disconnect()

	users := db.Users()
	content := db.Content()
	content_lines := db.ContentLines()
	authors := db.Authors()
	albums := db.Albums()
	tracks := db.Tracks()
	playlists := db.Playlists()

	http.HandleFunc("/api/login", middleware.WithMiddleware(LoginHandler(users)))
	http.HandleFunc("/api/registration", middleware.WithMiddleware(RegistrationHandler(users)))
	http.HandleFunc("/api/content" , middleware.WithMiddleware(ContentHandler(content)))
	http.HandleFunc("/api/collection/" , middleware.WithMiddleware(CollectionHandler(content_lines)))
	http.HandleFunc("/api/authors/" , middleware.WithMiddleware(AuthorsHandler(authors)))
	http.HandleFunc("/api/albums/" , middleware.WithMiddleware(AlbumsHandler(albums)))
	http.HandleFunc("/api/playlists/" , middleware.WithMiddleware(PlaylistsHandler(playlists)))
	http.HandleFunc("/api/tracks/" , middleware.WithMiddleware(TracksHandler(tracks)))

	fmt.Println("Starting server at port 8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func AddAudio(db database.Database ){
	bucket , err := gridfs.NewBucket(db.GetData())
	if err!=nil {
		log.Fatal(err)
	}

	audiofile , err := os.Open("C:\\Users\\neyasno\\Documents\\Git\\MusicApp\\socialnetwork\\frontend\\public\\222.mp3")
	if err!=nil {
		log.Fatal(err)
	}

	uploadStream, err := bucket.OpenUploadStream("audiofile.mp3")
    if err != nil {
        log.Fatal(err)
    }
    defer uploadStream.Close()

    fileSize, err := io.Copy(uploadStream, audiofile)
    if err != nil {
        log.Fatal(err)
    }

    fmt.Printf("File uploaded to GridFS with size: %d bytes\n", fileSize)
}

func GetAudio(filename string , db database.Database) *os.File{

    bucket, err := gridfs.NewBucket(db.GetData())
    if err != nil {
        log.Fatal(err)
    }

    downloadStream, err := bucket.OpenDownloadStreamByName(filename)
    if err != nil {
        log.Fatal(err)
    }
    defer downloadStream.Close()

    audioFile, err := os.Create("downloaded_audiofile.mp3")
    if err != nil {
        log.Fatal(err)
    }
    defer audioFile.Close()

	return audioFile
}