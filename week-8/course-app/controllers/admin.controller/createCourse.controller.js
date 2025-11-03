import authAdminMiddleware from "../../middleware/auth.Admin.Middleware"
import Course from "../../models/course.model"

app.use(authAdminMiddleware)
const createCourseHandler =async (req,res)=>{

    //this will have the admin id userId is paassed from the middleware in middleware it was passed from the 
    const adminId=req.userId 
const {title,description, imageurl, price}=req.body    

if(!title||!description|| !imageurl|| !price){
    return res.status(403).json({
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
    courseId : course._id
})
}
catch(err){
return res.status(403).json({
    "message":"course not created",
    err:err.message
})
}
}

export default createCourseHandler