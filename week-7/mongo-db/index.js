import express from 'express'
import userRoutes from './routes/user.routes.js'
import cors from 'cors'
import dotenv from 'dotenv'
import db from './utils/db.js'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'



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

// u can introduce one more file here for todo related routes right now i  am keeping things as it is..
app.use("/api/v1/users",userRoutes)


//then starting the server
app.listen(PORT || 8080, () => {
    console.log(`listening on port ${PORT}`);
})
