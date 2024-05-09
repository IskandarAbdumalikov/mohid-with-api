
import axios from "axios";

const API_URL = "https://dummyjson.com/";

const mainUrl = axios.create({
  baseURL: API_URL,
});

export default mainUrl;
