import { useState } from 'react';
import ArtistForm from './ArtistForm';

const ArtistShow = ({ id, title, body, updateArtist, deleteArtist }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <h3>{title}</h3>
      <p>{body}</p>
      { editing ?
        <>
          <ArtistForm 
            id={id}
            title={title}
            body={body}
            updateTrip={updateArtist}
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