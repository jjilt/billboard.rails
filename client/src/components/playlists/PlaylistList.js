import React from 'react';
import PlaylistShow from './PlaylistShow';

const PlaylistList = ({ playlists, updatePlaylist, deletePlaylist }) => (
  <>
    { 
      playlists.map( playlist =>
        <PlaylistShow
          key={playlist.id}
          {...playlist}
          updatePlaylist={updatePlaylist}
          deletePlaylist={deletePlaylist}
        />
      )
    }
  </>
)
export default PlaylistList;