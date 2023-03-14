import axios from "axios";

const Api = axios.create({
  baseURL: "https://team-a.onrender.com/api",
});

export default Api;
