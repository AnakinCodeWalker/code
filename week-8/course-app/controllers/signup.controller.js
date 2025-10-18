/*
Imprivements todo add 
-->  the bcrypt for password hashing
-->   add zod for  validation
*/
import User from "../models/user.model.js"
const signupHandler = async (req, res) => {

    const { firstName, lastName, email, password } = req.body

    //avoid logging info
    console.log(`fullName is ${firstName + lastName}`)
    console.log(`Email is ${email}`)
    console.log(`Password is ${password}`)

    if (!firstName || !lastName || !email || !password) {
        res.status(400).json({
            "message": "All fields are Required"
        })
    }


    try {
        const FindUser = await User.findOne({
            email: email,
        })

        if (FindUser) {
            return res.status(400).json({
                "message": "user already signedUp "
            }
            )
        }

        /*
        you can write things like this as well 
        much more cleaner syntax
              await User.create({firstName,lastName,email,password})
        */
        await User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        })

        return res.status(201).json({
            "message": "user signed up"
        })

    } catch (error) {

        return res.status(500).json({
            "message": "something went wrong",
            error: error.message,
        })
    }

}

export default signupHandler