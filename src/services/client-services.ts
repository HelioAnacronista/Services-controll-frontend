import axios, { AxiosRequestConfig } from "axios";

import { BASE_URL } from "../utils/system";
import { requestBackend } from "../utils/requests";
import { ClientDTO } from "../models/client";

export function findPageRequest(
  page: number,
  name: string,
  size = 10,
  sort = "id"
) {
  const config: AxiosRequestConfig = {
    method: "GET",
    baseURL: BASE_URL,
    url: "client",
    params: {
      page,
      name,
      size,
      sort,
    },
  };

  return axios(config);
}

export function findById(id: number) {
  return axios.get(`${BASE_URL}/client/${id}`);
}

export function deleteById(id: number) {
  const config: AxiosRequestConfig = {
    method: "DELETE",
    url: `/client/${id}`,
  };

  return requestBackend(config);
}

export function updateRequest(obj: ClientDTO) {
  const config: AxiosRequestConfig = {
    method: "PUT",
    baseURL: BASE_URL,
    url: `/client/${obj.id}`,
    data: obj,
  };

  return requestBackend(config);
}

export function insertRequest(obj: ClientDTO) {
  const config: AxiosRequestConfig = {
    method: "POST",
    baseURL: BASE_URL,
    url: `/client`,
    data: obj,
  };
  return requestBackend(config);
}

export function getListRequest() {
  const config: AxiosRequestConfig = {
    method: "GET",
    baseURL: BASE_URL,
    url: "client/list",
  };

  return requestBackend(config);
}

export function findPageRequestDirect() {
  return axios.get("https://f09f-129-148-31-83.sa.ngrok.io/client");
}
