import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",  // backned url 
    withCredentials: true  // for cookies
})

export default axiosInstance

export const getTodos = async () => {
    const result = axiosInstance.get("/todos")
    return (await result).data
}

export const postTodos = async (newTodo) => {
    const { data } = axiosInstance.post("/todos", newTodo)
    // const data = await result.json()
    return data
}