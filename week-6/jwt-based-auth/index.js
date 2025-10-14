//  creating an authentication system using the jwt


import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import db from './utils/db.js'
import userroutes from './routes/user.route.js'
dotenv.config()

const PORT = process.env.PORT

const app = express()

app.use(express.json())

app.use(cors({
    origin: process.env.BASE_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['content-Type', 'Authorization'],
    credentials: true
}))

app.use(express.urlencoded({
    extended: true
}))

//working as temporary inplace of db
const users = []

app.get('/', (req, res) => {
    res.json({
        message: "different routes",
        "/signup":"sign up",
        "/signin":"sing in",
        "/me":"user detail"
    })
})

db()

//control will go to userroutes and from there to a specific route handler
app.use('/api/v1/users', userroutes)

app.listen(PORT || 8080, () => {
    console.log(`server started on Port ${PORT}`)
})
console.log(users);
export default users