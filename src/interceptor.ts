import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

export const requestInterceptor = function (): any {
  axios.interceptors.request.use(
    async function (config: AxiosRequestConfig) {
      // Append necessary information in headers
      if (config.headers) {
        config.headers.domain = "https://recruitment.hcms.ai";
      }
      return config as InternalAxiosRequestConfig; // Cast here
    },
    function (err) {
      return Promise.reject(err);
    }
  );
};
