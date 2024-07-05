import FormHeader from './FormElements/FormHeader'
import FormFooter from './FormElements/FormFooter'
import RegistrationFormMain from './FormElements/RegistrationFormMain';

export default function RegistrationForm( ) {
  let header_text:string = "Зарегистрируйтесь в Spotify";
  let footer_text:string = "Есть аккаунт?";
  let link_text:string = "Вход в Spotify";
  let link:string = "/login";

  return (
    <div className='w-8/12 flex flex-col items-center '>
        <FormHeader text={header_text}></FormHeader>
        <RegistrationFormMain></RegistrationFormMain>
        <FormFooter text={footer_text} link_text={link_text} link={link}></FormFooter>
    </div>
  )
}
