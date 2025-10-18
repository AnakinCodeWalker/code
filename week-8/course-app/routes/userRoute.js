
import {Router} from 'express'
import signUpHandler from '../controllers/signup.controller.js'
import loginHandler from '../controllers/login.controller.js'

const router =Router()

router. post('/signup',signUpHandler)
router.post('/login',loginHandler)

//to see all [users] my purchased courses 
router.post('/purchases',purchasesHandler)

export default router