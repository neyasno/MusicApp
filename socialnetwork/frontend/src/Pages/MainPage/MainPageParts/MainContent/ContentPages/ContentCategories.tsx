import { Link } from "react-router-dom"

interface ICategory{
    color:string , 
    img:string , 
    link:string
}
    

const CategoryBrick = (props:ICategory)=>{
    return(
        <li className=' w-1/4'>
            <Link to={props.link}>
                <div className={props.color + ' rounded-xl h-44 p-4 m-3 relative overflow-hidden'}>
                    <h2 className='text-2xl font-bold'>Мероприятия</h2>
                    <div className='absolute -bottom-4 -right-4 rotate-26'>
                        <img className="rounded-md h-34" src={props.img} alt=""/>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default function ContentCategories() {

  const categoriesData : ICategory[] = [
    {
        color: "bg-yellow-400" , 
        link : "/reasrgser" , 
        img : ""
    }
  ]

  return (
    <section className='p-8 pl-6'>
        <h1 className='text-2xl font-bold pl-3'>Все категории</h1>
        <ul>
            <div className='flex flex-wrap pt-5'>

            { categoriesData.map((item , index)=>(
                <CategoryBrick color={item.color} img={item.img} link={item.link} key={index}></CategoryBrick>
            ))}
                
            </div>
        </ul>
    </section>
  )
}
