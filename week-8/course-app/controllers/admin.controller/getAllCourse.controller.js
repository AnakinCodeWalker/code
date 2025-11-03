import authAdminMiddleware from "../../middleware/auth.Admin.Middleware"
import Course from "../../models/course.model"

app.use(authAdminMiddleware)
const getAllCourseHandler =async (req,res)=>{
const adminId =req.userId
try{
const courses =await Course.findOne({
    creatorId:adminId
})
return res.json({
    "message":"your courses",
    courses
})
}catch{
return res.status(500).json({
    "message":"something went wrong"
})
}


}
export default getAllCourseHandler