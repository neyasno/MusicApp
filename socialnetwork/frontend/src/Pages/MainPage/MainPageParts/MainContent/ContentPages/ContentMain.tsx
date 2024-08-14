import { useEffect, useState } from "react";
import ContentLine from "../MainContentComponents/ItemComponents/ContentLine";
import axios from "axios";

type TContent={ 
  title: string , 
  items : Array<TContentLine>
}

type TContentLine ={
  id : string
  title : string
  type_of : string
  items: []
}

export default function ContentMain() {

  const [itemsData , setItemsData]  = useState<TContent>({title:"" , items : []})

  useEffect(()=>{

    const url = "http://localhost:8080/api/content"

    axios.get(url).then((resp) => {
      console.log(resp.data)
      setItemsData(resp.data); 
    })

  } , [])

  return (
    <section>
      <div className="flex flex-col p-2">
        { itemsData.items.map((item) => 
          <ContentLine title={item.title} items={item.items} id={item.id} key={item.id} type={item.type_of}></ContentLine>
        )}
      </div>
    </section>
  )
}
