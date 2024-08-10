package database

import (
	"context"
	"log"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Database struct{
	data mongo.Database
	client mongo.Client
	ctx context.Context
}

func (db Database) Disconnect(){
	if err := db.client.Disconnect(db.ctx); err !=nil{
		log.Fatal(err)
	}
}

func InitDatabase(ctx context.Context) Database {

	client_options := options.Client().ApplyURI("mongodb://localhost:27017")

	mongoClient, err := mongo.Connect(ctx, client_options)
	if err != nil {
		log.Fatal(err)
	}

	db := Database{
		data:       *mongoClient.Database("trackkster"),
		client: *mongoClient,
	}

	return db
}

func (db Database) GetData() *mongo.Database{
	return &db.data
}