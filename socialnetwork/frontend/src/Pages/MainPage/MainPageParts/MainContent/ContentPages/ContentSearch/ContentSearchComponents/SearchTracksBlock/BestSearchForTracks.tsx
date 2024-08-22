import TracksContainer from '../../../../MainContentComponents/TrackComponents/TracksContainer'

export default function BestSearchForTracks() {
    return(
        <div className='flex flex-col w-2/3 ml-5'>
            <h2 className='font-bold text-2xl pb-4'>Треки</h2>
            <div className='flex-1'>
                <TracksContainer></TracksContainer>
            </div>
        </div>
    )
}
