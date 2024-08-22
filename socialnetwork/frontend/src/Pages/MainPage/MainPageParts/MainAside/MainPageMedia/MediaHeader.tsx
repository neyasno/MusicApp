import { useContext } from "react";
import { ActionContext } from "../../../../../App";

export default function MediaHeader({func , setPlaylists}:{func:Function , setPlaylists : Function}) {

  const setAction = useContext(ActionContext);

    return(
        <div className="flex justify-between p-4">
              <div className="flex items-center">
                <div>
                  <svg className="fill-main_l_grey" data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" height='30'>
                    <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
                  </svg>
                </div>
                <h3 className="pl-3">Моя медиатека</h3>
              </div>
              <button onClick={(action)=>{
                func(action , setAction)
                }}>
                <div className=" hover:bg-main_dd_black rounded-full font-light p-1">
                  <svg className="fill-main_l_grey" width="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2"/></svg>
                </div>
              </button>
            </div>
      )
}
