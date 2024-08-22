package pathshandlers

import (
	"backend/database"
	"encoding/json"
	"io"
	"log"
	"net/http"
)


func ContentHandler(content database.Content) http.HandlerFunc {

	return func(writer http.ResponseWriter, request *http.Request) {
		
		result := content.GetContent("main")

		err := json.NewEncoder(writer).Encode(result)
		if err != nil{
			http.Error(writer , err.Error() , http.StatusInternalServerError)
		}

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

func UserPlaylistsHandler(users database.Users) http.HandlerFunc {
	return func(writer http.ResponseWriter, request *http.Request) {

		username := request.Header.Get("username")
		user := users.GetUser(username)
		user.Username = "ssaa"

		switch(request.Method){
			case http.MethodGet :{
				json.NewEncoder(writer).Encode(user.GetPlaylists())
				
			}
			case http.MethodPost :{

				playlistTitleBytes , err := io.ReadAll(request.Body)
				if err!=nil{
					log.Print("Bad byte decode")
				}
				playlistTitle := string(playlistTitleBytes)

				user.CreatePlaylist(users,playlistTitle)
			}
			case http.MethodPut :{
				log.Print("3 ")
			}
			case http.MethodDelete :{
				log.Print("4 ")
			}
			default:{
				log.Print("Unexpected request method")
			}		

		}	
	}
}