import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function PersonStep( { email , password}:{email:string , password:string}) {

  const [username , setUsername] = useState('');
  const [err , setError] = useState('');

  const navigator = useNavigate()

  const onUsernameChange = (action : React.ChangeEvent<HTMLInputElement>) =>{
    setUsername(action.target.value)
  }

  function onRegistrationSubmit(action : React.MouseEvent<HTMLButtonElement, MouseEvent>){
    action.preventDefault();

    const url = "http://localhost:8080/api/registration"

    const registrationResponse ={
      email , 
      password ,
      username , 
    }

    console.log(registrationResponse)

    axios.post(url , registrationResponse ).then((res) => {
      
      console.log(res)
      if (res.data == "USER_CREATED"){
        alert("Аккаунт успешно зарегистрирован")

        navigator("/login")
      }
      else{
        setError("Ошибка , пользователь c такой почтой , или ником уже существует")
      }

    })
  }


  return (
    <>
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
