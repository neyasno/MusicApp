import { Link } from "react-router-dom";
import PlayButton from "../PlayButton";

export interface IItem {

    title:string , 
    description : string ,
    type : string
    image : string , 
    id : string ,
}   

export default function Item( {title , description , image , id,type}:IItem ) {

    let isRounded = type=="AUTHORS"?true:false
    let path = ""

    switch(type){
        case "AUTHORS":{
            path = "/authors/" + id
            break
        }
        case "PLAYLISTS":{
            path = "/playlists/" + id
            break
        }
        case "TRACKS" :{
            path = "/tracks/" + id
            break
        }
        case "ALBUMS":{
            path = "/albums/" + id
            break
        }
    }


  return (
    <li className="w-1/7">
        <Link to={path}>
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
