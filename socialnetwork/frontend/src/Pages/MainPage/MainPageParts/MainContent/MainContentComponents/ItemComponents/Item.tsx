import { Link } from "react-router-dom";
import PlayButton from "../PlayButton";

export interface IItem {

    title:string , 
    description : string ,
    image : string , 
    link : string ,
    isRounded? : boolean ,

}

export default function Item( {title , description , image , link , isRounded }:IItem ) {
  return (
    <li className="w-1/7    ">
        <Link to='/section/daaaaaaaa'>
            <div className="flex flex-col p-3 hover:bg-main_l_black rounded-md group">
                <div className="w-full relative">
                    <img className={isRounded?"rounded-full":"rounded-xl"} src={image} alt="" />
                    <PlayButton></PlayButton>
                </div>
                <div className="flex flex-col overflow-hidden">
                    <h3 className="font-bold text-main_WHITE pt-3 pb-1 w-">
                        {title}                    
                    </h3>
                    <p className="text-main_l_grey">{description}</p>
                </div>
            </div>
        </Link>
    </li>
  )
}
