import { Link } from "react-router-dom";

type TFormFooter = { text:string , link:string , link_text:string };

export default function FormFooter(props : TFormFooter) {
  return (
    <div className='flex text-main_white p-20 text-lg'>
        <h3>{props.text}</h3>
        <h3 className='hover:text-main_green'>
          <Link to={props.link} className="underline pl-1" >
            {props.link_text}
          </Link>
          </h3>
    </div>   
  )
}
