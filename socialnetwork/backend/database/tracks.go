package database

import (
	"context"

	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type TrackData struct {
	Id       primitive.ObjectID `json:"id,omitempty"`
	Title    string             `json:"title"`
	Duration string             `json:"duration"`
	AuthorId string             `json:"author_id"`
	AlbumId  string             `json:"album_id"`
}

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
