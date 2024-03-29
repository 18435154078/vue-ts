import axios from "axios";
import userStore from "@/store/module/user";

const store = userStore();

const request = axios.create({
  // baseURL: import.meta.env.VITE_API_URL || '/api'
  baseURL: import.meta.env.VITE_BASE_API,
});

// 请求拦截器
request.interceptors.request.use((config) => {
  const token = store.token;
  config.headers.token = token || "";
  return config;
});

// 响应拦截器
request.interceptors.response.use((response) => {
  // console.log(config)
  return response.data;
});

export default request;
