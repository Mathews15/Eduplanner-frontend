import axios from "axios";

const API = axios.create({
  baseURL: "https://eduplanner-backend-cjij.onrender.com"
});

export default API;