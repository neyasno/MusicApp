import { Link } from "react-router-dom";
import { TTrack } from "../../ContentPages/ContentCard/ContentCardWrapper";
import EPaths from "../../../../../../utils/paths";

interface TrackProps extends TTrack {
  number : string
}

export default function Track ( {_id , title , image , author ,duration , author_id , number}: TrackProps) {
  return (
    <li>
      <div className="flex p-2 py-1 items-center justify-between font-bold text-main_l_grey group hover:bg-main_l_black rounded-md">
        <div className="flex">
          <div className="p-4 w-1/12 flex justify-center items-center relative mx-3">
            <p className=" text-lg group-hover:opacity-0">
              { number }
            </p>
            <div className="absolute hidden group-hover:block">
              <svg fill="white" width="27px" height="27px" viewBox="-60 0 512 512" xmlns="http://www.w3.org/2000/svg" ><title>play</title><path d="M64 96L328 256 64 416 64 96Z" /></svg>
            </div>
          </div>
          <div className="w-14 p-1 flex justify-center items-center">
            <img className="rounded-md" src={image} alt="" />
          </div>
          <div className="flex flex-col justify-center pl-3">
            <Link to={EPaths.TRACKS +_id}>
              <p className="text-main_WHITE text-lg hover:underline">
                { title}
              </p>
            </Link>
            <Link to={EPaths.AUTHORS + author_id}>
              <p className="hover:underline">
                { author }
              </p>
            </Link>
          </div>
        </div>
        <div className='pr-10'>
            { duration }
        </div>
      </div>
    </li>
  )
}
