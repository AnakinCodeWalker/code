//POST
import User from "../models/Users.model.js"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const SECRET_KEY = process.env.SECRET_KEY



const signinHandler = async (req, res) => {

    const { name, email, password } = req.body

    if (!name || !email || !password) {
        return res.json({
            "message": "all fields are required"
        })
    }


    // findone method return null actually not throw an error previously  i was binding things into try catch 
    const userFound = await User.findOne({
        name: name,
        email: email,
        password: password
    })

    //somehow if the user did not signedup it should do that first
    // i am feeling somethings fishy over here i was right indeed 

    if (!userFound) {
        return res.json({
            "message": "sign up first"
        })
    }





    // then create the Token

    /* need a review as far as i can remember
    
    sign method takes a payload , secret_key and 1 more thing
    */

    // payload should genrally store a unique id of user so they can be identified easily
    const payload = {
        email: email //i am going with email as i marked it to be unique u can go with id as well 
    }

    //here you can see u dont have to hop to db to find the specific user
    const token = jwt.sign(payload, SECRET_KEY)



    return res.json({
        "message": "you singed in",
        name,
        email,
        token
    })

}
export default signinHandler
