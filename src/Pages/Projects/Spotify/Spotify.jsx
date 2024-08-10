import React, { useState, useEffect } from 'react';
import { getPlaylists, getTracks } from './api.js';
import PlaylistList from './PlaylistList.jsx';
import Player from './Player.jsx';

export default function Spotify() {
  const [playlists, setPlaylists] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);

  useEffect(() => {
    getPlaylists().then(data => setPlaylists(data.playlists.items));
  }, []);

  const handlePlaylistSelect = (playlist) => {
    setSelectedPlaylist(playlist);
    getTracks(playlist.id).then(data => setTracks(data.tracks.items));
  };

  const handleTrackSelect = (track) => {
    setSelectedTrack(track);
  };

  return (
    <div>
      <h1>Spotify Player Clone</h1>
      <PlaylistList playlists={playlists} onSelect={handlePlaylistSelect} />
      {selectedPlaylist && (
        <Player
          tracks={tracks}
          selectedTrack={selectedTrack}
          onSelect={handleTrackSelect}
        />
      )}
    </div>
  );
}