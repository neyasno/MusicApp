import { Link } from "react-router-dom"
import Item, { IItem } from "./Item"


interface ContentLineProps{
    title:string , 
    type:string , 
    id?:string , 
    isRounded?:boolean , 
    items?: IItemServer[]
}

export interface IItemServer {
    title:string , 
    description : string ,
    image : string , 
    id : string ,
}

export default function ContentLine( {title , id , items, isRounded , type} : ContentLineProps) {
  return (
    <div className='flex flex-col p-3 mt-2'>
        <div className='flex justify-between mb-2 p-3 pb-2 items-center'>
            <h2 className="text-2xl font-bold">
                <Link to={ "/collection/" + id!} className=" hover:underline">{title} </Link>
            </h2>
        </div>
        <ul>
            <div className="flex">
                {items?.map((item , key)=>(
                    <Item title={item.title} isRounded={isRounded} description={item.description} image={item.image} id={item.id} type={type} 
                        key={key}></Item>
                ))}
            </div>
        </ul>
    </div>
  )
}
