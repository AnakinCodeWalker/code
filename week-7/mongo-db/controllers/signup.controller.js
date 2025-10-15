import User from "../models/Users.model.js";


// // POST
// //vulnerability here  is plain text password which i have to sort of encrypt for security 
// // [will be using salts or other algo for security in future]



const signupHandler = async (req, res) => {

    const { name, password, email } = req.body

    if (!name || !email || !password) {
        return res.json({
            "message": "All fields are required"
        })
    }

    console.log(`${name},${password},${email}`)

    const existingUser = await User.findOne({
        name: name,
        email: email,
        password: password
    })

    if (existingUser) {
        return res.json({
            "message": "User already signedUp"
        })
    }
    //working with db is an async task so it is good to await the task related to db.

    await User.create({
        name: name,
        email: email,
        password: password
    })

    console.log("you signed up")

    return res.json({
        "message": "user signed up"
    })
}


export default signupHandler