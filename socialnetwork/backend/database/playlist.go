package database

import (
	"context"

	"go.mongodb.org/mongo-driver/mongo"
)

type Playlists struct {
	collection mongo.Collection
	ctx context.Context
}

func (db Database) Playlists() Playlists {
	return Playlists{
		collection: *db.data.Collection("playlists"),
		ctx: db.ctx,
	}
}

type Playlist struct {
	Title string 
	Items []string // zamena
}

