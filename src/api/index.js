import axios from 'axios';

const getHeaders = () => ({

});



const getBaseURL = () => "https://lab.lectrum.io/redux/api";

export const axiosInstance = axios.create({
    baseURL: getBaseURL(),
    headers: {
        'Content-Type': 'application/json',
    }
})

const customizeRequest = res => ({ ...res, getHeaders })

axiosInstance.interceptors.request.use(res => customizeRequest(res), null);
