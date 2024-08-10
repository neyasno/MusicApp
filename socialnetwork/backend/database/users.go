package database

import (
	"backend/security"
	"context"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type Users struct {
	collection mongo.Collection
	ctx        context.Context
}

type UserData struct {
	Id        primitive.ObjectID `json:"id,omitempty"`
	Email     string             `json:"email"`
	Password  string             `json:"password"`
	Username  string             `json:"username"`
	Playlists []PlaylistData          `json:"playlists"`
}

func (db Database) Users() Users {
	return Users{
		collection: *db.data.Collection("users"),
		ctx:        db.ctx,
	}
}

func (users Users) RegisterUser(user UserData) string {

	isUserEmailExist, _ := users.contains("email", user.Email)
	isUserUsernameExist, _ := users.contains("username", user.Username)

	if isUserEmailExist || isUserUsernameExist {
		return "USER_ALREADY_EXIST"
	}

	result, err := users.collection.InsertOne(users.ctx, user)
	if err != nil {
		log.Fatal(err)
	}

	log.Print("user has been added with ID : ", result.InsertedID)
	return "USER_CREATED"
}

func (users Users) LoginUser(user UserData) (string, string) {

	isUserExist, item := users.contains("email", user.Email)

	if !isUserExist {
		return "USER_NOT_EXIST", ""
	}

	if item.Password != user.Password {
		return "USER_PASSWORD_FALSE", ""
	}

	expiresTime := time.Now().Add(20 * time.Minute)
	token := security.GenerateToken(item.Username, expiresTime.Unix())

	return "USER_LOGIN", token

}

func (users Users) GetUser(username string) UserData{
	isExist , user := users.contains("username" , username)
	if !isExist {
		log.Print("user not exist")
	}
	return user
}

func (user *UserData) AddPlaylist (playlist PlaylistData){
	user.Playlists = append(user.Playlists, playlist)
}

func (user UserData) GetPlaylists () []PlaylistData{
	return user.Playlists
}



func (table Users) contains(key string, value string) (bool, UserData) {

	var item UserData

	filter := bson.M{key: value}

	findRes := table.collection.FindOne(table.ctx, filter)
	findRes.Decode(&item)

	if findRes.Err() == nil {
		return true, item
	} else {
		return false, item
	}
}
