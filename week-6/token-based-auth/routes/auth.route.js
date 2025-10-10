import { Router } from "express"

import signUpHandler from '../controllers/signup.controller.js'
import signInHandler from "../controllers/signin.controller.js"
import detailsHandler from "../controllers/details.controller.js"

const router =Router()

router.post('/signup',signUpHandler)
router.post('/signin',signInHandler)
router.get('/detail',detailsHandler)

 export default router