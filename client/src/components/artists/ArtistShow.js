import { useState } from 'react';
import ArtistForm from './ArtistForm';
import { Link } from 'react-router-dom';

const ArtistShow = ({ id, title, body, updateArtist, deleteArtist }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      { editing ?
        <>
          <ArtistForm 
            id={id}
            title={title}
            body={body}
            updateArtist={updateArtist}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>
            Cancel
          </button>
        </> 
        :
        <button onClick={() => setEdit(true)}>
          Edit
        </button>
      }
      <button onClick={() => deleteArtist(id)}>
        Delete
      </button>
      <button>Comments</button>
    </>
  )
}

export default ArtistShow;