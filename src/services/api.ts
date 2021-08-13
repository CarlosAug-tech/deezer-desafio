import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.allorigins.win/raw?url=https://api.deezer.com',
});

export default api;
