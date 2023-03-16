import axios from "axios";
import { baseUrl } from "../Config.js";

const instance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default instance;
