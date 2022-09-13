import { useState } from 'react';

const PlaylistForm = ({ addPlaylist }) => {
  const [playlist, setPlaylist] = useState({ title: '' })

  useEffect( () => {
    if (id) {
      setPlaylist({ id, title, })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updatePlaylist(id, playlist)
      setPlaylist(false)
    } else {
      addPlaylist(playlist);
    }
    setPlaylist({ title: ''})
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Add A Playlist"
        required
        value={playlist.title}
        onChange={(e) => setPlaylist({ ...playlist, title: e.target.value })}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default PlaylistForm;