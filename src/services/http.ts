import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const http: AxiosInstance = axios.create({
  baseURL: "/api/",
  timeout: 300000,
  headers: {},
});

http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    console.log("请求出错", "error=" + error);
  }
);

export function get(url, params) {
  return new Promise((resolve, reject) => {
    http
      .get(url, params)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function post(url, data) {
  return new Promise((resolve, reject) => {
    http
      .post(url, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
