import User from "../models/User.model";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
dotenv.config()

const  SECRET_KEY =process.env.SECRET_KEY
const signinHandler =async (req,res)=>{
 const { name, password, email } = req.body

    if (!name || !password || !email) {
        return res.json({
            "Message": "All fields are required"
        })
    }

    const findUser =await User.findOne({
        email 
    })
    if(!findUser)
        return res.json({
    "message":"sign up first"
})

const payload ={
    id: findUser._id
}


const token = jwt.sign(payload ,SECRET_KEY)
try{
return res.json({
user:{
    name:findUser.name,
 email :findUser.email
}, 
 token
})
}catch(err){
return res.status(500).json({
  "error":"internal server error",
    message:{
        err
    }
})
}

}
export default signinHandler