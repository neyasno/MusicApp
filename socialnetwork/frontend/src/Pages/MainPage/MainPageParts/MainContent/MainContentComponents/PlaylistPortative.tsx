import { Link } from "react-router-dom";

export interface TPlaylistPortative{
    id : string ,
    image : string , 
    title:string , 
    items : [] ,
    description? : string , 
}

export default function PlaylistPortative({id , image , title , items }:TPlaylistPortative) {
  return (
    <li>
        <div className='flex items-center justify-between rounded-md p-2 hover:bg-main_l_black'>
            <div className='flex'>
                <div className='pr-4 w-14'>
                    <img className="rounded-md" src={image} alt="" />
                </div>
                <div className='flex flex-col justify-center'>
                    <Link to={id}>
                        <h2 className='font-bold text-main_WHITE '>{title}</h2>
                    </Link>
                    <p className='text-main_l_grey font-semibold'>{""} </p>
                </div>
            </div>
            <div>
                <p className='text-main_l_grey pr-5'>{items.length}</p>
            </div>
        </div>
    </li>
  )
}
