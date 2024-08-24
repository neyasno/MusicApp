import { useLocation } from "react-router-dom"
import ContentCard from "./ContentCard"
import { useEffect, useState } from "react"
import axios from "axios"
import EmptyPage from "../../MainContentComponents/EmptyPage"
import { EApi } from "../../../../../../utils/paths"

  type TAuthor = {
    id : string , 
    image : string , 
    title : string , 
  }
  
export  type TTrack = {
    id : string , 
    title : string , 
    image : string , 
    genre? : string , 
    duration : string , 
    author : string , 
    author_id?:string , 
    filename? : string , 
  }
  
  type TPlaylist = {
    id:string , 
    title : string ,
    image : string ,
    items : TTrack[] ,
  }
  
  type TAlbum = {
    id : string , 
    title : string , 
    author:string ,
    author_id:string ,
    image : string , 
    items : TTrack[] ,
  }

export default function ContentCardWrapper() {

    const [cardData , setCardData] = useState<TAlbum | TAuthor | TPlaylist| TTrack>()
    const [description , setDescription] = useState("")
    const [tracks , setTracks] = useState<TTrack[] | undefined>()
 
    const location = useLocation().pathname.replace('/',"")
    const url = EApi.DEFAULT + location
    let cardType = getCardTypeByPath(location)


    useEffect(()=>{

        axios.get(url).then((resp)=>{
            setDescription(getDescription(resp.data , cardType))
            setCardData(resp.data)
            getTracks(resp.data, cardType).then( (tracks) => setTracks(tracks));
        })

    } , [location])
  return (
    <>
    {cardData && (
        <ContentCard 
          id={cardData.id} 
          title={cardData.title} 
          image={cardData.image} 
          type={cardType} 
          description={description}
          tracks = {tracks!}
        />
    )}
    {!cardData && <EmptyPage/>}
    </>
  )
}

const getCardTypeByPath = (path : string)=>{
  const pathType = path.split("/")[0] 
    switch(pathType){
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
            return ""
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
            return track.author + "  " + track.genre  + "  " + track.duration 
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
            const url = EApi.TRACKS
            const response = await axios.get(url , {params:{ author : author.title }});
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