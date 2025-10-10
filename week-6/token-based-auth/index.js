import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import userRoutes from './routes/auth.route.js'

import jwt from 'jsonwebtoken'

dotenv.config()




const app = express()

//for jwt 
const SECRET_KEY = process.env.SECRET_KEY

const PORT = process.env.PORT

app.use(express.json())

app.use(express.urlencoded({
    extended: true
}))

app.use(cors({
    origin: process.env.BASE_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['content-Type', 'Authorization'],
    credentials: true
}))

const user = []

app.use('/api/v1/users',userRoutes)

app.get('/', (req, res) => {
    console.log(user)
    res.json({
        "/signup": "for sign up",
        "/signin": "for sign in",
        "/detail": "for user details"
    })
})

app.listen(PORT || 8080, () => {
    console.log(`server listening on ${PORT}`);
})

export { user }