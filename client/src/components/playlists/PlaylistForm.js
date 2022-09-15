import { useState, useEffect } from 'react';

const PlaylistForm = ({ addPlaylist, id, title, updatePlaylist, setEdit }) => {
  const [playlist, setPlaylist] = useState({ title: '' })

  useEffect( () => {
    if (id) {
      setPlaylist({ title, })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updatePlaylist(id, playlist)
      setEdit(false)
    } else {
      addPlaylist(playlist);
    }
    setPlaylist({ title: ''})
  }

  return (
    <>
      <h3>{ id ? 'Edit' : 'Create'} Playlist</h3>
      <form onSubmit={handleSubmit}>
        <input 
          name='title'
          value={playlist.title}
          onChange={(e) => setPlaylist({ ...playlist, title: e.target.value })}
          required
          placeholder='Playlist name'
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default PlaylistForm;