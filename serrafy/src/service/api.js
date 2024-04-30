import axios from "axios";

const api = axios.create({
  baseURL: "https://6542c2e301b5e279de1f8bd8.mockapi.io/musicas",
});

export default api;
