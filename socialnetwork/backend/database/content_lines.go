package database

import (
	"context"
	"log"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type ContentLines struct {
	collection mongo.Collection
	ctx context.Context
}

func (db Database) ContentLines() ContentLines{
	return ContentLines{
		collection: *db.data.Collection("contentlines"),
		ctx: db.ctx,
	}
}

type ContentLine struct {
	Id primitive.ObjectID `bson:"_id,omitempty" json:"id,omitempty"`
	Title   string `bson:"title" json:"title"`
	Type_of string	`bson:"type_of" json:"type_of"`
	Items    []ContentBlock `bson:"items" json:"items"`
}

func (contentLines ContentLines) GetContentLineByTitle(title string) ContentLine{
	isExist , result := contentLines.contains("title" , title);
	if !isExist{
		log.Print("no such contentline exist")
	}
	return result
}

func (contentLines ContentLines) AddContentLine( item ContentLine){
	_ , err := contentLines.collection.InsertOne(contentLines.ctx , item)
	if err!= nil {
		log.Fatal(err)
	}
}

func (table ContentLines) contains(key string, value string) (bool, ContentLine) {

	var item ContentLine

	filter := bson.M{key: value}

	findRes := table.collection.FindOne(table.ctx, filter)
	findRes.Decode(&item)

	if findRes.Err() == nil {
		return true, item
	} else {
		return false, item
	}
}


