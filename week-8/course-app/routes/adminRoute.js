import {Router} from 'express'
const admin =Router()

import signUpHandler from '../controllers/admin.controller/signup.controller'
import loginHandler from '../controllers/admin.controller/login.controller'
import createCourseHandler from '../controllers/admin.controller/createCourse.controller'
import updateCourseHandler from '../controllers/admin.controller/updateCourse.controller'
import getAllCourseHandler from '../controllers/admin.controller/getAllCourse.controller'

admin. post('/signup',signUpHandler)
admin.post('/login',loginHandler)


// Authenticated End Points


//To create a course
admin.post('/course',createCourseHandler)


//To update a course
admin.put('/course',updateCourseHandler)

//To get all the course created by the admin
admin.get('/course/bulk',getAllCourseHandler)

export default admin
