import { Link } from "react-router-dom"

export default function MediaNavigation() {
    return(
        <nav>
        <div className="p-2 flex flex-wrap">
            <NavigatonElement text="Юридичесская информация" link="/info"></NavigatonElement>
            <NavigatonElement text="Центр безопасности и конфиденциальности" link="/info"></NavigatonElement>
            <NavigatonElement text="Политика конфиденциальности" link="/info"></NavigatonElement>
            <NavigatonElement text="Файлы cookie" link="/info"></NavigatonElement>
            <NavigatonElement text="О рекламе" link="/info"></NavigatonElement>
            <NavigatonElement text="Специальные возможности" link="/info"></NavigatonElement>
            </div>
        </nav>
    )
}

const NavigatonElement = ({link , text}:{link:string , text:string}) =>{
    return(
      <Link to={link}>
        <p className="text-main_l_grey font-normal text-xs p-2 px-3">{text}</p>
      </Link>
    )
  }
