import User from "../models/User.model";

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

        const newUser = await User.create({ name, email, password })

        if (!newUser) {
            return res.json({
                "Message": "something went wrong",
                err: err.message
            })
        }
        return res.json({
            "message": "user signed up",
            newUser
        })
    }


}
export default signupHandler