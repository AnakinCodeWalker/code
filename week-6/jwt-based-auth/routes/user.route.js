import { Router } from "express";
/*   or 
import Router from "express.Router"
*/

import signUpHandler from "../controllers/signup.controller.js"
import signInHandler from "../controllers/singin.controller.js"
import detailHandler from '../controllers/me.controller.js'
//created the instance..
const router = Router()

//controll will flow from here  to the specific routehandler{controller}

router.post('/signup', signUpHandler)
router.post('/signin', signInHandler)
router.get('/me', detailHandler)

export default router