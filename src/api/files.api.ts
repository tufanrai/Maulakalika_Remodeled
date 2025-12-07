import axiosInstance from "./axios.instance";

export const fetchFiles = async () => {
  try {
    const response = await axiosInstance.get("/files");
    return response.data;
  } catch (err: any) {
    return err.message;
  }
};

export const fetchSpecificFile = async () => {
  try {
    const id = sessionStorage.getItem("file_url") ?? "";
    const response = await axiosInstance.get(`/files/${id}`);
    return response.data;
  } catch (err: any) {
    return err.message;
  }
};
