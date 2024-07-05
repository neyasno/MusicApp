import React from 'react'

interface IInputField{
    title:string,
    input_type:React.HTMLInputTypeAttribute ,
    value: string ,
    action : Function , 
    placeholder? : string ,
}

export default function InputField(props : IInputField) {
  return (
    <>
    <h3 className='pb-2 pt-5'>{props.title}</h3>
    <input type={props.input_type} placeholder={props.placeholder} value={props.value} 
        className='bg-main_black border-1 border-main_grey rounded-md outline-white w-96 h-12 py-5 px-3 text-ellipsis text-lg'
        onChange={(action)=>{props.action(action)}}
        ></input> 
    </>
  )
}
