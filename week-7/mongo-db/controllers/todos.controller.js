//GET
// authenticated endpoint[means u can only access them after u are signed in/authenticated]

//doing auth then providing the specific user detail..

import dotenv from 'dotenv'
import jwt from "jsonwebtoken"

import Todo from '../models/todos.model'

dotenv.config()
const SECRET_KEY =process.env.SECRET_KEY

//here you can see your todos
const todosHandler=async (req,res)=>{

    // user will give the token and it will return the todos user belong to 
    const token = req.headers.token
   
    if(!token){
    return res.json({
        "message":"send the token"
    })
   }
   const verifyUser = jwt.verify(token,SECRET_KEY)model
   const {email ,id} =verifyUser

   const userTodos = await Todo.findOne({
    userId:id
   })

  return res.status(200).json({
    message: "Todos fetched successfully",
    email: email,
    todos: userTodos
  })
}

export default todosHandler