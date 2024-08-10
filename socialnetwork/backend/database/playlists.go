package database

import (
	"context"
	"log"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type Playlists struct {
	collection mongo.Collection
	ctx context.Context
}

func (db Database) Playlists() Playlists {
	return Playlists{
		collection: *db.data.Collection("playlists"),
		ctx: db.ctx,
	}
}

type PlaylistData struct {
	Id primitive.ObjectID `bson:"_id,omitempty" json:"id,omitempty"`
	Title string  `json:"title"`
	Image string  `json:"image"`
	Items [] TrackData `json:"items"`
}

func (playlists Playlists) AddPlaylist (playlist PlaylistData) {
	_ , err := playlists.collection.InsertOne( playlists.ctx ,playlist )
	if err != nil {
		log.Print(err)
	}
}

func (playlists Playlists) GetPlaylist (title string) PlaylistData{
	isExist , playlist := playlists.contains("title" , title)
	if !isExist {
		log.Print("playlist not exist ")
	}
	return playlist
}

func (item PlaylistData) ToContentBlock () ContentBlock{
	return ContentBlock{
		Id: item.Id,
		Title: item.Title,
		Description: "",
		Image: item.Image,
	}
}

func (table Playlists) contains(key string, value string) (bool, PlaylistData) {

	var item PlaylistData

	filter := bson.M{key: value}

	findRes := table.collection.FindOne(table.ctx, filter)
	findRes.Decode(&item)

	if findRes.Err() == nil {
		return true, item
	} else {
		return false, item
	}
}
