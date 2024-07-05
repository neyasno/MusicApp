import FormHeader from './FormElements/FormHeader'
import FormFooter from './FormElements/FormFooter'
import LoginFormMain from './FormElements/LoginFormMain';

export default function LoginForm( ) {
  let header_text:string = "Вход в Spotify";
  let footer_text:string = "Нет аккаунта?";
  let link_text:string = "Регистрация в Spotify";
  let link:string = "/registration";

  return (
    <div className='w-8/12 flex flex-col items-center '>
        <FormHeader text={header_text}></FormHeader>
        <LoginFormMain></LoginFormMain>
        <FormFooter text={footer_text} link_text={link_text} link={link}></FormFooter>
    </div>
  )
}
