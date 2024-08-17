package main

import (
	"backend/database"
	"encoding/json"
	"log"
	"net/http"
	"strings"
)

func InitResponseData( writer http.ResponseWriter, request *http.Request ) database.UserData {

	var responseData database.UserData

	err := json.NewDecoder(request.Body).Decode(&responseData)

	if err != nil {
		http.Error(writer, "Bad request", http.StatusBadRequest)
	}

	return responseData

}

func LoginHandler(users database.Users) http.HandlerFunc {

	return func(writer http.ResponseWriter, request *http.Request) {

		params := request.URL.Query()

		user := database.UserData{
			Email:    params.Get("email"),
			Password: params.Get("password"),
		}

		result, token := users.LoginUser(user)

		json.NewEncoder(writer).Encode(map[string]string{
			"code":  result,
			"token": token,
		})
	}

}

func RegistrationHandler(users database.Users) http.HandlerFunc {
	return func(writer http.ResponseWriter, request *http.Request) {

		responseData := InitResponseData(writer, request)

		result := users.RegisterUser(responseData)

		log.Print(result)
		writer.Write([]byte(result))
	}

}

func ContentHandler(content database.Content) http.HandlerFunc {

	return func(writer http.ResponseWriter, request *http.Request) {
		
		result := content.GetContent("main")

		err := json.NewEncoder(writer).Encode(result)
		if err != nil{
			http.Error(writer , err.Error() , http.StatusInternalServerError)
		}

	}

}

func CollectionHandler(contentLines database.ContentLines) http.HandlerFunc {

	return func(writer http.ResponseWriter, request *http.Request) {
		 
	path := request.URL.Path
	segments := strings.Split(path, "/")
	if segments[2] !="collection" || len(segments)<3 {
		log.Print("incorrect path")
		return	
	}
	
	contentLineID := segments[3]

	contentLine := contentLines.GetContentLineById( contentLineID )

	json.NewEncoder(writer).Encode(contentLine)
	}
}

func AuthorsHandler(authors database.Authors) http.HandlerFunc {

	return func(writer http.ResponseWriter, request *http.Request) {
		 
	path := request.URL.Path
	segments := strings.Split(path, "/")
	if  len(segments)<3 {
		log.Print("incorrect path")
		return	
	}
	
	authorID := segments[3]

	author := authors.GetAuthor(authorID) 

	json.NewEncoder(writer).Encode(author)
	}
}

func AlbumsHandler(albums database.Albums) http.HandlerFunc {

	return func(writer http.ResponseWriter, request *http.Request) {
		 
	path := request.URL.Path
	segments := strings.Split(path, "/")
	if  len(segments)<3 {
		log.Print("incorrect path")
		return	
	}
	
	albumID := segments[3]

	album := albums.GetAlbum(albumID) 

	json.NewEncoder(writer).Encode(album)
	}
}

func PlaylistsHandler(playlists database.Playlists) http.HandlerFunc {

	return func(writer http.ResponseWriter, request *http.Request) {
		 
	path := request.URL.Path
	segments := strings.Split(path, "/")
	if len(segments)<3 {
		log.Print("incorrect path")
		return	
	}
	
	playlistID := segments[3]

	playlist := playlists.GetPlaylist(playlistID) 

	json.NewEncoder(writer).Encode(playlist)
	}
}

func TracksHandler(tracks database.Tracks) http.HandlerFunc {

	return func(writer http.ResponseWriter, request *http.Request) {
		 
	path := request.URL.Path
	segments := strings.Split(path, "/")
	if len(segments)<3 {
		log.Print("incorrect path")
		return	
	}
	
	trackID := segments[3]

	track := tracks.GetTrack(trackID) 

	json.NewEncoder(writer).Encode(track)
	}
}

func TracksByParamsHandler(tracks database.Tracks) http.HandlerFunc {

	return func(writer http.ResponseWriter, request *http.Request) {
		 
	params := request.URL.Query()

	tracks := tracks.GetTracksByAuthor(params.Get("author")) 

	log.Print(tracks)

	json.NewEncoder(writer).Encode(tracks)
	}
}