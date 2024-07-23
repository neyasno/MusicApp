import ActionCreatePlaylist from "./ActionPages/ActionCreatePlaylist";
import ActionVerification from "./ActionPages/ActionVerification";
import { EActionPages } from "./ActionPageTypes";

export default function ActionPages({isVisible , setVisability , actionPage}:{isVisible:boolean , setVisability : Function , actionPage:EActionPages }) {

  let visible = "";

  if (isVisible){
    visible = "" ;
  }
  else{
    visible=" hidden";
  }

  let renderActionPage = () =>{

    switch(actionPage){
      case(EActionPages.VERIFICATION):{
        return <ActionVerification></ActionVerification>
      }
      case(EActionPages.CREATE_PLAYLIST):{
        return <ActionCreatePlaylist></ActionCreatePlaylist>
      }
    }

  }

  return (
    <div className={"absolute top-0 left-0 w-full h-full bg-action_shadow flex justify-center items-center" + visible }
         onClick={()=>{setVisability(false)}}>
      <div className="bg-main_black rounded-lg text-main_WHITE w-5/12" onClick={(action)=>{ action.stopPropagation()}}>
        {renderActionPage()}
      </div>
    </div>
  )
}
