import React from 'react';

function Player({ tracks, selectedTrack, onSelect }) {
  return (
    <div>
      <h2>Player</h2>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            <button onClick={() => onSelect(track)}>{track.name}</button>
          </li>
        ))}
      </ul>
      {selectedTrack && (
        <div>
          <h3>Selected Track:</h3>
          <p>{selectedTrack.name}</p>
          <p>{selectedTrack.artists[0].name}</p>
        </div>
      )}
    </div>
  );
}

export default Player;