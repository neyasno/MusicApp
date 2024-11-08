import { useContext, useEffect } from "react";
import { ActionContext } from "../../../../../../App";
import { TPlaylistPortative } from "../../../MainContent/MainContentComponents/PlaylistPortative";

export default function MediaRecomendationBlock({func , playlists}:{func:Function , playlists : TPlaylistPortative[]}){
    console.log(playlists)
    const setActionVisability = useContext(ActionContext);
  
    return(
      <div className="bg-main_ll_black rounded-lg p-4 text-main_WHITE">
              <h3 className="text-lg">Создай свой первый плейлист</h3>
              <button className="bg-main_l_black text-main_WHITE rounded-full py-2 px-4 mt-5 border-1 border-main_WHITE
                 hover:bg-main_d_black hover:text-main_WHITE hover:border-1 hover:border-main_WHITE"
                 onClick={(action)=>{ func(action , setActionVisability) ;}}>Создать плейлист</button>
        </div>
    )
}
