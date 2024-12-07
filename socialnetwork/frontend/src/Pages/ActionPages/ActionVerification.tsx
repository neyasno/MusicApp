import { useNavigate } from 'react-router-dom'
import SubmitButton from '../VerificationPage/Forms/FormComponents/SubmitButton'
import FormFooter from '../VerificationPage/Forms/FormElements/FormFooter'
import FormHeader from '../VerificationPage/Forms/FormElements/FormHeader'
import { EPaths } from '../../utils/paths'

export default function ActionVerification() {
  const navigator = useNavigate()

  return (
    <div className='flex justify-center items-center w-auto '>
        <div className='flex flex-col items-center justify-center w-1/2'>
            <FormHeader text='Зарегистрируйтесь , и наслаждайтесь любой музыкой!'></FormHeader>
            <SubmitButton func={()=>{navigator(EPaths.REGISTRATION)}} text='Зарегистрироваться'></SubmitButton>
            <FormFooter text='Уже есть аккаунт?' link_text='Войти' link='/login'></FormFooter>
        </div>
    </div>
  )
}
