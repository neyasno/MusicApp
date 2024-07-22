import { useNavigate, useParams } from "react-router-dom";


const SearchField = () => {

  const navigate = useNavigate();
  const {params , category} = useParams();

  return(
    <form action="">
      <div className="flex p-3 rounded-full bg-main_l_black items-center border-2 focus-within:border-main_WHITE border-main_l_black">
        <svg data-encore-id="icon" fill="grey" role="img" aria-hidden="true" viewBox="0 0 24 24" height="20">
          <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path>
        </svg>
        <input type="text" placeholder="Что хочешь включить?" className="bg-neutral-800 px-3 outline-none w-full group-focus:"
         onChange={(action)=>{

          action.preventDefault();

          if(category){
            navigate("/search/" + action.target.value + "/" + category);
          }
          else{
            navigate("/search/" + action.target.value + "/all");
          }
          
          }}/>
      </div>
    </form>
  )
}

export default function MainPageHeader() {
  return (
    <header className="bg-main_dd_black rounded-t-xl">
      <nav>
        <div className="flex justify-between items-center">

          <div className="w-1/3 pl-6">
            <SearchField></SearchField>
          </div>

          <div className="flex items-center p-2 mr-5">
            <button className="font-bold text-main_l_grey text-lg px-8 py-3 rounded-full hover:underline">Зарегистрироваться</button>
            <button className="bg-main_WHITE text-main_BLACK font-bold rounded-full  px-10 py-3 hover:underline ">Войти</button>
          </div>

        </div>
      </nav>
    </header>
  )
}
