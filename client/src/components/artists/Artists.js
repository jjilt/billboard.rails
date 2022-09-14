import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ArtistList from './ArtistList';
import ArtistForm from './ArtistForm';

const Artists = () => {
  const [artists, setArtists] = useState([])

  const { playlistId } = useParams()

  useEffect( () => {
    axios.get(`/api/playlists/${playlistId}/playlists`)
      .then( res => setArtists(res.data) )
      .catch( err => console.log(err) )
  }, [])

  const addArtist = (artist) => {
    axios.post(`/api/playlists/${playlistId}/artists`, { artist })
      .then( res => setArtists([...artists, res.data]))
      .catch( err => console.log(err) )
  }

  const updateArtist = (id, artist) => {
    axios.put(`/api/playlists/${playlistId}/artists/${id}`, { artist })
      .then(res => {
        const newUpdatedArtists = artists.map( t => {
          if (t.id === id) {
            return res.data
          }
          return t
        })
        setAtists(newUpdatedArtists)
      })
      .catch( err => console.log(err) )
  }

  const deleteArtist = (id) => {
    axios.delete(`/api/playlists/${playlistId}/playlists/${id}`)
      .then( res => {
        setArtists( artists.filter( t => t.id !== id ))
      })
      .catch( err => console.log(err) )
  }

  return (
    <>
      <h1>Artists</h1>
      <ArtistForm 
        addArtist={addArtist}
      />
      <ArtistList 
        artist={artists}
        updateArtist={updateArtist}
        deleteArtist={deleteArtist}
      />
    </>
  )
}

export default Artists;