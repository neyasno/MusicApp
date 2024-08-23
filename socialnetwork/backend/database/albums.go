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

type Albums struct {
	collection mongo.Collection
	ctx context.Context
}

func (db Database) Albums() Albums {
	return Albums{
		collection: *db.data.Collection("albums"),
		ctx: db.ctx,
	}
}

type AlbumData struct{
	Id primitive.ObjectID `bson:"_id,omitempty" json:"id,omitempty"`
	Title    string             `json:"title"`
	Image string 				`json:"image"`
	Author string               `json:"author"`
	AuthorId string				`bson:"author_id" json:"author_id"`
	Items [] TrackData `json:"items"`
}

func (item AlbumData) ToContentBlock () ContentBlock{
	return ContentBlock{
		Id: item.Id,
		Title: item.Title,
		Description: item.Author,
		Image: item.Image,
	}
}

func (albums Albums) AddAlbum(album AlbumData){
	_ , err := albums.collection.InsertOne(albums.ctx , album)
	if err != nil {
		log.Fatal("album not created")
	}
}

func (albums Albums) GetAlbum(id string) AlbumData {
	
	objID , err := primitive.ObjectIDFromHex(id)
	if err!=nil{
		log.Fatal('!')
	}

	isExist , album := albums.contains("_id" , objID)
	if !isExist{
		log.Print("ALBUM NOT EXIST")
	}
	return album
}

func (albums Albums) GetRandomAlbum() AlbumData {
	
	cursor , err := albums.collection.Find(albums.ctx , bson.M{})
	if err!=nil{
		log.Fatal("Err:Albums-rand")
	}
	defer cursor.Close(albums.ctx)
	
	var albumList []AlbumData

	if err := cursor.All(albums.ctx , &albumList); err!=nil{
		log.Fatal("Err : cursor")
	}

	rand.NewSource(time.Now().UnixNano())

	return albumList[rand.Intn(len(albumList))]
}

func (table Albums) contains(key string, value interface{}) (bool, AlbumData) {

	var item AlbumData

	filter := bson.M{key: value}

	findRes := table.collection.FindOne(table.ctx, filter)
	findRes.Decode(&item)

	if findRes.Err() == nil {
		return true, item
	} else {
		return false, item
	}
}