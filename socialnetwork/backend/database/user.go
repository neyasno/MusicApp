package database

import (
	"log"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type UserData struct {
	Id        primitive.ObjectID `bson:"_id,omitempty" json:"_id,omitempty"`
	Email     string             `json:"email"`
	Password  string             `json:"password"`
	Username  string             `json:"username"`
	Playlists []PlaylistData          `json:"playlists"`
}

func (user *UserData) CreatePlaylist(users Users, playlistTitle string) {

	newPlaylist := PlaylistData{
		Id:    primitive.NewObjectID(),
		Title: playlistTitle,
		Image: "https://misc.scdn.co/liked-songs/liked-songs-300.png",
		Items: []TrackData{},
	}

	user.Playlists = append(user.Playlists, newPlaylist)

	user.migrateUserPlaylists(users)
}

func (user *UserData) UpdatePlaylist(users Users, playlist PlaylistData) {
	
}

func (user *UserData) DeletePlaylist(playlist PlaylistData) {
	
}

func (user *UserData) AddPlaylist( users Users, playlist PlaylistData) {
	user.Playlists = append(user.Playlists, playlist)
	user.migrateUserPlaylists(users)
}

func (user UserData) GetPlaylists() []PlaylistData {
	return user.Playlists
}

func (user *UserData) migrateUserPlaylists(users Users){
	update := bson.M{
		"$set": bson.M{
			"playlists": user.Playlists,
		},
	}
	_, err := users.collection.UpdateByID(users.ctx, user.Id, update)
	if err != nil {
		log.Print("ERR IN UPDATE")
	}
}