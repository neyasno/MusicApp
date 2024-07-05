import Item, { IItem } from "./Item"


interface IItemsContainer{
    title:string , 
    link?:string , 
    items?: IItem[]
}

export default function ItemsContainer( props : IItemsContainer) {
  return (
    <div className='flex flex-col p-3 mt-2'>
        <div className='flex justify-between mb-2 p-3 pb-2 items-center'>
            <h2 className="text-2xl font-bold">
                <a href={props.link} className=" hover:underline">{props.title} </a>
            </h2>
            <a href={props.link} className="text-main_l_grey hover:underline"> Показать все </a>
        </div>
        <ul>
            <div className="flex">
                {props.items?.map((item , key)=>(
                    <Item title={item.title} isRounded={false} description={item.description} image={item.image} link={item.link}></Item>
                ))}
            </div>
        </ul>
    </div>
  )
}
