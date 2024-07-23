import LanguageButton from "./MainPageMedia/LanguageButton";
import MediaHeader from "./MainPageMedia/MediaHeader"
import MediaNavigation from "./MainPageMedia/MediaNavigation";
import MediaPlaylists from "./MainPageMedia/MediaPlaylists"


export default function MainPageMedia() {
  return (
    <div className="flex flex-col p-2 mt-2 rounded-lg bg-main_black text-main_l_grey font-bold h-full w-full">
        <MediaHeader openPlaylistCreateWindow={openPlaylistCreateWindow}></MediaHeader>
        <MediaPlaylists openPlaylistCreateWindow={openPlaylistCreateWindow}></MediaPlaylists>
        <MediaNavigation ></MediaNavigation>
        <LanguageButton></LanguageButton>
    </div>
  )
}

const openPlaylistCreateWindow = ( action:React.MouseEvent<HTMLButtonElement, MouseEvent> , setActionVisability : Function) =>{
  
  action.preventDefault();
  setActionVisability(true);

}


