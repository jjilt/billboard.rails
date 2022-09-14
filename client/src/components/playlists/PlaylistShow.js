import { useState } from 'react';
import PlaylistForm from './PlaylistForm';
import { Link } from 'react-router-dom';

const PlaylistShow = ({ id, title, deletePlaylist, updatePlaylist }) => {
  // this will keep track of if we are editing
  const [editing, setEdit] = useState(false)

  // conditional rendering - display base off of a condition
  return (
    <>
      <h3>{title}</h3>
      {/* conditional rendering of if I am editing show the form or if not then show the button */}
      {
        editing ?
        <>
          <PlaylistForm 
            updatePlaylist={updatePlaylist}
            id={id}
            title={title}
            setEdit={setEdit}
          />
          <button
            onClick={() => setEdit(false)}
          >
            Cancel
          </button>
        </>
        :
        <button
          onClick={() => setEdit(true)}
        >
            Edit
        </button>
      }
      <button
        onClick={() => deletePlaylist(id)}
      >
        Delete
      </button>
      <Link to={`/${id}/artists`}>
        <button>Artists</button>
      </Link>
    </>
  )
}

export default PlaylistShow;