import { Link } from 'react-router-dom'
import SubmitButton from '../VerificationPage/Forms/FormComponents/SubmitButton'
import FormFooter from '../VerificationPage/Forms/FormElements/FormFooter'
import FormHeader from '../VerificationPage/Forms/FormElements/FormHeader'

export default function ActionVerification() {
  return (
    <div className='flex justify-center items-center p-20'>
        <div className='flex flex-col items-center justify-center '>
            <FormHeader text='Зарегистрируйтесь , и наслаждайтесь любой музыкой!'></FormHeader>
            <SubmitButton func={()=>{}} text='Зарегистрироваться'></SubmitButton>
            <FormFooter text='Уже есть аккаунт?' link_text='Войти' link='/login'></FormFooter>
        </div>
    </div>
  )
}
