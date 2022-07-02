import axios, { AxiosRequestConfig } from "axios";
// export default axios.create({
//   baseURL: "http://localhost:8080",
//   headers: {
//     "Content-type": "application/json",
//   },
// });

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
});

const ApiService = {
  async get(url: string, config?: AxiosRequestConfig) {
    try {
      return await axiosInstance.get(url, config);
    } catch (reason) {
      return Promise.reject(reason);
    }
  },
  async post(url: string, data: unknown) {
    try {
      return await axiosInstance.post(url, data);
    } catch (reason) {
      return Promise.reject(reason);
    }
  },
  async delete(url: string, config?: AxiosRequestConfig) {
    try {
      return await axiosInstance.delete(url, config);
    } catch (reason) {
      return Promise.reject(reason);
    }
  },
};

export default ApiService;
