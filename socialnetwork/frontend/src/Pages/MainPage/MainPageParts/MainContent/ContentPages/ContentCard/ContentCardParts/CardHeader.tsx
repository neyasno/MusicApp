import { Link } from "react-router-dom";

export default function CardHeader(props:{color:string}) {
  return (
    <div className={"p-5 pt-7 flex bg-gradient-to-b from-red-900 to-red-950 " + props.color}>
        <div className="w-2/12">
            <img src="https://i.scdn.co/image/ab67616d0000b27370ebd1b40be2fa37d043ee14" alt="" />
        </div>
        <div className="font-bold ml-5 mt-16">
            <p>Альбом</p>
            <h1 className="text-5xl">Молитвы.Анекдоты.Тосты</h1>
            <div className="flex gap-2 mt-6">
                <div>
                    <Link to={'/'}>
                        <p className="hover:underline">Монеточка</p>
                    </Link>
                </div>
                <ul className="flex gap-2">
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
                </ul>
            </div>
        </div>
    </div>
  )
}
