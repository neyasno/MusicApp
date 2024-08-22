import { Link } from "react-router-dom";
import { TTrack } from "../../ContentPages/ContentCard/ContentCardWrapper";

export default function TrackPortative({_id , author , title , image , duration}:TTrack) {
    return (
      <li>
          <div className='flex items-center justify-between rounded-md p-2 hover:bg-main_l_black'>
              <div className='flex'>
                  <div className='pr-4 w-16'>
                      <img className="rounded-md" src={image} alt="" />
                  </div>
                  <div className='flex flex-col justify-center'>
                      <Link to={_id}>
                          <h2 className='font-bold text-main_WHITE '>{title}</h2>
                      </Link>
                      <p className='text-main_l_grey font-semibold'>{author} </p>
                  </div>
              </div>
              <div>
                  <p className='text-main_l_grey pr-5'>{duration}</p>
              </div>
          </div>
      </li>
    )
  }