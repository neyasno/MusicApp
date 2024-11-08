import LoginForm from './Forms/LoginForm'
import RegistrationForm from './Forms/RegistrationForm'
import { EVerificationType } from './VerificationTypes'

interface VerificationPageProps{
  type:EVerificationType;
}

const VerificationPage :React.FC<VerificationPageProps> = ({type}) =>{

  const renderForm = () =>{

    switch(type){
      case EVerificationType.LOGIN:{
        return <LoginForm></LoginForm>
      }
      case EVerificationType.REGISTRATION:{
        return <RegistrationForm></RegistrationForm>
      }
      case EVerificationType.RESET_PASSWORD:{
        return <div className='text-main_BLACK text-4xl'>Reset password page</div>
      }
        
    }
  }
  

  return (
    <div className='w-full bg-gradient-to-b from-gray-800 to-main_BLACK flex flex-col'>
        <main className='w-full  flex justify-center items-center flex-1 min-h-screen'>
            <div className='bg-main_black rounded-lg flex flex-col w-6/12 my-10 items-center'>
              {renderForm()}
            </div>
        </main>
        <footer className='bg-main_black text-main_l_grey flex w-full aligh-center justify-center p-5 text-sm '>
        @2024 Сделано в образовательных целях 
        </footer>
    </div>
  )
}

export default VerificationPage
