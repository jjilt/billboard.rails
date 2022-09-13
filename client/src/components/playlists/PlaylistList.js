import React from 'react';
import Playlist from './Playlist';
const PlaylistList = ({ playlists, updatePlaylist, deletePlaylist }) => (
  <>
    { playlists.map( playlist =>
        <Playlist
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