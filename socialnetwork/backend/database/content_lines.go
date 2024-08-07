package database

import (
	"context"
	"log"

	"go.mongodb.org/mongo-driver/bson"
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
	Title   string
	Type_of string
	Link    string
	Data    []ContentUnit
}

func (contentLines ContentLines) GetContentLine(title string) ContentLine{
	isExist , result := contentLines.contains("title" , title);
	if !isExist{
		log.Print("no such contentline exist")
	}
	return result
}

func (contentLines ContentLines) AddContentLine( item ContentLine){
	contentLines.collection.InsertOne(contentLines.ctx , item)
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


