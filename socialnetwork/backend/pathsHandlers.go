package main

import (
	"backend/database"
	"encoding/json"
	"log"
	"net/http"
)

func LoginHandler(users database.Users)  http.HandlerFunc {

	return func(writer http.ResponseWriter, request *http.Request) {

		params := request.URL.Query()

		user := database.UserData{
			Email: params.Get("email"),
			Password: params.Get("password") ,
		}

		result := users.LoginUser(user)

		log.Print(result)
		writer.Write([]byte(result))
	}

}

func RegistrationHandler(users database.Users) http.HandlerFunc {
	return func(writer http.ResponseWriter, request *http.Request) {

		responseData := initResponseData(writer,request)

		result := users.RegisterUser(responseData)

		log.Print(result)
		writer.Write([]byte(result))
	}

}

func initResponseData( writer http.ResponseWriter, request *http.Request ) database.UserData {

	var responseData database.UserData

	err := json.NewDecoder(request.Body).Decode(&responseData)

	if err != nil {
		http.Error(writer, "Bad request", http.StatusBadRequest)
	}

	return responseData

}