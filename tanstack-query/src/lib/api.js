import axios from "axios"

const axiosInstance = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com",  // backned url 
    withCredentials :true  // for cookies
})

export default axiosInstance

export  const getTodos = async () => {
    const result = axiosInstance.get("/todos")
    // const data = await result.json()
    return (await result).data
}