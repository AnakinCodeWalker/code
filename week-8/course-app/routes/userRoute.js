
import {Router} from 'express'
import signUpHandler from '../controllers/user.controller/signup.controller.js'
import loginHandler from '../controllers/user.controller/login.controller.js'

const router =Router()

router. post('/signup',signUpHandler)
router.post('/signin',loginHandler)

//to see all [users] my purchased courses 
// router.post('/purchases',purchasesHandler)

export default router