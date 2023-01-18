import axios, { AxiosRequestConfig } from "axios";

import { ExpenseDTO } from "../models/Expense";
import { requestBackend } from "../utils/requests";
import { BASE_URL } from "../utils/system";

export function findPageRequest(
  page: number,
  name: string,
  size = 10,
  sort = "id"
) {
  const config: AxiosRequestConfig = {
    method: "GET",
    baseURL: BASE_URL,
    url: "expense",
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
  return axios.get(`${BASE_URL}/expense/${id}`);
}

export function deleteById(id: number) {
  const config: AxiosRequestConfig = {
    method: "DELETE",
    url: `expense/${id}`,
  };

  return requestBackend(config);
}

export function updateRequest(obj: ExpenseDTO) {
  const config: AxiosRequestConfig = {
    method: "PUT",
    baseURL: BASE_URL,
    url: `expense/${obj.id}`,
    data: obj,
  };

  return requestBackend(config);
}

export function insertRequest(obj: ExpenseDTO) {
  const config: AxiosRequestConfig = {
    method: "POST",
    baseURL: BASE_URL,
    url: `expense`,
    data: obj,
  };
  return requestBackend(config);
}

export function getListRequest() {
  const config: AxiosRequestConfig = {
    method: "GET",
    baseURL: BASE_URL,
    url: "expense/list",
  };

  return requestBackend(config);
}
