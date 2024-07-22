
export default function SubmitButton( props :{ func : Function , text : string}) {
  return (
    <input type='button' value={props.text} className='bg-main_green w-full rounded-full p-4 text-black font-bold hover:bg-main_l_green'
        onClick={(action : React.MouseEvent<Element , MouseEvent>)=>{props.func(action)}}
    ></input>
  )
}
