import SongShow from './SongShow';

const SongList = ({ songs, updateSong, deleteSong }) => (
  <>
    { songs.map( s => 
      <SongShow
        key={s.id}
        {...s}
        updateSong={updateSong}
        deleteSong={deleteSong}
      />
    )}
  </>
)

export default SongList;