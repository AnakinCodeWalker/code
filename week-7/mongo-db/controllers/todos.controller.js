//GET
// authenticated endpoint[means u can only access them after u are signed in/authenticated]

import dotenv from 'dotenv'
import jwt from "jsonwebtoken"

dotenv.config

//here you can see your todos
const todosHandler=(req,res)=>{

    // user will give the token and it will return the todos user belong to 
    const token = req.headers.token
   
    if(!token){
    return res.json({
        "message":"send the token"
    })
   }

   //decrypt the toke and find the user and send its token

   const decodedInfo =jwt.verify(token,SECRET_KEY)

}
export default todosHandler