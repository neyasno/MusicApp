import { ITrack } from "../../MainContentComponents/TrackComponents/Track";
import CardAddition from "./ContentCardParts/CardAddition";
import CardHeader from "./ContentCardParts/CardHeader";
import CardList from "./ContentCardParts/CardList";
import CardPlayer from "./ContentCardParts/CardPlayer";

export default function ContentCard() {

  let data : {tracks: ITrack[]} = {

    tracks:[]
  }

  for(let i = 1 ; i<=24 ; i++){

    data.tracks[i] = {

      id : i,
      name :  `Track Name ${i}` ,
      link : `track/${i}` , 
      time : `3:12` ,
      author : `Author ${i}` , 
      author_link : `author/${i}` , 
      img: "https://i.scdn.co/image/ab67616d0000b27370ebd1b40be2fa37d043ee14" ,

    }

  }

  return (
    <section>
      <div className="flex flex-col">
        <CardHeader color='red-500'></CardHeader>
        <CardPlayer></CardPlayer>
        <CardList tracks={data.tracks}></CardList>
        <CardAddition></CardAddition>
      </div>
    </section>
  )
}
