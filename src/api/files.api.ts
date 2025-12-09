import axiosInstance from "./axios.instance";

// API to fetch the projects
export const fetchFiles = async () => {
  try {
    const response = await axiosInstance.get("/files");
    return response.data;
  } catch (err: any) {
    return err.message;
  }
};

export const fetchSpecificFile = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/files/${id}`);
    return response.data;
  } catch (err: any) {
    return err.message;
  }
};

// API to fetch the list of news
export const fetchNews = async () => {
  try {
    const response = await axiosInstance.get("/news");
    return response.data;
  } catch (err: any) {
    return err.message;
  }
};

export const FetchSpecificNews = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/news/${id}`);
    return response.data;
  } catch (err: any) {
    return err.message;
  }
};

// API to fetch latest reports of the company
export const fetchReports = async () => {
  try {
    const response = await axiosInstance.get("/reports/");
    return response.data;
  } catch (err: any) {
    return err.message;
  }
};

export const FetchSpecificReport = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/reports/${id}`);
    return response.data;
  } catch (err: any) {
    return err.message;
  }
};
