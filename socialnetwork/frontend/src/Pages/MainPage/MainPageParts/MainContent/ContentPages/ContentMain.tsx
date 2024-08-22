import { useEffect, useState } from "react";
import ContentLine from "../MainContentComponents/ItemComponents/ContentLine";
import axios from "axios";
import { EApi } from "../../../../../utils/paths";
import EmptyPage from "../MainContentComponents/EmptyPage";

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

  const [contentData , setContentData]  = useState<TContent>({title:"" , items : []})

  useEffect(()=>{ 
    
    const url = EApi.CONTENT

    axios.get(url).then((resp) => {
      console.log(resp.data)
      setContentData(resp.data) 
    })

  } , [])

  return (
    <section>
      <div className="flex flex-col p-2">
        {renderContent(contentData)}
      </div>
    </section>
  )
}

const renderContent = (contentData : TContent) =>{
  
  if (contentData.items.length){
    return (contentData.items.map((item) => 
      <ContentLine title={item.title} items={item.items} id={item.id} key={item.id} type={item.type_of}></ContentLine>
    ))
  }
  else {
    console.log("fail")
    return <EmptyPage></EmptyPage>
  }
    
}
