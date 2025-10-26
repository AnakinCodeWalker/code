import authAdminMiddleware from "../../middleware/auth.Admin.Middleware"
import Course from "../../models/course.model"

app.use(authAdminMiddleware)
const createCourseHandler =async (req,res)=>{

    const adminId=req.userId 
const {title,description, imageurl, price}=req.body    

if(title||description|| imageurl||price){
    return res.json({
        "message":"All details are required"
    })
}
try{
const course = await Course.create({
    title,
    description,
     imageurl, 
     price,
creatorId:adminId
})

return res.status(200).json({
    "meesage":"course created successfully",
    courseId : course.id
})
}
catch(err){
return res.status(403).json({
    "message":"can not create the course",
    err:err.message
})
}
}

export default createCourseHandler