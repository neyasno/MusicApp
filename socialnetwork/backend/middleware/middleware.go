package middleware

import (
	"backend/security"
	"log"
	"net/http"
)

func WithMiddleware(next http.HandlerFunc) http.HandlerFunc {
	next = logMiddleware(next)
	next = corsMiddleware(next)
	return next
}

func WithTokenMiddleware(next http.HandlerFunc) http.HandlerFunc {
	next = logMiddleware(next)
	next = corsMiddleware(next)
	next = tokenMiddleware(next)
	return next
}


func corsMiddleware(next http.HandlerFunc) http.HandlerFunc {
	return func(writer http.ResponseWriter, request *http.Request) {
		writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:5173")
		writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		writer.Header().Set("Access-Control-Allow-Credentials", "true")

		if request.Method == "OPTIONS" {
			writer.WriteHeader(http.StatusOK)
			return
		}

		next(writer, request)
	}
}

func logMiddleware(next http.HandlerFunc) http.HandlerFunc {
	return func(writer http.ResponseWriter, request *http.Request) {
		
		log.Print(request.RemoteAddr)

		next(writer, request)
	}
}

func tokenMiddleware(next http.HandlerFunc) http.HandlerFunc {
	return func(writer http.ResponseWriter, request *http.Request) {
		params := request.URL.Query()
		token := params.Get("token")
		claims , err := security.CheckToken(token)
		if err!=nil{
			writer.WriteHeader(http.StatusUnauthorized)
			return
		}
		request.Header.Add("username" , claims.Username)

		next(writer,request)
	}
}

