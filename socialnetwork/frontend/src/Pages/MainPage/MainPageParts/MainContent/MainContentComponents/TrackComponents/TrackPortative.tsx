import { Link } from "react-router-dom";

export interface ITrackPortative{
    title:string , 
    description? : string , 
    img : string , 
    time : string ,
    link : string ,
}

export default function TrackPortative({title , description , img ,  time , link}:ITrackPortative) {
  return (
    <li className='h-1/4 '>
        <div className='flex items-center justify-between rounded-md p-2 hover:bg-main_l_black'>
            <div className='flex'>
                <div className='pr-2 w-14'>
                    <img className="rounded-md" src={img} alt="" />
                </div>
                <div className='flex flex-col justify-center'>
                    <Link to={link}>
                        <h2 className='font-bold text-main_WHITE '>{title}</h2>
                    </Link>
                    <p className='text-main_l_grey font-semibold'>{description} </p>
                </div>
            </div>
            <div>
                <p className='text-main_l_grey pr-5'>{time}</p>
            </div>
        </div>
    </li>
  )
}
