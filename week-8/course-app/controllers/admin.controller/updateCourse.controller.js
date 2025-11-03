import authAdminMiddleware from "../../middleware/auth.Admin.Middleware"
import Course from "../../models/course.model"

app.use(authAdminMiddleware)
const updateCourseHandler =async (req,res)=>{
 
    const adminId=req.userId 
const {title,description, imageurl, price,courseId}=req.body    

if(!title||!description|| !imageurl|| !price){
    return res.status(403).json({
        "message":"All details are required"
    })
}

/* 
There is an issue  here that if another creator want he can change the course by providing the  courseId so, we'll put a check on here ki
only that creator can be able to change the course jiski pass yeh courseId ho */
const course =await Course.updateOne({
    _id : courseId,
creatorId:adminId
},{
title,
description, 
imageurl,
 price,
})

res.json({
    "message":"course updated successfully",
    courseId:course._id

})
}
export default updateCourseHandler