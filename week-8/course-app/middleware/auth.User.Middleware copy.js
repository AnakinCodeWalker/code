import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const USER_SECRET_KEY = process.env.USER_SECRET_KEY
const token = req.headers.token
const decoded = jwt.verify(token, USER_SECRET_KEY)

const authUserMiddleware = (req, res, next) => {

    if (token) {
        req.userId = decoded.id
        next()
    }
    return res.status(403).json({
        "message": "you are not signed in"
    })
}

export default authUserMiddleware
