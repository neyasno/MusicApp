import Item, { IItem } from "./Item"

interface IItemServer {
    Title:string , 
    Description : string ,
    Image : string , 
    Link : string ,
}

interface IItemsContainer{
    title:string , 
    link?:string , 
    items?: IItemServer[]
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
                    <Item title={item.Title} isRounded={false} description={item.Description} image={item.Image} link={item.Link} 
                        key={key}></Item>
                ))}
            </div>
        </ul>
    </div>
  )
}
