import { useState, useEffect } from 'react';

const ArtistForm = ({ addArtist, id, title, body, setEdit, updateArtist }) => {
  const [artist, setArtist] = useState({ title: '', body: '' })

  useEffect( () => {
    if (id) {
      setArtist({ title, body })
    }
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateArtist(id, artist)
      setEdit(false)
    } else {
      addArtist(artist)
    }
    setArtist({ title: '', body: '' })
  }

  return (
    <>
      <h2>{id ? 'Edit' : 'Create'} Artist</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        {/* string */}
        <input 
          name='title'
          value={artist.title}
          onChange={(e) => setArtist({ ...artist, title: e.target.value })}
          required
        />
     
        <label>Body</label>
        {/* text */}
        <textarea
          name='body'
          value={topic.body}
          onChange={(e) => setArtist({ ...artist, body: e.target.value })}
          required
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default ArtistForm;