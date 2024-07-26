import { useNavigate } from "react-router-dom";
import SearchField from "./MainPageHeader/SearchField";

export default function MainPageHeader() {

  const navigate = useNavigate();

  return (
    <header className="bg-main_dd_black rounded-t-xl">
      <nav>
        <div className="flex justify-between items-center">

          <div className="w-1/3 pl-6">
            <SearchField></SearchField>
          </div>

          <div className="flex items-center p-2 mr-5">
            <button className="font-bold text-main_l_grey text-lg px-8 py-3 rounded-full hover:underline" onClick={()=>{ navigate("/registration")}}>
              Зарегистрироваться
            </button>
            <button className="bg-main_WHITE text-main_BLACK font-bold rounded-full  px-10 py-3 hover:underline" onClick={()=>{ navigate("/login")}}>
              Войти
            </button>
          </div>

        </div>
      </nav>
    </header>
  )
}
