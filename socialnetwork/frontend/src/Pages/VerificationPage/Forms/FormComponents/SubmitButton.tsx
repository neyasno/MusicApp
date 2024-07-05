
export default function SubmitButton( props :{ func : Function}) {
  return (
    <input type='button' value="Войти" className='bg-main_green w-full rounded-full p-4 text-black font-bold'
        onClick={(action : React.MouseEvent<Element , MouseEvent>)=>{props.func(action)}}
    ></input>
  )
}
