import axios, { AxiosRequestConfig } from 'axios';

import { BASE_URL } from '../utils/system';

export function findPageRequest(page: number, name : string, size = 10 ,sort = "name") {
   const config : AxiosRequestConfig = {
       method : "GET",
       baseURL: BASE_URL,
       url: "category",
       params: {
          page,
          name,
          size,
          sort
       }
   }


   return axios(config);
}

export function findById(id: number) {
   return axios.get(`${BASE_URL}/work/${id}`);
}