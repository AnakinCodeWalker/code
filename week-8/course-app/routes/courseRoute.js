import {Router} from 'express'
const course =Router()


//to purchase a course
course.post('/purchase',purchaseHandler)

//to get the list of all the purchased courses
course.get('/preview',coursesHandler)

export default course