import axios, { AxiosInstance } from "axios";

export const mksAPI: AxiosInstance = axios.create({
    baseURL: 'https://mks-challenge-api-frontend.herokuapp.com/api/v1/',
});

