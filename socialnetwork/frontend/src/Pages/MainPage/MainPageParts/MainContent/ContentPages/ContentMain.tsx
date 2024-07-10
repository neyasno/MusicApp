import { IItem } from "../MainContentComponents/ItemComponents/Item";
import ItemsContainer from "../MainContentComponents/ItemComponents/ItemsContainer";

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

  return (
    <section>
      <div className="flex flex-col p-2">
        <ItemsContainer title="Популярные исполнители" items={itemsData} ></ItemsContainer>
      </div>
    </section>
  )
}
