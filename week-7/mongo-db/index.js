import express from 'express'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import userRoutes from './routes/user.routes.js'
import cors from 'cors'
import dotenv from 'dotenv'
import db from './utils/db.js'

dotenv.config()

//FOR THE JWT 
const SECRET_KEY = process.env.SECRET_KEY


const PORT = process.env.PORT
const app = express()


app.use(express.json())

app.use(express.urlencoded({
    extended: true
}));

app.use(cors(
    {
        credentials: true,
        origin: process.env.CORS_ORIGIN,
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    }
))

//connecting to the db
db()

app.use("/api/v1/users",userRoutes)

//then starting the server
app.listen(PORT || 8080, () => {
    console.log(`listening on port ${PORT}`);
})
