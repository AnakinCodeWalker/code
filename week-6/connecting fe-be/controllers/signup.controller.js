import User from "../models/User.model";
import bcrypt from 'bcrypt'
const signupHandler = async (req, res) => {

    const { name, password, email } = req.body

    if (!name || !password || !email) {
        return res.json({
            "Message": "All fields are required"
        })
    }
    try {
        
        const findUser = await User.findOne({
            name,
            password,
            email
        })

        if (findUser === undefined) {
            return res.json({
                "message": "User already signedup"
            })
        }
    } catch (err) {
const hashedPassword = await bcrypt.hash(password,10)
        const newUser = await User.create({ name, email, password : hashedPassword })

        if (!newUser) {
            return res.json({
                "Message": "something went wrong",
                err: err.message
            })
        }
        console.log(newUser);
        return res.json({
            "message": "user signed up",
            newUser
        })
    }


}
export default signupHandler