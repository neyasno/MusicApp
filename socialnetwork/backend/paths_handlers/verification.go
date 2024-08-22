package pathshandlers

import (
	"backend/database"
	"encoding/json"
	"net/http"
)

func TokenHandler() http.HandlerFunc {
	return func(writer http.ResponseWriter, request *http.Request) {
		writer.WriteHeader(http.StatusOK)
	}

}

func RegistrationHandler(users database.Users) http.HandlerFunc {
	return func(writer http.ResponseWriter, request *http.Request) {

		var responseData database.UserData

		err := json.NewDecoder(request.Body).Decode(&responseData)
		if err != nil {
			http.Error(writer, "Bad request", http.StatusBadRequest)
		}

		responseStatus := users.RegisterUser(responseData)

		writer.WriteHeader(responseStatus)
	}

}

func LoginHandler(users database.Users) http.HandlerFunc {

	return func(writer http.ResponseWriter, request *http.Request) {

		params := request.URL.Query()

		user := database.UserData{
			Email:    params.Get("email"),
			Password: params.Get("password"),
		}

		resultStatus, token := users.LoginUser(user)

		writer.WriteHeader(resultStatus)
		json.NewEncoder(writer).Encode(map[string]string{
			"token": token,
		})
	}

}