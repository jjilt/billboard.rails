import { useState } from 'react';
import SongForm from './SongForm';

const SongShow = ({ id, title, updateSong, deleteSong }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      { editing ? 
        <>
          <SongForm
            id={id}
            title={title}
            updateSong={updateSong}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>
            Cancel
          </button>
        </>  
      : 
        <>
          <h1>Song #{id} {title}</h1>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteSong(id)}>
            Delete
          </button>
        </>
      } 
    </>
  )
}

export default SongShow;