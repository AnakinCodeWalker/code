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
    
    // it tries to find the in the User collection ki kiska name email match kr rha hai
    // like i was trying to do with the .find() in array[{objects }] 
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
        // jis user ka credential match hua uska email  use kro 
        email: userFound.email,

       

        //how am i able to access this one ?
        // jis user ka credential match hua uska id use kro 
//later on yhi id extract hoga then verify hoga 
        id:userFound._id.toString() //this is an object and need to be converted to a string
       
    }

    //here you can see u dont have to hop to db to find the specific user
    const token = jwt.sign(payload, SECRET_KEY)



    return res.json({
        "message": "you signed in",
        email,
        token
    })

}
export default signinHandler
