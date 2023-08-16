import axios from "axios";

export const backEndAxiosInstance = axios.create({
    baseURL:"http://localhost:3001/api"
})