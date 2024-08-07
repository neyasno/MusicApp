package security

import (
	"fmt"
	"log"

	"github.com/dgrijalva/jwt-go"
)

type Claims struct{
	Username string `json:"username"`
	jwt.StandardClaims
}

func GenerateToken(username string , expiresTime int64) string {

	jwtKey := []byte("fmsdp23n5fndopsamfpom32mfsdf230f9dfosdmfsd1111sfsd")

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

func CheckToken (tokenString string) (*Claims, error){

	jwtKey := []byte("fmsdp23n5fndopsamfpom32mfsdf230f9dfosdmfsd1111sfsd")

	claims := &Claims{}
	token , err := jwt.ParseWithClaims(tokenString , claims , func(token *jwt.Token) (interface{}, error) {

		if _ , ok := token.Method.(*jwt.SigningMethodHMAC); !ok{
			return nil , fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		} 
		return jwtKey, nil
	})

	if err != nil {
        return nil, err
    }

	if !token.Valid {
        return nil, fmt.Errorf("invalid token")
    }

	return claims, nil

}