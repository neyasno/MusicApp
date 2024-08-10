package database

import (
	"context"
	"log"

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
	Description string `bson:"description" json:"description"`
	Image string `bson:"image" json:"image"`
}

func (authors Authors) AddAuthor (author AuthorData){

	_ , err := authors.collection.InsertOne(authors.ctx , author)
	if err!=nil {
		log.Fatal(err)
	}
}

func (authors Authors) GetAuthor ( id string ) AuthorData {
	isExist , author := authors.contains("id" , id)

	if !isExist{
		log.Print("not exis author")
	}

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

func (table Authors) contains(key string, value string) (bool, AuthorData) {

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