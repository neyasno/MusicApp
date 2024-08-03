package database

import (
	"context"

	"go.mongodb.org/mongo-driver/mongo"
)

type TrackData struct {
	Title    string `json:"title"`
	Duration string `json:"duration"`
	AuthorId string `json:"author_id"`
	AlbumId string `json:"album_id"`
}

type Tracks struct {
	collection mongo.Collection
	ctx        context.Context
}

