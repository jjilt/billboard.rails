import { useState, useEffect } from 'react';

const SongForm = ({ addSong, id, title, updateSong, setEdit }) => {
  const [song, setSong] = useState({ title: '' })

  useEffect( () => {
    if (id) {
      setSong({ title })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateSong(id, song)
      setEdit(false)
    } else {
      addSong(song)
    }
    setSong({ title: '' })
  }

  return (
    <>
      <h1>{ id ? 'Update' : 'Create' } Song</h1>
      <form onSubmit={handleSubmit}>
        <input 
          name='title'
          value={song.title} 
          onChange={(e) => setSong({ ...song, title: e.target.value })}
          required
          placeholder='Title'
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default SongForm;