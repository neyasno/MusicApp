import Track from "../../../MainContentComponents/TrackComponents/Track"
import { TTrack } from "../ContentCardWrapper"

export default function CardList({tracks}:{ tracks : TTrack[] } ) {
  
  console.log(tracks)

  return (
    <div className="p-4">
        <CardListHeader></CardListHeader>
        <ul className="flex flex-col pt-3">
          {tracks&&tracks.map((item , key) => (<Track 
                                          id={item.id}
                                          number={(key+1)+""}
                                          title={item.title} 
                                          author={item.author} 
                                          key={key}
                                          duration={item.duration}
                                          image={item.image}
                                          genre={item.genre}
                                          filename=""
                                          author_id={item.author_id}
            ></Track>))}
        </ul>
    </div>
  )
}

const CardListHeader = ()=>{
  return(
    <div className="p-1 pb-2 pl-8  border-b-1 border-main_ll_black flex gap-8 text-main_l_grey">
      <h3 className="font-bold">
          #
      </h3>
      <h3 className="font-semibold">Название</h3>
    </div> 
  )
}
