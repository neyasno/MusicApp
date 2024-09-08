import FormFooter from "../VerificationPage/Forms/FormElements/FormFooter";
import FormHeader from "../VerificationPage/Forms/FormElements/FormHeader";

export default function ActionRegistration() {
  return (
    <div className='flex justify-center items-center p-20'>
        <div className='flex flex-col items-center justify-center w-1/2'>
            <FormHeader text='Учетная запись успешно зарегестрирована !'></FormHeader>
            <FormFooter text='Добро пожаловать в Trackkster !' link_text='' link=''></FormFooter>
        </div>
    </div>
  )
}
