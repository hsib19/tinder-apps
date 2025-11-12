import axios from "axios";
import { config } from "../config";

const api = axios.create({
    baseURL: config.baseURL,
    timeout: config.timeout,
    headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
    async (request) => {
        const token = config.authToken;
        if (token) {
            request.headers.Authorization = `Bearer ${token}`;
        }
        return request;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    response => response,
    error => {
        console.error("API Error:", error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default api
