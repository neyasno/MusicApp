
const defaultPath = "http://localhost:5173/"

export enum EPaths{ 
    DEFAULT = defaultPath,
    TRACKS = "/tracks/" , 
    AUTHORS = "/authors/" ,
    ALBUMS = "/albums/" , 
    PLAYLISTS = "/playlists/" , 
    COLLECTIONS = "/collections/" ,
    CATEGORIES = "/categories/" ,
    SEARCH = "/search/" , 
    LOGIN = "/login/" , 
    REGISTRATION = "/registration/" , 
    RESET_PASSWORD = "/login/reset/" ,
    INFO = "/info/"
    
}

const defaultApi = "http://localhost:8080/api/"

export enum EApi{
    DEFAULT = defaultApi , 
    LOGIN = defaultApi + "login" ,
    REGISTRATION = defaultApi + "registration" , 
    CONTENT = defaultApi + "content" , 
    COLLECTIONS = defaultApi + "collections" , 
    AUTHORS = defaultApi + "authors" , 
    ALBUMS = defaultApi + "albums" , 
    PLAYLISTS = defaultApi + "playlists" , 
    TRACKS = defaultApi + "tracks" , 
    USER_PLAYLISTS = defaultApi + "userplaylists"
}
