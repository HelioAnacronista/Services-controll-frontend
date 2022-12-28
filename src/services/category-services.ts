import axios, { AxiosRequestConfig } from 'axios';

import { BASE_URL } from '../utils/system';
import { CategoryDTO } from '../models/category';
import { requestBackend } from '../utils/requests';

const xhr = new XMLHttpRequest();

export function findPageRequest(page: number, name : string, size = 10 ,sort = "id") {
   
   const url = `${BASE_URL}/category?page=${page}&name=${name}&size=${size}&sort=${sort}`;
 
   xhr.open('GET', url);
   xhr.onload = function () {
     if (xhr.status === 200) {
       console.log(xhr.responseText);
     } else {
       console.log('Error: ' + xhr.status);
     }
   };
   xhr.send();
 }
 

export function findById(id: number) {
   return axios.get(`${BASE_URL}category/${id}`);
}

export function deleteById(id: number) {
   const config : AxiosRequestConfig = {

      method: "DELETE",
      url: `category/${id}`,
   }

   return requestBackend(config);
}

export function updateRequest(obj : CategoryDTO) {
   const config : AxiosRequestConfig = {
      method: "PUT",
      baseURL : BASE_URL,
      url: `category/${obj.id}`,
      data: obj
   }

   return requestBackend(config);
}

export function insertRequest(obj : CategoryDTO) {
   const config : AxiosRequestConfig = {
      method: "POST",
      baseURL : BASE_URL,
      url: `category`,
      data: obj
   }
   return requestBackend(config);
}

export function getListRequest() {
   const config : AxiosRequestConfig = {
       method : "GET",
       baseURL: BASE_URL,
       url: "category/list",
   }

   return requestBackend(config);
}