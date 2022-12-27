import axios, { AxiosRequestConfig } from 'axios';

import { BASE_URL } from '../utils/system';
import { categoryDTO } from '../models/category';
import { requestBackend } from '../utils/requests';

export function findPageRequest(page: number, name : string, size = 10 ,sort = "id") {
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
   return axios.get(`${BASE_URL}/category/${id}`);
}

export function deleteById(id: number) {
   const config : AxiosRequestConfig = {
      method: "DELETE",
      url: `/category/${id}`,
   }

   return requestBackend(config);
}

export function updateRequest(obj : categoryDTO) {
   const config : AxiosRequestConfig = {
      method: "PUT",
      baseURL : BASE_URL,
      url: `/category/${obj.id}`,
      data: obj
   }

   return requestBackend(config);
}

export function insertRequest(obj : categoryDTO) {
   const config : AxiosRequestConfig = {
      method: "POST",
      baseURL : BASE_URL,
      url: `/category`,
      data: obj
   }
   return requestBackend(config);
}