import PlayButton from '../../../MainContentComponents/PlayButton'
import TracksContainer from '../../../MainContentComponents/TracksContainer'

const BestResult = () =>{
    return(
        <div className='w-1/3 '>
            <h2 className='font-bold text-2xl pb-4'>Лучший результат</h2>
            <div className='flex flex-col bg-main_d_black rounded-md p-5 hover:bg-main_l_black relative group'>
                <PlayButton></PlayButton>
                <div className='h-1/2'>
                    <img src="https://i.scdn.co/image/ab67616d00001e02ca7d1cfaf54216f536665f91" className='rounded-md w-1/3' alt="" />
                </div>
                <h1 className='font-bold text-3xl pt-3'>SnoopDogg</h1>
                <div className='flex font-bold py-1 pb-5'>
                    <p className='text-main_l_grey'>Трек</p>
                    <p className='px-3 font-bold text-main_l_grey'>·</p>
                    <p>Fede</p>
                </div>
            </div>
        </div>
    )
}

const BestSearchForTracks = ()=>{
    return(
        <div className='w-2/3 ml-5'>
            <h2 className='font-bold text-2xl pb-4'>Треки</h2>
            <TracksContainer></TracksContainer>
        </div>
    )
}

export default function SearchTracksBlock() {
  return (
    <div className='flex px-10 py-4'>
        <BestResult></BestResult>
        <BestSearchForTracks></BestSearchForTracks>
    </div>
  )
}
