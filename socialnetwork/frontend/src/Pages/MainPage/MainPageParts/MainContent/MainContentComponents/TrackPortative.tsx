import React from 'react'

export default function TrackPortative() {
  return (
    <li className='h-1/4 mr-10'>
        <div className='flex items-center justify-between rounded-md p-2 hover:bg-main_l_black'>
            <div className='flex'>
                <div className='pr-2 w-14'>
                    <img className="rounded-md" src="https://i.scdn.co/image/ab67616d00001e02ca7d1cfaf54216f536665f91" alt="" />
                </div>
                <div className='flex flex-col'>
                    <h2 className='font-bold'>Czardas</h2>
                    <p className='text-main_l_grey font-semibold'>Vittorio Monti , Lakatos </p>
                </div>
            </div>
            <div>
                <p className='text-main_l_grey pr-5'>4:07</p>
            </div>
        </div>
    </li>
  )
}
