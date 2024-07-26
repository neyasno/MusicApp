import Item, { IItem } from "./Item"


interface IItemsContainer{
    title:string , 
    link?:string , 
    items?: IItem[]
}

export default function ItemsContainer( {title , link , items} : IItemsContainer) {
  return (
    <div className='flex flex-col p-3 mt-2'>
        <div className='flex justify-between mb-2 p-3 pb-2 items-center'>
            <h2 className="text-2xl font-bold">
                <a href={link} className=" hover:underline">{title} </a>
            </h2>
        </div>
        <ul>
            <div className="flex">
                {items?.map((item , key)=>(
                    <Item title={item.title} isRounded={false} description={item.description} image={item.image} link={item.link} 
                        key={key}></Item>
                ))}
            </div>
        </ul>
    </div>
  )
}
