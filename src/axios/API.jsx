import axios from "axios";

const API = axios.create({
  baseURL: "https://team-a.onrender.com/api",
});

export default API;
