
import Admin from "../../models/admin.model"

const signUpHandler = async (req, res) => {

    const { firstName, lastName, email, password } = req.body

    if (!firstName || !lastName || !email || !password) {
        res.status(403).json({
            "message": "All fields are required"
        })
    }
    try {
        const FindUser = await Admin.findOne({
            firstName,
            lastName,
            email
        })

        if (FindUser) {
            return res.status(403).json({
                "message": "Admin already signedUp"
            })
        }

    } catch {
        try {
            const newAdmin = await Admin.create({
                firstName,
                lastName,
                email,
                password
            })

            return res.status(200).json({
                "message": "Admin signed up",
                newAdmin: newAdmin
            })
        } catch (err) {
            return res.status(403).json({
                "message": "signup failed!",
                error: err.message
            })
        }

    }
}
export default signUpHandler