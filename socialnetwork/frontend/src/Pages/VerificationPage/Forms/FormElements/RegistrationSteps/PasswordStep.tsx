import React, { useState } from 'react'
import InputField from '../../FormComponents/InputField';

function PasswordRule(props :{text:string , rule : boolean}){
    return(
        <li>
            <div className='flex p-2 items-center'> 
                {props.rule ?<div className='rounded-full border-1 border-gray-500 size-4 bg-green-600'></div>:
                <div className='rounded-full border-1 border-gray-500 size-4'></div>}

                <p className='pl-2'>{props.text}</p>
            </div>
        </li>
    )
}

interface IPasswordStep{ 
    step : number , 
    setStep : Function , 
    password : string , 
    setPassword : Function
}

export default function PasswordStep({step , setStep , password , setPassword} : IPasswordStep) {

    let [haveOneLetter , setHaveOneLetter] = useState(false);
    let [haveOneNumberOrSimbol , setHaveOneNumberOrSimbol] = useState(false);
    let [haveEnoughtSimbols , setHaveEnoughtSimbols] = useState(false);

    let [passwordError , setPasswordError] = useState("");

    function onPasswordChange(action :React.ChangeEvent<HTMLInputElement>){

        action.preventDefault();
        const text:string = action.target.value;

        const isHaveLetter = (str : string)=>{
            return /[a-zA-Z]/.test(str);
        }
        const isHaveNumOrSig = (str : string)=>{
            return /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(str);
        }
        const isHaveEnoughtSim = (str:string , num :number)=>{

            if(str.length >=num){
                return true;
            }
            else{
                return false;
            }
        }

        setHaveOneLetter( isHaveLetter(text) );
        setHaveOneNumberOrSimbol( isHaveNumOrSig(text) );
        setHaveEnoughtSimbols( isHaveEnoughtSim(text,10) );

        setPassword(text);
    }

    function onPasswordSubmit(action : React.MouseEvent<HTMLInputElement, MouseEvent>){
        action.preventDefault();
        if(haveOneLetter && haveEnoughtSimbols && haveOneNumberOrSimbol){
            setStep(step+1)
        }
        else{
            setPasswordError("Не подходящий пароль")
        }
    }

  return (
    <>
    <InputField title='Пароль' input_type='password' value={password} action={(action : React.ChangeEvent<HTMLInputElement>)=>{onPasswordChange(action)}}></InputField> 
    <div className='flex py-5 items-center text-main_red'>{passwordError  }</div>
    <h4>Пароль должен содержать как минимум:</h4>
    <ul className='mb-5'>
        <PasswordRule rule={haveOneLetter} text='1 букву' ></PasswordRule>
        <PasswordRule rule={haveOneNumberOrSimbol} text='1 цифру или специальный символ (например, # ? ! &)'></PasswordRule>
        <PasswordRule rule={haveEnoughtSimbols} text='10 символов'></PasswordRule>
    </ul>
    <input type='button' value="Далее" className='bg-main_green w-full rounded-full p-4 text-black font-bold'
        onClick={(action)=>{onPasswordSubmit(action)}}
    >
    </input>
    </>
  )
}
