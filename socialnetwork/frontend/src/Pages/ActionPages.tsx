
import ActionVerification from "./ActionPages/ActionVerification";
import { EActionPages } from "./ActionPageTypes";
import ActionWrapper from "./ActionPages/ActionComponents/ActionWrapper";
import ActionCreatePlaylist from "./ActionPages/ActionCreatePlaylist";
import ActionRegistration from "./ActionPages/ActionRegistration";

export default function ActionPages({setAction , actionPage}:{setAction : Function , actionPage:EActionPages }) {

  let renderActionPage = () =>{

    switch(actionPage){
      case(EActionPages.NONE):{
        return(
          <div></div>
        )
      }
      case(EActionPages.VERIFICATION):{
        return (
          <ActionWrapper setAction={setAction} >
            <ActionVerification/>
          </ActionWrapper>
        )
      }
      case(EActionPages.CREATE_PLAYLIST):{
        return (
          <ActionWrapper setAction={setAction} >
            <ActionCreatePlaylist/>
          </ActionWrapper>
        )
      }
      case(EActionPages.REGISTRATION_SURESUFULL):{
        return(
          <ActionWrapper setAction={setAction} >
            <ActionRegistration/>
          </ActionWrapper>
        )
      }
    }

  }

  return (
    renderActionPage()
  )
}

