import { useContext, useEffect, useState } from "react";
import { LoginStatusContext } from "../../../../../App";
import MediaRecomendationBlock from "./UserMediaLibrary/RecomendationBlock";
import Playlists from "./UserMediaLibrary/Playlists";
import axios from "axios";
import { EApi } from "../../../../../utils/paths";
import getCookieValue from "../../../../../utils/cookie";
import { TPlaylistPortative } from "../../MainContent/MainContentComponents/PlaylistPortative";

export type MediaPlaylistsProps={
  playlists : TPlaylistPortative[] ,  
  setPlaylists : Function , 
  func:Function , 
}

export default function MediaPlaylists({playlists , setPlaylists , func}: MediaPlaylistsProps) {

  const loginContext = useContext(LoginStatusContext)

  useEffect( ()=>{
    axios.get(EApi.USER_PLAYLISTS,{params:{token: getCookieValue("token")}}).then((resp)=>{
      if (resp.data.length){
        setPlaylists(resp.data)
      }
    })
  },[])
  
  const renderPlaylists = () => {
    if(loginContext?.isLoggedIn && playlists.length){

      return <Playlists playlists={playlists}></Playlists> 
      
    }
    else {
      return <MediaRecomendationBlock playlists={playlists} func={func}></MediaRecomendationBlock>
    }
  }

  return(
    renderPlaylists()
  )
}
