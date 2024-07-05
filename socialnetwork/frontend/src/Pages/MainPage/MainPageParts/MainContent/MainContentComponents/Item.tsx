import PlayButton from "./PlayButton";

export interface IItem {

    title:string , 
    description : string ,
    image : string , 
    link : string ,
    isRounded? : boolean ,

}

export default function Item( props:IItem ) {
  return (
    <li>
        <div className="flex flex-col p-3 hover:bg-neutral-800 rounded-md group">
            <div className="w-full relative">
                <PlayButton></PlayButton>
                <img className={props.isRounded?"rounded-full":"rounded-xl"} src={props.image} alt="" />
            </div>
            <div className="flex flex-col overflow-hidden max-w-">
                <h3 className="font-bold text-white pt-3 pb-1 w-">
                    {props.title}                    
                </h3>
                <p className="text-main_l_grey">{props.description}</p>
            </div>
        </div>
    </li>
  )
}
