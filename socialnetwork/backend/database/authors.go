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

type Authors struct {
	collection mongo.Collection
	ctx context.Context
}

func (db Database) Authors() Authors {
	return Authors{
		collection: *db.data.Collection("authors"),
		ctx:        db.ctx,
	}
}

type AuthorData struct{
	Id primitive.ObjectID `bson:"_id,omitempty" json:"id,omitempty"`
	Title string `bson:"title" json:"title"`
	Image string `bson:"image" json:"image"`
}

func (authors Authors) AddAuthor (author AuthorData){

	_ , err := authors.collection.InsertOne(authors.ctx , author)
	if err!=nil {
		log.Fatal(err)
	}
}

func (authors Authors) GetAuthor ( id string ) AuthorData {
	objID , err := primitive.ObjectIDFromHex(id)
	if err!=nil{
		log.Fatal('!')
	}

	isExist , author := authors.contains("_id" , objID)

	if !isExist{
		log.Print("not exis author")
	}

	return author
}

func (authors Authors) GetRandomAuthor () AuthorData {
	var author AuthorData

	cursor, err := authors.collection.Find(authors.ctx, bson.M{})
    if err != nil {
        log.Printf("Failed to find authors: %v", err)
        return author
    }
    defer cursor.Close(authors.ctx)

    var authorsList []AuthorData
    if err = cursor.All(authors.ctx, &authorsList); err != nil {
        log.Printf("Failed to decode authors: %v", err)
        return author
    }

    if len(authorsList) == 0 {
        log.Print("No authors found")
        return author
    }

    rand.NewSource(time.Now().UnixNano())
    randomIndex := rand.Intn(len(authorsList))
    author = authorsList[randomIndex]

    return author
}

func (item AuthorData) ToContentBlock () ContentBlock{
	return ContentBlock{
		Id: item.Id,
		Title: item.Title,
		Description: "",
		Image: item.Image,
	}
}

func (table Authors) contains(key string, value interface{}) (bool, AuthorData) {

	var item AuthorData

	filter := bson.M{key: value}

	findRes := table.collection.FindOne(table.ctx, filter)
	findRes.Decode(&item)

	if findRes.Err() == nil {
		return true, item
	} else {
		return false, item
	}
}