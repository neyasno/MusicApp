import React from 'react'

export default function PersonStep() {

  function onNameSubmit(action : React.FormEvent<HTMLInputElement>){
    action.preventDefault();
}


  return (
    <>
    <h3 className='py-2'>Название</h3>
    <input type='text' placeholder='Ваш желаемый никнейм' 
        className='bg-main_black border-1 border-gray-500 rounded-md outline-white w-96 h-12 py-5 px-3 text-ellipsis text-lg'></input>  
    <div className='flex py-5 items-center'></div>
    <input type='submit' value="Далее" className='bg-green-600 w-full rounded-full p-4 text-black font-bold'
    onSubmit={(action) =>{onNameSubmit(action)}}
    >
    </input>
    </>
  )
}
