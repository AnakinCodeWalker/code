import {Router} from 'express'
const admin =Router()

admin. post('/signup',signUpHandler)
admin.post('/login',loginHandler)

//to create a course
admin.post('/course',createCourseHandler)


//to update a course
admin.put('/course',updateCourseHandler)

//to get all the course
admin.get('/course/bulk',courseHandler)

export default admin
