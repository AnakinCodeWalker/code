import express from "express"

const app = express()

app.get("/",(req,res)=>{
res.send("Docker layers")
})
app.listen(3000)