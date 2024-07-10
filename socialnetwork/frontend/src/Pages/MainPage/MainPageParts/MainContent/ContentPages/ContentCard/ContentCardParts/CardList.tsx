import Track, { ITrack } from "../../../MainContentComponents/TrackComponents/Track"

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


export default function CardList() {

  const data : ITrack[] = [];

  for(let i = 1 ; i<=24 ; i++){

    data[i] = {

      id : i ,
      name :  `Track Name ${i}` ,
      link : `track/${i}` , 
      time : `3:12` ,
      author : `Author ${i}` , 
      author_link : `author/${i}` , 
      img: "https://i.scdn.co/image/ab67616d0000b27370ebd1b40be2fa37d043ee14" ,

    }

  }
  

  return (
    <div className="p-4">
        <CardListHeader></CardListHeader>
        <ul className="flex flex-col pt-3">
          {data.map((item) => (<Track 
                                          id={item.id}
                                          name={item.name} 
                                          author={item.author} 
                                          author_link={item.author_link}
                                          link={item.link}
                                          time={item.time} 
                                          key={item.id}
                                          img = {item.img}
            ></Track>))}
        </ul>
    </div>
  )
}
