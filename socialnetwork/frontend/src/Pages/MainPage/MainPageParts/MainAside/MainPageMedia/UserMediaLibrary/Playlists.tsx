import PlaylistPortative, { TPlaylistPortative } from "../../../MainContent/MainContentComponents/PlaylistPortative";

export default function Playlists({playlists} : {playlists : TPlaylistPortative[]}) {

  return (
    <div className="px-4 flex flex-col">
        <ul>
            {playlists && playlists.map((playlist , key) => (
                <PlaylistPortative title={playlist.title}  image={playlist.image} id={playlist.id} items={playlist.items} key={key}/>
            ))}
        </ul>
    </div>
  )
}
