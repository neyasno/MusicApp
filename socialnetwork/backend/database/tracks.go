package database

import (
	"context"
	"fmt"
	"io"
	"log"
	"math/rand"
	"os"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/gridfs"
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
	Id        primitive.ObjectID `bson:"_id,omitempty" json:"id,omitempty"`
	Title     string             `json:"title"`
	Filename  string             `json:"filename"`
	Duration  string             `json:"duration"`
	Genre     string             `json:"genre"`
	Image     string             `json:"image"`
	Author    string             `json:"author"`
	Author_ID string             `bson:"author_id" json:"author_id"`
}

func (tracks Tracks) AddTrack(track TrackData) {
	_, err := tracks.collection.InsertOne(tracks.ctx, track)
	if err != nil {
		log.Fatal(err)
	}
}

func (tracks Tracks) GetTrack(id string) TrackData {
	
	objID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		log.Fatal('!')
	}

	isExist, track := tracks.contains("_id", objID)
	log.Print(track.Author)
	if !isExist {
		log.Print("track not exist")
	}
	return track
}

func (tracks Tracks) GetTracksByAuthor(authorName string) []TrackData {

	var items []TrackData
	log.Print(authorName, " - - - ")

	cursor, err := tracks.collection.Find(tracks.ctx, bson.M{"author": authorName})
	if err != nil {
		log.Print("track with author not exist")
		return items
	}
	defer cursor.Close(tracks.ctx)

	for cursor.Next(tracks.ctx) {
		var track TrackData
		if err := cursor.Decode(&track); err != nil {
			log.Print("Error track decode")
			continue
		}
		items = append(items, track)

	}

	return items
}

func (tracks Tracks) GetRandomTrackByAuthor(authorName string) TrackData {

	cursor, _ := tracks.collection.Find(tracks.ctx, bson.M{"author": authorName})

	defer cursor.Close(tracks.ctx)

	var allTracks []TrackData
	cursor.All(tracks.ctx, &allTracks)

	rand.NewSource(time.Now().UnixNano())
	randIndex := rand.Intn(len(allTracks))
	return allTracks[randIndex]
}

func (tracks Tracks) GetRandomTrack() TrackData {

	cursor, _ := tracks.collection.Find(tracks.ctx, bson.M{})

	defer cursor.Close(tracks.ctx)

	var allTracks []TrackData
	cursor.All(tracks.ctx, &allTracks)

	rand.NewSource(time.Now().UnixNano())

	return allTracks[rand.Intn(len(allTracks))]
}

func (item TrackData) ToContentBlock() ContentBlock {
	return ContentBlock{
		Id:          item.Id,
		Title:       item.Title,
		Description: item.Author,
		Image:       item.Image,
	}
}

func (table Tracks) contains(key string, value interface{}) (bool, TrackData) {

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

func AddAudio(db Database) {
	bucket, err := gridfs.NewBucket(db.GetData())
	if err != nil {
		log.Fatal(err)
	}

	audiofile, err := os.Open("C:\\Users\\neyasno\\Documents\\Git\\MusicApp\\socialnetwork\\frontend\\public\\222.mp3")
	if err != nil {
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

func GetAudio(filename string, db Database) *os.File {

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
