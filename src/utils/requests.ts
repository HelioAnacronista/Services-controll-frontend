import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./system";


export function requestBackend(config: AxiosRequestConfig) {
   //testando se for v ele acresenta o token
   const headers = config.withCredentials ?
      {
         ...config.headers,
      }
      : config.headers;

   return axios({ ...config, baseURL: BASE_URL, headers });
}
