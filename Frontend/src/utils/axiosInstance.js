import axios from 'axios';
import { BASE_URL } from './apiPaths';

//* Since we need to handle multiple apis , therefore creating an instance will be a better option
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 80000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
});
 
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },(error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if(error.response){
            if(error.response.status===401){
                // Redirecting to the login page
                window.location.href = "/";
            }
            else if(error.response.status===500){
                console.error("Server error. Please try again later.");
            }
        }
        else if(error.code === "ECONNABORTED"){
            console.error("Request timed out. Please try again.");
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;