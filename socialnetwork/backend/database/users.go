package database

import (
	"backend/security"
	"context"
	"log"
	"time"

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

	isUserEmailExist , _ :=  users.Contains("email" , user.Email)
	isUserUsernameExist , _ :=  users.Contains("username" , user.Username)

	if( isUserEmailExist || isUserUsernameExist ){
		return "USER_ALREADY_EXIST"
	}

	result, err  := users.collection.InsertOne(users.ctx, user)
	if err != nil {
		log.Fatal(err)
	}

	log.Print("user has been added with ID : " , result.InsertedID)
	return "USER_CREATED"
}

func (users Users) LoginUser(user UserData) (string , string){

	log.Print("user start login ")

	isUserExist , item := users.Contains("email" , user.Email)

	if ( !isUserExist ){
		return "USER_NOT_EXIST" , ""
	} 

	if ( item.Password != user.Password){
		return "USER_PASSWORD_FALSE" , ""
	}

	expiresTime := time.Now().Add(2*time.Minute)
	token := security.GenerateToken(item.Username , expiresTime.Unix())

	return "USER_LOGIN" , token
		
}

func (users Users) Contains( key string , value string ) ( bool , UserData ){

	var item UserData 

	filter := bson.M{ key: value }

	log.Print("user start FIND ")

	findRes := users.collection.FindOne(users.ctx , filter)

	log.Print("user start decode ")

	findRes.Decode(&item)

	log.Print("user start END decode ")

	if (findRes.Err() == nil){
		return true , item
	} else {
		return false , item
	}
}
