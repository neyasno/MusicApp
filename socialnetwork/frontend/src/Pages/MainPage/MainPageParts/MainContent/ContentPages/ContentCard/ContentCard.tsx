import { useEffect, useState } from "react";
import { ITrack } from "../../MainContentComponents/TrackComponents/Track";
import CardAddition from "./ContentCardParts/CardAddition";
import CardHeader from "./ContentCardParts/CardHeader";
import CardList from "./ContentCardParts/CardList";
import CardPlayer from "./ContentCardParts/CardPlayer";
import { useLocation } from "react-router-dom";
import axios from "axios";

type TCard ={
  id :string , 
  title : string , 
  image : string , 
  description : string , 
}

export default function ContentCard() {

  const [cardData , setCardData] = useState<TCard>({id:"" , title:"" , image:"" , description:""})
  const location = useLocation()


  let cardType = cardTypeByPath(location.pathname)

  useEffect(()=>{

    const url = "http://localhost:8080/api" + location.pathname
    console.log(url)
    axios.get(url).then((resp) => {
      console.log(resp.data)
      setCardData(resp.data)
    }).then(
      // axios.get()
    )

  }, [])

  return (
    <section>
      <div className="flex flex-col">
        <CardHeader title={cardData.title} description={cardData.description} type={cardType}></CardHeader>
        <CardPlayer></CardPlayer>
        <CardList tracks={[]}></CardList>
        <CardAddition></CardAddition> 
      </div>
    </section>
  )
}

const cardTypeByPath = (path : string)=>{

  const pathParts = path.split("/")

  switch(pathParts[1]){
    case "authors":{
      return "Автор"
    }
    case "playlists":{
      return "Плейлист"
    }
    case "albums":{
      return "Альбом"
    }
    case "tracks":{
      return "Трек"
    }
    default:{
      return ""
    }
  }
}