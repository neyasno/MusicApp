
import AdditionalSettings from "./PlayerComponents/AdditionalSettings";
import Controller from "./PlayerComponents/Controller";
import PlayerTrack from "./PlayerComponents/PlayerTrack";


export default function Player() {

  return (
    <div className='w-full h-full bg-main_black flex justify-between rounded-lg'>

        <PlayerTrack img="https://i.scdn.co/image/ab67616d00001e02ca7d1cfaf54216f536665f91" time="" title="ONBADSSss" link="" description="Dsdad , sdADD"></PlayerTrack>
        <Controller></Controller>
        <AdditionalSettings></AdditionalSettings>

    </div>
  )
}
