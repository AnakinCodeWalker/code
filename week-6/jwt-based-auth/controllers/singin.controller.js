import users from "../index.js"
import crypto from 'crypto'
import jwt from "jsonwebtoken"


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

    //creating a token..
    const token = crypto.randomBytes(16).toString('hex')

    //later on i will be creating the jwt as well 
    signedUp.token = token

    //consoling the array to see if everything works fine or not ?
    console.log(users)

    //returning the token for my own ease to hit the authenticated endpoint..
    return res.status(200).json({
        "message": "user signed in",
        "token": token
    })
}
export default signInHandler