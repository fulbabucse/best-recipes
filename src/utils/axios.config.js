import axios from "axios";

const instance = axios.create({
  baseURL: "https://recipes-server.vercel.app/",
});

export default instance;
