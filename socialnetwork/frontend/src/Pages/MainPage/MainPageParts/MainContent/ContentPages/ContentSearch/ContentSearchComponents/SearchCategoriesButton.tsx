import { useNavigate, useParams } from "react-router-dom";

export default function SearchCategoryButton(props: { text: string, path: string }){

    const navigator = useNavigate();
    let { params, category } = useParams();
  
    let buttonColor = "bg-neutral-800 hover:bg-neutral-700 text-white";
  
    if (props.path == category) {
      buttonColor = "bg-white text-black font-semibold";
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
