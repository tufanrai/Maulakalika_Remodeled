import axios from "axios";
import Cookies from "js-cookie";

const accessToken = Cookies.get("access token")!;

const axiosInstance = axios.create({
  baseURL: "https://maulakalika-server.onrender.com",
  headers: {
    Authorization: `BEARER ${accessToken}`,
  },
});

export default axiosInstance;
