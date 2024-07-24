import { useContext } from "react";
import { ActionContext } from "../../../../../../App";

export default function MediaRecomendationBlock({func}:{func:Function}){

    const setActionVisability = useContext(ActionContext);
  
    return(
      <div className="bg-neutral-800 rounded-lg p-4 text-main_WHITE">
              <h3 className="text-lg">Создай свой первый плейлист</h3>
              <p className="mt-2">Это совссем не сложно! Мы поможем.</p>
              <button className="bg-main_WHITE text-main_BLACK rounded-full py-2 px-4 mt-5 border-1 border-main_WHITE
                 hover:bg-main_l_black hover:text-main_WHITE hover:border-1 hover:border-main_WHITE"
                 onClick={(action)=>{ func(action , setActionVisability) }}>Создать плейлист</button>
        </div>
    )
}
