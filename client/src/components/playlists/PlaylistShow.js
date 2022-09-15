import { useState } from 'react';
import PlaylistForm from './PlaylistForm';
import { Link } from 'react-router-dom';

const PlaylistShow = ({ id, title, deletePlaylist, updatePlaylist }) => {

  const [editing, setEdit] = useState(false)

  return (
    <>
      { editing ?
        <>
          <PlaylistForm 
            updatePlaylist={updatePlaylist}
            id={id}
            title={title}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>
            Cancel
          </button>
        </>
        :
        <div>
          <h1> {title} </h1>
        <button onClick={() => setEdit(true)}>
            Edit
            </button>
          <button onClick={() => deletePlaylist(id)}>
            Delete
          </button>
          <Link
            to={`/${id}/artists`} //path of where its going to 
            // id the list id
            state={{ PlaylistTitle: title }}
            // state only read only value to pass to the page
          >
            <button>Artists</button>
          </Link>
        </div>
      }
      <hr />
    </>
  )
}

export default PlaylistShow;

