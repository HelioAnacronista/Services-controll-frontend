import { AxiosRequestConfig } from "axios";
import { UserDTO } from "../models/user";
import { requestBackend } from "../utils/requests";
import { BASE_URL } from "../utils/system";

export function findMe() {
  const config: AxiosRequestConfig = {
    url: "/users/me",
    withCredentials: true,
  };

  return requestBackend(config);
}

export function findById(id: number) {
  const config: AxiosRequestConfig = {
    url: `/users/${id}`,
    withCredentials: true,
  };

  return requestBackend(config);
}

export function updateRequest(obj: UserDTO) {
  const config: AxiosRequestConfig = {
    method: "PUT",
    baseURL: BASE_URL,
    url: `users/${obj.id}`,
    data: obj,
  };

  return requestBackend(config);
}
