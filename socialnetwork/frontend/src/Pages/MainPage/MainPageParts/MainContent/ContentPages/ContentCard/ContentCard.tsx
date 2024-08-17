import { useEffect, useState } from "react";
import CardAddition from "./ContentCardParts/CardAddition";
import CardHeader from "./ContentCardParts/CardHeader";
import CardList from "./ContentCardParts/CardList";
import CardPlayer from "./ContentCardParts/CardPlayer";
import { TTrack } from "./ContentCardWrapper";

type TCard ={
  id :string , 
  title : string , 
  image : string , 
  description : string , 
  type : string , 
  tracks : TTrack[]
}

export default function ContentCard({id , title , image , description , type , tracks} : TCard) {

  return (
    <section>
      <div className="flex flex-col">
        <CardHeader title={title} description={description} type={type} image={image}></CardHeader>
        <CardPlayer></CardPlayer>
        <CardList tracks={tracks}></CardList>
        <CardAddition></CardAddition> 
      </div>
    </section>
  )
}

