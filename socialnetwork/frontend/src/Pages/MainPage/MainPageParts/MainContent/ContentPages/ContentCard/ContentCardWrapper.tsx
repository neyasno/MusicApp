import { useLocation } from "react-router-dom"
import ContentCard from "./ContentCard"
import { useEffect, useState } from "react"
import axios from "axios"

  type TAuthor = {
    _id : string , 
    image : string , 
    title : string , 
    description : string , 
  }
  
export  type TTrack = {
    _id : string , 
    title : string , 
    image : string , 
    genre : string , 
    duration : string , 
    author : string , 
    author_id:string , 
    album_id: string ,
    album : string , 
    filename : string , 
  }
  
  type TPlaylist = {
    _id:string , 
    title : string ,
    image : string ,
    items : TTrack[] ,
  }
  
  type TAlbum = {
    _id : string , 
    title : string , 
    author:string ,
    image : string , 
    items : TTrack[] ,
  }

export default function ContentCardWrapper() {

    const [cardData , setCardData] = useState<TAlbum | TAuthor | TPlaylist| TTrack>()
    const [description , setDescription] = useState("")
    const [tracks , setTracks] = useState<TTrack[] | undefined>()
 
    const location = useLocation()
    const url = "http://localhost:8080/api" + location.pathname
  
    let cardType = getCardTypeByPath(location.pathname)


    useEffect(()=>{

        axios.get(url).then((resp)=>{
          console.log(resp.data)
            setDescription(getDescription(resp.data , cardType))
            setCardData(resp.data)
            getTracks(resp.data, cardType).then( (tracks) => setTracks(tracks));
        })

    } , [])
  return (
    <>
    {cardData && (
        <ContentCard 
          id={cardData._id} 
          title={cardData.title} 
          image={cardData.image} 
          type={cardType} 
          description={description}
          tracks = {tracks!}
        />
    )}
    </>
  )
}

const getCardTypeByPath = (path : string)=>{

    const pathParts = path.split("/")
  
    switch(pathParts[1]){
      case "authors":{
        return "Автор"
      }
      case "playlists":{
        return "Плейлист"
      }
      case "albums":{
        return "Альбом"
      }
      case "tracks":{
        return "Трек"
      }
      default:{
        return ""
      }
    }
}

const getDescription = (data : TAlbum | TAuthor | TPlaylist| TTrack | undefined , type : string) =>{
    switch(type){
        case "Автор":{
            let author = data as TAuthor
            return author.description
          }
          case "Плейлист":{
            const playlist = data as TPlaylist
            return "" + playlist.items.length + " треков"
          }
          case "Альбом":{
            const album = data as TAlbum
            return album.author
          }
          case "Трек":{
            const track = data as TTrack
            return track.author + "  " + track.album + "  " + track.genre  + "  " + track.duration 
          }
          default:{
            return ""
          }
    }
} 

const getTracks = async (data : TAlbum | TAuthor | TPlaylist| TTrack | undefined , type : string) => {
    switch(type){
        case "Автор":{
            let author = data as TAuthor
            const url = "http://localhost:8080/api/tracks"
            const response = await axios.get(url , {params:{ author : author.title }});
            console.log(response.data)
            return response.data as TTrack[];
          }
          case "Плейлист":{
            const playlist = data as TPlaylist
            return playlist.items
          }
          case "Альбом":{
            const album = data as TAlbum
            return album.items
          }
          case "Трек":{
            const track = data as TTrack
            return [track]
          }
          default:{
            return []
          }
    }
}