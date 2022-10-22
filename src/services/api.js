import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://portal.americau.com/woogi/0.1/actor/cgi.php'
});

export const apiCallerGet = (data) => axiosInstance.get("", data)
export const apiCallerPost = (data) => axiosInstance.post("", data)
export const imagesBase = "https://portal.americau.com"
