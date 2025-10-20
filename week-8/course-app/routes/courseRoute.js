import {Router} from 'express'
const course =Router()

import purchaseCourseHandler from '../controllers/user.controller/purchases.controller'
import previewCourseHandler from '../controllers/course.controller/preview.controller'
//to purchase a course
course.post('/purchase',purchaseCourseHandler)

//to get the list of all the purchased courses
course.get('/preview',previewCourseHandler)

export default course