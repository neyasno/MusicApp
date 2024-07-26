import MediaLanguage from "./MainPageMedia/MediaLanguage";
import MediaHeader from "./MainPageMedia/MediaHeader"
import MediaNavigation from "./MainPageMedia/MediaNavigation";
import MediaPlaylists from "./MainPageMedia/MediaPlaylists"
import { EActionPages } from "../../../ActionPageTypes";


export default function MainPageMedia() {
  return (
    <div className="flex flex-col p-2 mt-2 rounded-lg bg-main_black text-main_l_grey font-bold h-full w-full">
        <MediaHeader func={openPlaylistCreateWindow}></MediaHeader>
        <MediaPlaylists func={openPlaylistCreateWindow}></MediaPlaylists>
        <MediaNavigation ></MediaNavigation>
        <MediaLanguage></MediaLanguage>
    </div>
  )
}

const openPlaylistCreateWindow = ( action:React.MouseEvent<HTMLButtonElement, MouseEvent> , setAction : Function) =>{
  
  action.preventDefault();
  setAction(EActionPages.CREATE_PLAYLIST);

}


