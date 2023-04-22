import axios from "axios";

export const AxiosBase = createAxiosInstance();
function createAxiosInstance(){
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_PATH,
  });
  return axiosInstance;
}