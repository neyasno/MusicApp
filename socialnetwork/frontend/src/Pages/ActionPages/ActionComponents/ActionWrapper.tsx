import React, { ReactNode } from 'react'
import { EActionPages } from '../../ActionPageTypes'

export default function ActionWrapper({children , setAction} : {children:ReactNode , setAction:Function}){
    return (
      <div className={"absolute top-0 left-0 w-full h-full bg-action_shadow flex justify-center items-center" }
          onClick={(action)=>{setAction(EActionPages.NONE)}}>
        <div className="bg-main_black rounded-lg text-main_WHITE" onClick={(action)=>{ action.stopPropagation()}}>
          {children}
        </div>
      </div>
    )
  }
