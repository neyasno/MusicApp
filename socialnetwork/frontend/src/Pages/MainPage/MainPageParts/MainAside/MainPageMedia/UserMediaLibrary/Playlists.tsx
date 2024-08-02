import TrackPortative, { ITrackPortative } from "../../../MainContent/MainContentComponents/TrackComponents/TrackPortative";

export default function Playlists({playlists} : {playlists : ITrackPortative[]}) {

  return (
    <div className="px-4 flex flex-col">
        <ul>
            {playlists.map((playlist , key) => (
                <TrackPortative title={playlist.title} time={playlist.time} img={playlist.img} link={playlist.link} key={key}></TrackPortative>
            ))}
        </ul>
    </div>
  )
}
