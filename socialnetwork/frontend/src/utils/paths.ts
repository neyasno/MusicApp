
const defaultPath = "http://localhost:5173/"

enum EPaths{ 
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

export default EPaths