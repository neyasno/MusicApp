import axios from "axios"
import { useContext, useState } from "react"
import { EApi } from "../../utils/paths"
import getCookieValue from "../../utils/cookie"
import { ActionContext } from "../../App"
import { EActionPages } from "../ActionPageTypes"

export default function ActionCreatePlaylist() {
  const [playlistTitle , setPlaylistTitle] = useState("")
  const setAction = useContext(ActionContext)

  const submitPlaylist = ( action: React.MouseEvent<HTMLInputElement, MouseEvent> , playlistTitle : string) =>{
    action.preventDefault()
    axios.post(EApi.USER_PLAYLISTS , playlistTitle , {params : {token : getCookieValue("token")}}).then((resp)=>{
      console.log(resp)
    })
    setAction(EActionPages.NONE)
  }

  return (
    <form action="">
      <div className='p-12 flex flex-col justify-center items-center'>
          <h1 className='text-lg font-bold pb-3'>Введите название плейлиста :</h1>
          <input type="text" value={playlistTitle} className='bg-main_black border-main_grey border-1 rounded-md w-full p-3'
          onChange={(action)=>{setPlaylistTitle(action.target.value)}}/>
          <input type="button" className='bg-white rounded-full w-1/2 p-2 text-black font-bold mt-4' value="Создать"
          onClick={(action)=>{submitPlaylist( action , playlistTitle )}}/>
      </div>
    </form>
  )
}
