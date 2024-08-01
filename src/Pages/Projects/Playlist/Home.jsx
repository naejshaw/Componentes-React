import { useEffect, useRef, useState } from "react";
import Site from "../../../Layouts/SiteLayout";
import api from '../services/api.js'; 
import ReactPlayer from "react-player";

export default function Playlist()
{
//TODO: Pesquisar e estruturar
    const [playlists, setPlaylists] = useState([]);
    const [currentPlaylist, setCurrentPlaylist] = useState(null);
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (query) => {
        try {
        const response = await api.search(query);
        setSearchResults(response.data);
        } catch (error) {
        console.error('Erro na busca:', error);
        }
    };

    const handlePlaylistSelect = (playlist) => {
        setCurrentPlaylist(playlist);
    };

    useEffect(() => {
        // Carregar playlists salvas (se houver)
        const savedPlaylists = localStorage.getItem('playlists');
        if (savedPlaylists) {
        setPlaylists(JSON.parse(savedPlaylists));
        }
    }, []);

    return(<>
        <Site>
            <div id="container" className="mt-24 p-8 flex items-center justify-start">
                <SearchBar onSearch={handleSearch} />
                <PlaylistG
                    playlists={searchResults.length > 0 ? searchResults : playlists}
                    onSelect={handlePlaylistSelect}
                />
                {currentPlaylist && <Player playlist={currentPlaylist} />}
            </div>
        </Site>
    </>);
}

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const results = await api.search(query);
      onSearch(results);
    };
  
    // ...
  }

  function PlaylistG({ playlist }) {
    return (
      <div>
        <h2>{playlist.name}</h2>
        <ul>
          {playlist.items.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    );
  }

  function Player({ playlist }) {
    const [playing, setPlaying] = useState(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const playerRef = useRef(null);
  
    const handlePlayPause = () => {
      setPlaying(!playing);
    };
  
    const handleNext = () => {
      setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % playlist.length);
    };
  
    const handlePrev = () => {
      setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + playlist.length) % playlist.length);
    };
  
    const handleProgress = (progress) => {
      // Atualiza a barra de progresso
      // ...
    };
  
    return (
      <div>
        <ReactPlayer
          ref={playerRef}
          url={playlist[currentTrackIndex].url}
          playing={playing}
          controls
          onProgress={handleProgress}
          onEnded={handleNext}
        />
        <div>
          <button onClick={handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
          <button onClick={handlePrev}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    );
  }