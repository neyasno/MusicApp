import { useNavigate, useParams } from "react-router-dom";

export default function SearchCategoryButton({text , path}: { text: string, path: string }){

    const navigator = useNavigate();
    let { params, category } = useParams();
  
    let buttonColor = "bg-main_l_black hover:bg-main_ll_black text-main_WHITE";
  
    if (path == category) {
      buttonColor = "bg-main_WHITE text-main_BLACK font-semibold";
    }
  
    return (
      <button className={'py-1 px-4 m-2 font- rounded-full ' + buttonColor}
          onClick={(action) => {
  
            action.preventDefault();
            navigator('/search/'+ path + "/" + params);
  
          }}>
  
        {text}
        
      </button>
    )
  }
