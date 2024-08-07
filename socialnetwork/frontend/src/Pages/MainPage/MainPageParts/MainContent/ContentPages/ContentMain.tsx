import { useEffect } from "react";
import { IItem } from "../MainContentComponents/ItemComponents/Item";
import ItemsContainer from "../MainContentComponents/ItemComponents/ItemsContainer";
import axios from "axios";

export default function ContentMain() {

  const itemsData : IItem[] = [
    {
      title: "Ирина Кариворамира" , 
      description : "Исполнитель" ,
      image : "https://i.scdn.co/image/ab67616d00001e02ca7d1cfaf54216f536665f91", 
      link : "" ,
    },
    {
      title: "Ирина Кариворамира" , 
      description : "Исполнитель" ,
      image : "https://i.scdn.co/image/ab67616d00001e02ca7d1cfaf54216f536665f91", 
      link : "" ,
    },
    {
      title: "Ирина Кариворамира" , 
      description : "Исполнитель" ,
      image : "https://i.scdn.co/image/ab67616d00001e02ca7d1cfaf54216f536665f91", 
      link : "" ,
    },
    {
      title: "Ирина Кариворамира" , 
      description : "Исполнитель" ,
      image : "https://i.scdn.co/image/ab67616d00001e02ca7d1cfaf54216f536665f91", 
      link : "" ,
    },
    {
      title: "Ирина Кариворамира" , 
      description : "Исполнитель" ,
      image : "https://i.scdn.co/image/ab67616d00001e02ca7d1cfaf54216f536665f91", 
      link : "" ,
    },
    {
      title: "Ирина Кариворамира" , 
      description : "Исполнитель" ,
      image : "https://i.scdn.co/image/ab67616d00001e02ca7d1cfaf54216f536665f91", 
      link : "" ,
    },
    {
      title: "Ирина Кариворамира" , 
      description : "Исполнитель" ,
      image : "https://i.scdn.co/image/ab67616d00001e02ca7d1cfaf54216f536665f91", 
      link : "" ,
    },

  ]
  let data 
  useEffect(()=>{

    const url = "http://localhost:8080/api/content"

    function getCookieValue(name :string) {

      const cookies = document.cookie.split('; ');
    
      for (let i = 0; i < cookies.length; i++) {

        const cookie = cookies[i];
        const [cookieName, cookieValue] = cookie.split('=');
    
        if (cookieName === name) {
          return cookieValue;
        }
      }
  
      return null;
    }
    console.log(getCookieValue("token"))
    axios.get(url , {
      params:{
        token : getCookieValue("token"), 
      }
    }).then((resp) => {data = resp.data})

  } , [])

  return (
    <section>
      <div className="flex flex-col p-2">
        <ItemsContainer title="Популярные исполнители" items={itemsData} ></ItemsContainer>
      </div>
    </section>
  )
}
