package database

import (
	"context"
	"log"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type UserData struct {
	Email    string `json:"email"`
	Password string `json:"password"`
	Username string `json:"username"`
}

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

func (users Users) RegisterUser(user UserData) string{

	isUserExist :=  users.Contains("email" , user.Email) || users.Contains("username" , user.Username)

	if( isUserExist ){
		return "USER_ALREADY_EXIST"
	}

	result, err  := users.collection.InsertOne(users.ctx, user)
	if err != nil {
		log.Fatal(err)
	}

	log.Print("user has been added with ID : " , result.InsertedID)
	return "USER_CREATED"
}

func (users Users) LoginUser(user UserData) string {

	isUserExist := users.Contains("email" , user.Email) || users.Contains("username" , user.Username) 

	if ( !isUserExist ){
		log.Print("User not exist")
		return "USER_NOT_EXIST"
	} 

	return "USER_LOGIN"
		
}

func (users Users) Contains( key string , username string ) bool{

	filter := bson.M{ key: username }

	findRes := users.collection.FindOne(users.ctx , filter)

	if (findRes.Err() == nil){
		return true
	} else {
		return false
	}
}
