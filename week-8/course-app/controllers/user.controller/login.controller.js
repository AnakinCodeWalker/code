/* Improvements :
password should be hashed use the bcrypt library 

*/

import User from '../../models/user.model.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()


// user secret key and admin secret key will be diffrent
const USER_SECRET_KEY=process.env.USER_SECRET_KEY

const loginHandler = async (req, res) => {

    const { firstName, lastName, email, password } = req.body

    if (!firstName || !lastName || !email || !password) {
        return res.status(403).json({
            "message": "all fields are required"
        })
    }

    try {
     const currentUser =  await User.findOne({ //return 1 value or undefined
            firstName,
            lastName,
            email
        })

    if(!currentUser){
        return res.json({
            "message":"signup first"
        })
    }
    //token logic
    const payload = {
        //finding the current user and using its 
 id : currentUser.id
    }
    const token = jwt.sign(payload, USER_SECRET_KEY)


return res.status(200).json({
    "message": "User signed up",
    token
})
}
    
    catch (error) {

        return res.status(400).json({
            "message": "something went wrong !",
            error: error.message
        })
    }

}
    

export default loginHandler