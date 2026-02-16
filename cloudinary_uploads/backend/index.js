import express, { urlencoded } from "express"
import cors from "cors"
import userRouter from "./public/src/routes/user.routes.js"
const app = express()
import db from "./public/src/config/db.js"
app.use(express.static("public"))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended:true,
}))

app.use("/api/v1/users",userRouter)


db().then(()=>{
app.listen(3000,()=>{
    console.log(`server started listening on port : 3000`);
})
}).catch(()=>{
console.log(`error connecting mongodb`);
})

