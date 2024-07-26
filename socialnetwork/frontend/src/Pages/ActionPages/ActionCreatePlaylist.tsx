import React from 'react'

export default function ActionCreatePlaylist() {
  return (
    <form action="">
      <div className='p-12 flex flex-col justify-center items-center'>
          <h1 className='text-lg font-bold pb-3'>Введите название плейлиста :</h1>
          <input type="text" className='bg-main_black border-main_grey border-1 rounded-md w-full p-3'/>
          <input type="submit" className='bg-white rounded-full w-1/2 p-2 text-black font-bold mt-4' value="Создать"/>
      </div>
    </form>
  )
}
