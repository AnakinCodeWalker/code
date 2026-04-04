import React, { useEffect } from 'react'
import { useState } from 'react'
// custom hook dont return compont they return data 
const usePost = () => {

    const [post, SetPost] = useState({})
    const [loading , SetLoading] = useState(false)
    const apiCall = async () => {
        const result = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await result.json();
        SetPost(data[0])
        SetLoading(true)
    }
    useEffect(() => {

        apiCall()

    }, [])

    return { 
        post :post ,
         loading :  loading
        }


}

export default usePost