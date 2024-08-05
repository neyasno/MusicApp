import RegistrationRangeElement from "./RegistrationRangeElement"

export default function RegistrationRange({step}:{step:number}) {

  return (
    <div className='flex justify-center items-center'>

        <RegistrationRangeElement isActive={(step == 0)} isCompleted={(step>=0)}></RegistrationRangeElement>

        <div className='bg-main_l_grey rounded-full px-1 w-10 h-0.5 mx-3'></div>

        <RegistrationRangeElement isActive={(step == 1)} isCompleted={(step>=1)}></RegistrationRangeElement>

        <div className='bg-main_l_grey rounded-full px-1 w-10 h-0.5 mx-3'></div>

        <RegistrationRangeElement isActive={(step==2)} isCompleted={(step>=2)}></RegistrationRangeElement>

    </div>
  )
}