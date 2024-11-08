import axios, { HttpStatusCode } from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import RegistrationRange from '../../FormComponents/RegistrationRange';
import { EApi, EPaths } from '../../../../../utils/paths';
import { ActionContext } from '../../../../../App';
import { EActionPages } from '../../../../ActionPageTypes';

type PersonStepProps = {step : number , setStep:Function , email:string , password:string }

export default function PersonStep( { step , setStep ,email , password }: PersonStepProps) {

  const setAction = useContext(ActionContext)

  const [username , setUsername] = useState('');
  const [err , setError] = useState('');

  const navigator = useNavigate()

  const onUsernameChange = (action : React.ChangeEvent<HTMLInputElement>) =>{
    setUsername(action.target.value)
  }

  function onRegistrationSubmit(action : React.MouseEvent<HTMLButtonElement, MouseEvent>){
    action.preventDefault();

    const url = EApi.REGISTRATION

    const registrationResponse ={
      email , 
      password ,
      username , 
    }

    axios.post(url , registrationResponse ).then(() => {

      setAction(EActionPages.REGISTRATION_SURESUFULL)
      navigator(EPaths.LOGIN)

    }).catch(()=>{

      setError("Ошибка , пользователь cуществует")

    })
  }


  return (
    <>
    <RegistrationRange step={step}></RegistrationRange>
    <h3 className='py-2'>Название</h3>
    <input type='text' placeholder='Ваш желаемый никнейм' 
        className='bg-main_black border-1 border-gray-500 rounded-md outline-white w-96 h-12 py-5 px-3 text-ellipsis text-lg'
        onChange={(action)=>{onUsernameChange(action)}}
    >
    </input>  
    <div className='flex py-5 items-center text-main_red'>{err}</div>
    <button className='bg-green-600 w-full rounded-full p-4 text-black font-bold'
    onClick={(action) =>{onRegistrationSubmit(action)}}
    > Далее
    </button>
    </>
  )
}
