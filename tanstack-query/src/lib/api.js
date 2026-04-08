import axios from "axios"

const axiosInstance = axios.create({
    baseURL : "http://localhost:3000",  // backned url 
    withCredentials :true  // for cookies
})

export default axiosInstance