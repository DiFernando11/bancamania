import { ENV } from "@/config/envConfig";
import axios from "axios";

const apiAxios = axios.create({
  baseURL: ENV.API_URL,
  withCredentials: true,
});

export default apiAxios;
