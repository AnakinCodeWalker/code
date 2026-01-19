const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    console.log("hi Docker ")
    res.send({"hi Docker ":"i am pream"})
})
app.listen(3000)