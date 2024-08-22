import React, { useContext } from 'react'
import { setToken } from '../../../../../utils/cookie'
import { useNavigate } from 'react-router-dom'
import { EPaths } from '../../../../../utils/paths'
import { LoginStatusContext } from '../../../../../App'

export default function AccountBlock() {

  const { isLoggedIn , setLoggedIn} = useContext(LoginStatusContext)

  return (
    <div className='flex items-center justify-center mr-6'>
      <button className="font-bold text-main_l_grey text-lg px-8 py-3 rounded-full hover:underline" onClick={()=>{
         setToken("off");
         setLoggedIn(false)
      }}>
            Выйти
      </button>
    </div>
  )
}
