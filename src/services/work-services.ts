import axios, { AxiosRequestConfig } from 'axios';

import { WorkDTOInset } from '../models/work';
import { requestBackend } from '../utils/requests';
import { BASE_URL } from '../utils/system';


export function findPageRequest(page: number, name: string, size = 10, sort = "id") {
    const config: AxiosRequestConfig = {
        method: "GET",
        baseURL: BASE_URL,
        url: "work",
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

export function getLast() {
    const config: AxiosRequestConfig = {
        method: "GET",
        url: `/work/lasts`,
    }

    return requestBackend(config);
}

export function deleteById(id: number) {
    const config: AxiosRequestConfig = {
        method: "DELETE",
        url: `/work/${id}`,
    }

    return requestBackend(config);
}

export function updateRequest(obj: WorkDTOInset) {
    const config: AxiosRequestConfig = {
        method: "PUT",
        baseURL: BASE_URL,
        url: `/work/${obj.id}`,
        data: obj
    }

    return requestBackend(config);
}

export function insertRequest(obj: WorkDTOInset) {
    const config: AxiosRequestConfig = {
        method: "POST",
        baseURL: BASE_URL,
        url: `/work`,
        data: obj
    }
    return requestBackend(config);
}