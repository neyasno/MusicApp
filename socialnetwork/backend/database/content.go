package database

import (
	"context"
	"log"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type Content struct {
	collection mongo.Collection
	ctx context.Context
}

func (db Database) Content() Content {

	return Content{
		collection: *db.data.Collection("content"),
		ctx:        db.ctx,
	}
}

type ContentData struct{
	title string
	data []ContentLine
}

type ContentBlock struct{
	Id string
	title string 
	description string
	img string
}

type ContentUnit interface{
	GetTitle() string
	GetDescription() string
	GetImage() string
	GetId() string
}

func (content Content) GetContent (title string) ContentData {
	
	isExist , resultContent := content.contains("title" , title)
	if !isExist{
		log.Print("no such content exist")
	}

	return resultContent

}

func (content Content) contains(key string, value string) (bool, ContentData) {

	var item ContentData

	filter := bson.M{key: value}

	findRes := content.collection.FindOne(content.ctx, filter)
	findRes.Decode(&item)

	if findRes.Err() == nil {
		return true, item
	} else {
		return false, item
	}
}



