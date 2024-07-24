import TrackPortative, { ITrackPortative } from "../../../MainContent/MainContentComponents/TrackComponents/TrackPortative";

export default function Playlists({playlists} : {playlists : ITrackPortative[]}) {

  return (
    <div className="px-4 flex flex-col">
        <ul>
            {playlists.map((playlist) => (
                <TrackPortative title={playlist.title} time={playlist.time} img={playlist.img} link={playlist.link}></TrackPortative>
            ))}
        </ul>
    </div>
  )
}
