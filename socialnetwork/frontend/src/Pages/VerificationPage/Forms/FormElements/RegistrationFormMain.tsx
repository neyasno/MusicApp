import { useState } from 'react'
import EmailStep from './RegistrationSteps/EmailStep'
import PasswordStep from './RegistrationSteps/PasswordStep'
import PersonStep from './RegistrationSteps/PersonStep'

export default function RegistrationFormMain() {

  let [regStep , setRegStep] = useState(0);
  let active_step = <p>ERROR</p>
  
  switch (regStep) {

    case 0:{
      active_step = <EmailStep step={regStep} setStep={setRegStep}></EmailStep>
      break;
    }
    case 1:{
      active_step = <PasswordStep step={regStep} setStep={setRegStep}></PasswordStep>
      break;
    }
    case 2:{
      active_step = <PersonStep></PersonStep>
      break;
    }

    default:
      break;
  }

  return (
    <div className='border-b-1 border-t-1 border-gray-500 w-full flex justify-center'>
        <div className='py-10 text-white'>
        <form action="post" >
          {active_step}
        </form>
        </div>
    </div>
  )
}
