
const loginHandler =async (req,res)=>{
const {name,email,password} =req.body

if(!name||!email||!password){
    return res.status().json({
        "message":"all fields are required"
    })
}

}

export default loginHandler