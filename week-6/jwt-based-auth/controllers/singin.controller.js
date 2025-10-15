// prevoiusly i was creating a token now i have to take the name and convert it into jwt


import dotenv from 'dotenv'
import users from "../index.js"
import crypto from 'crypto'
import jwt from "jsonwebtoken"
dotenv.config

const SECRET_KEY=process.env.SECRET_KEY


const signInHandler = (req, res) => {
    const { name, email } = req.body

    if (!name || !email) {
        return res.json({
            "message": "all fields are required"
        })
    }
    console.log(users)

    //finding if the user is signed in or if not then telling to signin first.. 
    const signedUp = users.find(u => u.name === name && u.email === email)

    if (signedUp === undefined) {
        return res.json({
            "message": "signup first"
        })
    }

    /*
           //creating a token..
    const token = crypto.randomBytes(16).toString('hex')
    // putting it in the specific user  
    signedUp.token = token
    */


   //NOW THE JWT IMPLEMENTATION..
//    take the name and convert it into jwt

// sign() take 2 arguments {} ,secret_key
/*
1.what do you want to encode or encrypt i forgot the name into a token
2.what is the secret u are using to sign/encrypt/encode this specific token..
*/
const token=jwt.sign({
    name
},SECRET_KEY)

    //consoling the array to see if everything works as expected or not ?
    console.log(users)

    //returning the token for my own ease to hit the authenticated endpoint..
    return res.status(200).json({
        "message": "user signed in",
        "token": token
    })
}
export default signInHandler


//there is no need for this to be stored in the database as it will be stateless so i can give it to the user