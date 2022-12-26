import axios, { AxiosRequestConfig } from 'axios';

import { BASE_URL } from '../utils/system';

export function findPageRequest(page : number) {
    const config : AxiosRequestConfig = {
        method : "GET",
        baseURL: BASE_URL,
        url: "work/min",
        params: {
           page,
        }
    }

    return axios(config);
}

export function getLast() {
    //converter os dtos em min
    return axios.get(`${BASE_URL}/work/lasts`)
}

export function findById(id: number) {
    return axios.get(`${BASE_URL}/work/${id}`);
}