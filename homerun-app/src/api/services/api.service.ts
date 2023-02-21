import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use(
  (config: any) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) config.headers["Authorization"] = `Bearer ${accessToken}`;
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);

export default instance;
