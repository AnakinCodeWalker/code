import express from "express"

const app = express()

app.get("/",(req,res)=>{
res.send("Docker layers")
})
console.log("PORT from env:", process.env.PORT);

app.listen(process.env.PORT)