
import BestResult from './SearchTracksBlock/BestResult'
import BestSearchForTracks from './SearchTracksBlock/BestSearchForTracks'

export default function SearchTracksBlock() {
  return (
    <div className='flex px-10 py-4'>
        <BestResult></BestResult>
        <BestSearchForTracks></BestSearchForTracks>
    </div>
  )
}
