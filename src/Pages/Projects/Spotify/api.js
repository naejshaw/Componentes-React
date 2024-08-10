const api = {
    getPlaylists: async () => {
      const response = await fetch('https://api.spotify.com/v1/me/playlists');
      const data = await response.json();
      return data;
    },
  
    getTracks: async (playlistId) => {
      const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`);
      const data = await response.json();
      return data;
    },
  };
  
  export default api;