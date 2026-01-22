import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://maulakalika-server.onrender.com",
});

export default axiosInstance;
