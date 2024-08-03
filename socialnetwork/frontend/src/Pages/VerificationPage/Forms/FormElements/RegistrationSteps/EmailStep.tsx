import React , {useState} from 'react'
import InputField from '../../FormComponents/InputField';
import SubmitButton from '../../FormComponents/SubmitButton';
import RegistrationRange from '../../FormComponents/RegistrationRange';

interface IEmailStep{
  step : number , 
  setStep : Function , 
  email : string , 
  setEmail : Function
}

export default function EmailStep({step , setStep , email , setEmail}:IEmailStep) {

  let [emailError , setEmailError] = useState("");

  const onEmailChange = (action : React.ChangeEvent<HTMLInputElement>)=>{
    action.preventDefault();
    setEmail(action.target.value);
  }

  const isEmailValid = (email:string) =>{
    if(email.length >= 6){
        return true;
    }
    else{
        return false;
    }
    
  }

  const onEmailSubmit = (action : React.FormEvent<HTMLInputElement>) =>{
    action.preventDefault();
    if(isEmailValid(email)){
        setStep(step + 1);
    }
    else{
        setEmailError("Не верная почта")
    }
  }


  return (
    <>
      <RegistrationRange></RegistrationRange>
      <InputField title='Электронная почта или имя пользователя' 
                  placeholder='Электронная почта или имя пользователя'
                  input_type="text" 
                  value={email} 
                  action={(action : React.ChangeEvent<HTMLInputElement>) =>{onEmailChange(action)}} >
      </InputField> 
      <div className='flex py-5 items-center text-red-600'>{emailError}</div>
      <SubmitButton text='Далее' func={(action : React.FormEvent<HTMLInputElement>) =>{onEmailSubmit(action)}}>
      </SubmitButton>
    </>
  )
}
