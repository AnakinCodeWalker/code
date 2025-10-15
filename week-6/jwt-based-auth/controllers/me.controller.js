// this is an auhtenticated endpoint [an enpoint that needs authentication to be accessed]
import dotenv from 'dotenv'
import users from "../index.js"
import jwt from "jsonwebtoken"
dotenv.config

const SECRET_KEY=process.env.SECRET_KEY

const detailHandler = (req, res) => {

    const token = req.headers.token
    
    if(!token){
       return res.json({
      "message": "send the token"
    })
    }
    //u can store more things and decode them as well into jwt

    //decoding the name of the user from the jwt

    //takes the  jwt token and secret_key
    const decodedInfo =jwt.verify(token,SECRET_KEY)
   
    //when i was signin i passed the name so i can destruct and took out the name if i have send something else i can destruct that as well..
    const {name}=decodedInfo
    
    console.log(users)

    //here we were finding the token but now we have to check for the name , we will check for the specific user name and send thier password/email
    //jis user ka name match kr rha hai usko find kr rhe hai yaha pr 
    const User = users.find(u => u.name === name)



    if (User == undefined) {
        return res.json({
            "message": "send the token"
        })
    }

 

    return res.json({
        "name": name,
        "email": User.email
    })

}
export default detailHandler