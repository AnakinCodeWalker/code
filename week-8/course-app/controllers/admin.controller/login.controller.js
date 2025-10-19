import jwt from 'jsonwebtoken'
import Admin from '../../models/admin.model'

import dotenv from 'dotenv'
dotenv.config()


const ADMIN_SECRET_KEY = process.env.ADMIN_SECRET_KEY

const loginHandler = async (req, res) => {

    const { firstName, lastName, email, password } = req.body
    if (!firstName || !lastName || !email || !password) {
        res.status(403).json({
            "message": "All fields are required"
        })
    }

    try {

        const findAdmin = await Admin.findOne({
            firstName,
            lastName,
            email
        })
        if (!findAdmin) {
            return res.status(403).json({
                "message": "signup first"
            })
        }

        const payload = {
            id: findAdmin.id
        }
        const token = jwt.sign(payload, ADMIN_SECRET_KEY)
        return res.json({
            "message": "admin logged in",
            token: token
        })

    } catch (err) {

        return res.json({
            "message": "something went wrong",
            err: err.message
        })
    }
}
export default loginHandler