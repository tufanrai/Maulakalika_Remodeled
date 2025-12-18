import axios from "axios";
import Cookies from "js-cookie";

const uri = import.meta.env.VITE_API_KEY ?? "";
const accessToken = Cookies.get("access token")!;

const axiosInstance = axios.create({
  baseURL: uri,
  headers: {
    Authorization: `BEARER ${accessToken}`,
  },
});

export default axiosInstance;
