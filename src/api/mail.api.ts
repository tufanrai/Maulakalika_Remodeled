import { IForm } from "@/components/interface/interfaces";
import axiosInstance from "./axios.instance";

// send mail data
const mailAdmin = async (data: IForm) => {
  try {
    const response = await axiosInstance.post("/mail/", data);
    return response.data;
  } catch (err: any) {
    return err.message;
  }
};

export default mailAdmin;
