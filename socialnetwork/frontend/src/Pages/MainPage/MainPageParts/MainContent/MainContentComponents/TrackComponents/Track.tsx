import { Link } from "react-router-dom";

export interface ITrack{
  id: number ,
  name:string , 
  time: string , 
  link : string ,
  author : string , 
  author_link : string ,
  img: string

}

export default function Track ( {id , name , author , time , link , author_link , img}: ITrack) {
  return (
    <li>
      <div className="flex p-2 py-1 items-center justify-between font-bold text-main_l_grey group hover:bg-main_l_black rounded-md">
        <div className="flex">
          <div className="p-4 w-1/12 flex justify-center items-center relative mx-3">
            <p className=" text-lg group-hover:opacity-0">
              { id }
            </p>
            <div className="absolute hidden group-hover:block">
              <svg fill="white" width="27px" height="27px" viewBox="-60 0 512 512" xmlns="http://www.w3.org/2000/svg" ><title>play</title><path d="M64 96L328 256 64 416 64 96Z" /></svg>
            </div>
          </div>
          <div className="w-14 p-1 flex justify-center items-center">
            <img className="rounded-md" src={img} alt="" />
          </div>
          <div className="flex flex-col justify-center pl-3">
            <Link to={link}>
              <p className="text-main_WHITE text-lg hover:underline">
                { name }
              </p>
            </Link>
            <Link to={author_link}>
              <p className="hover:underline">
                { author }
              </p>
            </Link>
          </div>
        </div>
        <div className='pr-10'>
            { time }
        </div>
      </div>
    </li>
  )
}
