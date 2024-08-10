import React from 'react';

function PlaylistList({ playlists, onSelect }) {
  return (
    <ul>
      {playlists.map((playlist) => (
        <li key={playlist.id}>
          <button onClick={() => onSelect(playlist)}>{playlist.name}</button>
        </li>
      ))}
    </ul>
  );
}

export default PlaylistList;