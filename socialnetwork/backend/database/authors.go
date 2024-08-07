package database

import (
	"context"
	"log"

	"go.mongodb.org/mongo-driver/bson"
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

type Author struct{
	Id string
	Title string
	Description string
	Img string
}

func (authors Authors) AddAuthor (author Author){
	authors.collection.InsertOne(authors.ctx , author)
}

func (authors Authors) GetAuthor ( id string ) Author {
	isExist , author := authors.contains("id" , id)

	if !isExist{
		log.Print("not exis author")
	}

	return author
}

func (table Authors) contains(key string, value string) (bool, Author) {

	var item Author

	filter := bson.M{key: value}

	findRes := table.collection.FindOne(table.ctx, filter)
	findRes.Decode(&item)

	if findRes.Err() == nil {
		return true, item
	} else {
		return false, item
	}
}

func (author Author) GetId() string { return author.Id}
func (author Author) GetTitle() string { return author.Title}
func (author Author) GetDescription() string { return author.Description}
func (author Author) GetImage() string { return author.Img}