import MediaLanguage from "./MainPageMedia/MediaLanguage";
import MediaHeader from "./MainPageMedia/MediaHeader"
import MediaNavigation from "./MainPageMedia/MediaNavigation";
import MediaPlaylists from "./MainPageMedia/MediaPlaylists"
import { EActionPages } from "../../../ActionPageTypes";
import { TPlaylistPortative } from "../MainContent/MainContentComponents/PlaylistPortative";
import { useContext, useState } from "react";
import { LoginStatusContext } from "../../../../App";


export default function MainPageMedia() {

  const { isLoggedIn , setLoggedIn } = useContext(LoginStatusContext)
  const [playlists , setPlaylists] = useState<TPlaylistPortative[]>([])

  return (
    <div className="flex flex-col p-2 rounded-lg bg-main_black text-main_l_grey font-bold w-full h-full">
        <MediaHeader func={isLoggedIn? openPlaylistCreateWindow : openRegistrationWindow}/>
        <MediaPlaylists playlists={playlists} 
                        setPlaylists={setPlaylists}
                        func={isLoggedIn? openPlaylistCreateWindow : openRegistrationWindow} />
        <MediaNavigation/>
    </div>
  )
}

const openPlaylistCreateWindow = ( action:React.MouseEvent<HTMLButtonElement, MouseEvent> , setAction : Function) =>{
  
  action.preventDefault();
  setAction(EActionPages.CREATE_PLAYLIST);

}
const openRegistrationWindow = ( action:React.MouseEvent<HTMLButtonElement, MouseEvent> , setAction : Function) =>{
  
  action.preventDefault();
  setAction(EActionPages.VERIFICATION);

}

