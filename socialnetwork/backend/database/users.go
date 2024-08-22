package database

import (
	"backend/security"
	"context"
	"log"
	"net/http"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type Users struct {
	collection mongo.Collection
	ctx        context.Context
}

func (db Database) Users() Users {
	return Users{
		collection: *db.data.Collection("users"),
		ctx:        db.ctx,
	}
}

func (users Users) RegisterUser(user UserData) int {

	isUserEmailExist, _ := users.contains("email", user.Email)
	isUserUsernameExist, _ := users.contains("username", user.Username)

	if isUserEmailExist || isUserUsernameExist {
		return http.StatusConflict
	}

	user.Playlists = []PlaylistData{}

	_, err := users.collection.InsertOne(users.ctx, user)
	if err != nil {
		log.Fatal(err)
		return http.StatusInternalServerError
	}

	return http.StatusCreated
}

func (users Users) LoginUser(user UserData) (int, string) {

	isUserExist, result := users.contains("email", user.Email)

	if !isUserExist {
		return http.StatusNotFound, ""
	}

	if result.Password != user.Password {
		return http.StatusConflict, ""
	}

	expiresTime := time.Now().Add(20 * time.Minute)
	token := security.GenerateToken(result.Username, expiresTime.Unix())

	return http.StatusOK, token
}

func (users Users) GetUser(username string) *UserData{
	isExist , user := users.contains("username" , username)
	if !isExist {
		log.Print("user not exist")
	}
	return user
}

func (table Users) contains(key string, value string) (bool, *UserData) {

	var item UserData

	filter := bson.M{key: value}

	findRes := table.collection.FindOne(table.ctx, filter)
	findRes.Decode(&item)

	if findRes.Err() == nil {
		return true, &item
	} else {
		return false, &item
	}
}
