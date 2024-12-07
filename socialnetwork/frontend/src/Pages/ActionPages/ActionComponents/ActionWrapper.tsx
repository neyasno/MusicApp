import { ReactNode } from 'react'
import { EActionPages } from '../../ActionPageTypes'

export default function ActionWrapper({children , setAction} : {children:ReactNode , setAction:Function}){
  return (
    <div className={"fixed top-0 left-0 w-full h-full bg-action_shadow flex justify-center items-center" } 
         onClick={()=>{setAction(EActionPages.NONE)}}>
      <div className="bg-main_black rounded-lg w-7/12 text-main_WHITE" onClick={(action)=>{ action.stopPropagation()}}>
        {children}
      </div>
    </div>
  )
}
