
import { Link } from 'react-router-dom'
import { ITrackPortative } from '../MainContent/MainContentComponents/TrackComponents/TrackPortative'

export default function PlayerTrack({title , description , img ,  time , link}:ITrackPortative) {
  return (
    <div className='flex items-center justify-between rounded-md p-4 w-3/12'>
        <div className='flex'>
            <div className='pr-2 w-16'>
                <img className="rounded-md" src={img} alt="" />
            </div>
            <div className='flex flex-col justify-center'>
                <Link to={link}>
                    <h2 className='font-bold text-main_WHITE hover:underline '>{title}</h2>
                </Link>
                <p className='text-main_l_grey font-semibold'>{description} </p>
            </div>
        </div>
        <div>
            <p className='text-main_l_grey pr-5'>{time}</p>
        </div>
    </div>
  )
}
