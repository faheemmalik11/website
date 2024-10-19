import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const request = axios.create({
    baseURL,
    withCredentials: false,
    headers: {
        'Content-type': '',
        'Access=Control-Allow-origin': '',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS'
    },
});