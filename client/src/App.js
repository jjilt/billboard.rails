import { useState, useEffect } from 'react';
import PlaylistForm from './components/playlists/PlaylistForm';
import PlaylistList from './components/playlists/PlaylistList';

const App = () => {
  const [playlists, setPlaylists] = useState([])

  useEffect( () => {
    // TODO make a call to our rails server to get all items
  }, [])

  const addPlaylist = (playlist) => {
    // TODO make api call to rails server to add an item
    // TODO update state
  }

  const updatePlaylist = (id, playlist) => {
    // TODO make api call to update an item
    // TODO update state
  }

  const deletePlaylist = (id) => {
    // TODO make api call to delete sub
    // TODO remove it from state
  }

  return (
    <>
      <PlaylistForm addPlaylist={addPlaylist} />
      <br />
      <br />
      <PlaylistList
        playlists={playlists}
        updatePlaylist={updatePlaylist}
        deletePlaylist={deletePlaylist}
      />
    </>
  );
}

export default App;
