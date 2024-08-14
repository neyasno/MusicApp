package database

import (
	"context"
	"log"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
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
	Title string  `bson:"title" json:"title"`
	Items []ContentLine `bson:"items" json:"items"`
}

type ContentBlock struct{
	Id primitive.ObjectID `bson:"_id,omitempty" json:"id,omitempty"`
	Title string `bson:"title" json:"title"`
	Description string `bson:"description" json:"description"`
	Image string `bson:"image" json:"image"`
}

func (content Content) GetContent (title string) ContentData {
	
	isExist , resultContent := content.contains("title" , title)
	if !isExist{
		log.Print("no such content exist")
	}

	return resultContent
}

func (content Content) AddContent (contentData ContentData){
	_ , err := content.collection.InsertOne(content.ctx , contentData)
	if err != nil {
		log.Print(err)
	}
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



