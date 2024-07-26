
import AdditionalSettings from "./AdditionalSettings";
import Controller from "./Controller";
import PlayerTrack from "./PlayerTrack";


export default function Player() {

  return (
    <div className='w-full bg-main_black flex justify-between'>

        <PlayerTrack img="https://i.scdn.co/image/ab67616d00001e02ca7d1cfaf54216f536665f91" time="" title="ONBADSSss" link="" description="Dsdad , sdADD"></PlayerTrack>
        <Controller></Controller>
        <AdditionalSettings></AdditionalSettings>

    </div>
  )
}
