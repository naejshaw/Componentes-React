import axios from 'axios';

const clientId = 'bc54d1cb90f44c83971d5ee709a82c52'; // Substitua pelo seu client ID do Spotify
const clientSecret = '37c8daf484c044f9a795f2c72220d82d'; // Substitua pelo seu client secret
const redirectUri = 'http://localhost:3000/callback'; // Substitua pela sua URI de redirecionamento

const authEndpoint = 'https://accounts.spotify.com/authorize';
const tokenEndpoint = 'https://accounts.spotify.com/api/token';

let accessToken = null;

// Função para obter o token de acesso
const getAccessToken = async () => {
  if (accessToken) {
    return accessToken;
  }

  const response = await axios.post(tokenEndpoint, {
    grant_type: 'client_credentials',
    client_id: clientId,
    client_secret: clientSecret,   

  });

  accessToken = response.data.access_token;
  return accessToken;
};

// Função para fazer uma requisição à API do Spotify
const apiCall = async (endpoint, method = 'GET', body = null) => {
  const token = await getAccessToken();
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios({
      method,
      url: `https://api.spotify.com/v1${endpoint}`,
      data: body,
      headers,
    });
    return response.data;
  } catch (error) {
    console.error('Erro na requisição à API:', error);
    throw error;
  }
};