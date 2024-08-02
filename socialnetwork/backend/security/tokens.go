package security

import (
	"log"

	"github.com/dgrijalva/jwt-go"
)

type Claims struct{
	Username string `json:"username"`
	jwt.StandardClaims
}

func GenerateToken(username string , expiresTime int64) string {

	jwtKey := []byte("a_very_secret_key_that_should_be_long_and_random")

	claims := &Claims{
		Username: username,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt : expiresTime ,
		},

	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256 , claims)
	tokenString , err := token.SignedString(jwtKey)
	if err != nil {
		log.Fatal(err)
	}

	return tokenString
}

// func CheckToken (request *http.Request) (*Claims) {

// 	tokenString := request.Header.Get("Autho")
// 	return

// }