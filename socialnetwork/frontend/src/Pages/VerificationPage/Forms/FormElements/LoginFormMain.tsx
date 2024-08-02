import { useContext, useState } from "react";
import InputField from "../FormComponents/InputField";
import SubmitButton from "../FormComponents/SubmitButton";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { LoginStatusContext } from "../../../../App";


export default function LoginFormMain() {

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [submitError , setError] = useState("");

  const loginContext = useContext(LoginStatusContext);

  const navigator = useNavigate()

  const onFieldChange = (action: React.ChangeEvent<HTMLInputElement> , func:Function) => {
    action.preventDefault();
    func(action.target.value);
  }

  const onButtonClick = (action : React.MouseEvent<Element , MouseEvent>) => {

    action.preventDefault();

    const url = "http://localhost:8080/api/login"

    axios.get(url , {
      params:{
        email , 
        password
      }
    }).then( (resp) => { 
      console.log(resp)
      if(resp.data == "USER_LOGIN"){

          loginContext?.setLoggedIn(true)
          navigator("/")
          
      }
      else if (resp.data == "USER_NOT_EXIST"){
        setError("Аккаунт не существует")
      }
      else if (resp.data == "USER_PASSWORD_FALSE"){
        setError("Данные для входа не верны")
      }
      else{
        setError("Ошибка")
      }
    })
  }

  return (
    <div className='border-b-1 border-t-1 border-main_grey w-full flex justify-center'>
        <div className='py-10 text-main_WHITE'>
            <form action="post" >
                <InputField title="Электронная почта или имя пользователя" 
                            value={email}
                            input_type="text" 
                            placeholder="Электронная почта или имя пользователя"
                            action={(action : React.ChangeEvent<HTMLInputElement>)=>{onFieldChange(action , setEmail)}}>
          
                </InputField>
                <InputField title="Пароль" 
                            value={password}
                            input_type="password" 
                            placeholder="Пароль"
                            action={(action : React.ChangeEvent<HTMLInputElement>)=>{onFieldChange(action , setPassword)}}>
          
                </InputField>

                <div className="text-main_red">{submitError}</div>
                
                <div className='flex py-3 items-center'>
                  <input className='size-5 bg-main_black border-1 border-main_grey outline-none checked:bg-red-500' type='checkbox'></input>
                  <p className='p-2'>Запомнить меня</p>
                </div>

                <SubmitButton text="Войти" func={onButtonClick}></SubmitButton>

                <div className='pt-6 w-full flex justify-center items-center'>
                  <Link className='underline'  to='/login/reset'>Забыли пароль ?</Link>
                </div>    

            </form>
        </div>
    </div>
  )
}


