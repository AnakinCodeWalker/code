import express from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import cors from 'cors'
import db from './utils/db.js'
import userRoutes from './routes/userRoutes.js'
dotenv.config()

const app =express()

const PORT =process.env.PORT
const ORIGIN =process.env.ORIGIN


app.use(cors({
    origin:ORIGIN,
    allowedHeaders:['Content-Type','Authorization'],
methods:['GET','POST','PUT','DELETE','OPTIONS'],
credentials:true
}))


app.use(express.json())

app.use(express.urlencoded({
    extended:true
}))


app.use('/api/v1/users',userRoutes)
app.get('/',(req,res)=>{
res.json({
    "message":"everything is fine"
})
})

db()
app.listen(PORT||8080,()=>{
    console.log(`app is listening on port ${PORT}`)
})


