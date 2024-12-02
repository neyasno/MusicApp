import { Link } from "react-router-dom";

type CardProps = {
    title : string , 
    type : string , 
    description : string ,
    image : string , 
}

export default function CardHeader({title , type , description , image} : CardProps) {
  return (
    <div className={"p-5 pt-7 flex bg-gradient-to-b from-main_green to-main_BLACK " + "bg-red-500"}>
        <div className="w-2/12">
            <img src={image} alt="" />
        </div>
        <div className="font-bold ml-5 mt-16">
            <p>{type}</p>
            <h1 className="text-5xl">{title}</h1>
            <div className="flex gap-2 mt-6">
                <div>
                    <Link to={'/'}>
                        <p className="hover:underline">{description}</p>
                    </Link>
                </div>
                {/* <ul className="flex gap-2">
                    <li>
                        <p>·</p>
                    </li>
                    <li>
                        <p>2024</p>
                    </li>
                    <li>
                        <p>·</p>
                    </li>
                    <li>
                        <p>10 треков</p>
                    </li>
                    <li>
                        <p>·</p>
                    </li>
                    <li>
                        <p>29 мин. 53 сек.</p>
                    </li>
                </ul> */}
            </div>
        </div>
    </div>
  )
}
