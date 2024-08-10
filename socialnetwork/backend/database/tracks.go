package database

import (
	"context"
	"log"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type Tracks struct {
	collection mongo.Collection
	ctx        context.Context
}

func (db Database) Tracks() Tracks {
	return Tracks{
		collection: *db.data.Collection("tracks"),
		ctx:        db.ctx,
	}
}

type TrackData struct {
	Id       primitive.ObjectID `json:"id,omitempty"`
	Title    string             `json:"title"`
	Filename string             `json:"filename"`
	Duration string             `json:"duration"`
	Genre    string             `json:"genre"`
	Image string 				`json:"image"`
	Author string               `json:"author_id"`
	Album  string               `json:"album_id"`
}

func (tracks Tracks) AddTrack(track TrackData){
	_ , err := tracks.collection.InsertOne(tracks.ctx , track)
	if err!=nil { 
		log.Fatal(err)
	}	
}

func (tracks Tracks) GetTrack(title string) TrackData {
	isExist , track := tracks.contains("title" , title)
	if !isExist{
		log.Print("track not exist")
	}
	return track
}

func (item TrackData) ToContentBlock () ContentBlock{
	return ContentBlock{
		Id: item.Id,
		Title: item.Title,
		Description: item.Author,
		Image: item.Image,
	}
}

func (table Tracks) contains(key string, value string) (bool, TrackData) {

	var item TrackData

	filter := bson.M{key: value}

	findRes := table.collection.FindOne(table.ctx, filter)
	findRes.Decode(&item)

	if findRes.Err() == nil {
		return true, item
	} else {
		return false, item
	}
}
