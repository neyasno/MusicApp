import { useNavigate, useParams } from "react-router-dom";

export default function SearchCategoryButton(props: { text: string, path: string }){

    const navigator = useNavigate();
    let { params, category } = useParams();
  
    let buttonColor = "bg-main_l_black hover:bg-main_ll_black text-main_white";
  
    if (props.path == category) {
      buttonColor = "bg-main_white text-main_BLACK font-semibold";
    }
  
    return (
      <button className={'py-1 px-4 m-2 font- rounded-full ' + buttonColor}
          onClick={(action) => {
  
            action.preventDefault();
  
            navigator('/search/' + params + "/" + props.path);
  
          }}>
  
        {props.text}
        
      </button>
    )
  }
