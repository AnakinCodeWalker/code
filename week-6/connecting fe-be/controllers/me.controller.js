import User from "../models/User.model";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const SECRET_KEY =process.env.SECRET_KEY

const meHandler =async (req,res)=>{

    const token = req.headers.token
 
    if (!token) {
      return res.status(401).json({
         message: "No token provided." 
        })
    }
if(!SECRET_KEY)
    return res.json({
    "message":"provide a SECRET_KEY"
})
    const  decodedData = jwt.verify(token,SECRET_KEY)

try {
    const findUser =await User.findById(decodedData.id)

    if(findUser){
        return res.json({
            findUser
        })
    }  
} catch (error) {
    console.error("Error verifying token:", error);
   
    return res.status(401).json({
        message: "Invalid or expired token.",
        error: error.message,
    })
}
  
}
export default meHandler