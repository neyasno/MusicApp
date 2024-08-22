import { useNavigate } from "react-router-dom";

export default function VerifyBlock() {

    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center">
            <button className="font-bold text-main_l_grey text-lg px-8 py-3 rounded-full hover:underline" onClick={()=>{ navigate("/registration")}}>
                Зарегистрироваться
            </button>
            <button className="bg-main_WHITE text-main_BLACK font-bold rounded-full  px-10 py-3 hover:underline" onClick={()=>{ navigate("/login")}}>
                Войти
            </button>
        </div>
    )
}
