import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";

export function getMe() {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "/users/me",
  };

  return requestBackend(config);
}
