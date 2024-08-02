import { useContext } from "react";
import { ActionContext, LoginStatusContext } from "../../../../../App";
import MediaRecomendationBlock from "./UserMediaLibrary/RecomendationBlock";
import Playlists from "./UserMediaLibrary/Playlists";
import { ITrackPortative } from "../../MainContent/MainContentComponents/TrackComponents/TrackPortative";

export default function MediaPlaylists({func}:{func:Function}) {

  const loginContext = useContext(LoginStatusContext)
    
  const playlists: ITrackPortative[] = [
    { 
        title:"Мой плейлист",
        img:"https://i.scdn.co/image/ab67616d00001e02ca7d1cfaf54216f536665f91" , 
        link:"" ,
        time : "1:20:42" ,
    },
    { 
        title:"Мой плейлист",
        img:"https://i.scdn.co/image/ab67616d00001e02ca7d1cfaf54216f536665f91" , 
        link:"" ,
        time : "1:20:42" ,
    },
    { 
        title:"Мой плейлист",
        img:"https://i.scdn.co/image/ab67616d00001e02ca7d1cfaf54216f536665f91" , 
        link:"" ,
        time : "1:20:42" ,
    },
    { 
        title:"Мой плейлист",
        img:"https://i.scdn.co/image/ab67616d00001e02ca7d1cfaf54216f536665f91" , 
        link:"" ,
        time : "1:20:42" ,
    },
  ] 
  
  const renderPlaylists = () => {
    if(loginContext?.isLoggedIn){

      //  Запрос плейлистов 
      return <Playlists playlists={playlists}></Playlists> 
      
    }
    else{
      return <MediaRecomendationBlock func={func}></MediaRecomendationBlock>
    }
  }

  return(
    renderPlaylists()
  )
}
