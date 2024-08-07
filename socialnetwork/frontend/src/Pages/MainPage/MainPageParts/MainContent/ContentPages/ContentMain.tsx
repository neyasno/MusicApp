import { useEffect, useState } from "react";
import { IItem } from "../MainContentComponents/ItemComponents/Item";
import ItemsContainer from "../MainContentComponents/ItemComponents/ItemsContainer";
import axios from "axios";

type ItemsLine ={
  Data: []
  Link: string
  Title : string
  Type_of : string
}

export default function ContentMain() {

  // const itemsData : IItem[] = [
  //   {
  //     title: "Ирина Кариворамира" , 
  //     description : "Исполнитель" ,
  //     image : "https://i.scdn.co/image/ab67616d00001e02ca7d1cfaf54216f536665f91", 
  //     link : "" ,
  //   },
  //   {
  //     title: "Ирина Кариворамира" , 
  //     description : "Исполнитель" ,
  //     image : "https://i.scdn.co/image/ab67616d00001e02ca7d1cfaf54216f536665f91", 
  //     link : "" ,
  //   },
  //   {
  //     title: "Ирина Кариворамира" , 
  //     description : "Исполнитель" ,
  //     image : "https://i.scdn.co/image/ab67616d00001e02ca7d1cfaf54216f536665f91", 
  //     link : "" ,
  //   },
  //   {
  //     title: "Ирина Кариворамира" , 
  //     description : "Исполнитель" ,
  //     image : "https://i.scdn.co/image/ab67616d00001e02ca7d1cfaf54216f536665f91", 
  //     link : "" ,
  //   },
  //   {
  //     title: "Ирина Кариворамира" , 
  //     description : "Исполнитель" ,
  //     image : "https://i.scdn.co/image/ab67616d00001e02ca7d1cfaf54216f536665f91", 
  //     link : "" ,
  //   },
  //   {
  //     title: "Ирина Кариворамира" , 
  //     description : "Исполнитель" ,
  //     image : "https://i.scdn.co/image/ab67616d00001e02ca7d1cfaf54216f536665f91", 
  //     link : "" ,
  //   },
  //   {
  //     title: "Ирина Кариворамира" , 
  //     description : "Исполнитель" ,
  //     image : "https://i.scdn.co/image/ab67616d00001e02ca7d1cfaf54216f536665f91", 
  //     link : "" ,
  //   },

  // ]
  const [itemsData , setItemsData]  = useState<{ Title: string , Data : Array<ItemsLine>}>({Title:"" , Data : []})
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
    })
    .then((resp) => {
      console.log(resp.data)
      setItemsData(resp.data); 
    })

  } , [])

  return (
    <section>
      <div className="flex flex-col p-2">
        { itemsData.Data.map((item , key) => 
          <ItemsContainer title={item.Title} items={item.Data} link={item.Link} key={key}></ItemsContainer>
        )}
      </div>
    </section>
  )
}
