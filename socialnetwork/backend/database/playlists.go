package database

import (
	"context"
	"log"
	"math/rand"
	"time"

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

func (playlists Playlists) GetPlaylist (id string) PlaylistData{

	objID , err := primitive.ObjectIDFromHex(id)
	if err!=nil{
		log.Fatal('!')
	}

	isExist , playlist := playlists.contains("_id" , objID)
	if !isExist {
		log.Print("playlist not exist ")
	}
	return playlist
}

func (playlists Playlists) GetRandomPlaylist () PlaylistData{

	cursor , _ := playlists.collection.Find(playlists.ctx , bson.M{})

	var allPlaylist []PlaylistData

	cursor.All(playlists.ctx , allPlaylist)

	rand.NewSource(time.Now().UnixNano())

	return allPlaylist[rand.Intn(len(allPlaylist))]
}

func (item PlaylistData) ToContentBlock () ContentBlock{
	return ContentBlock{
		Id: item.Id,
		Title: item.Title,
		Description: "",
		Image: item.Image,
	}
}

func (table Playlists) contains(key string, value interface{}) (bool, PlaylistData) {

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
