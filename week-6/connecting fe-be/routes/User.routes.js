import { Router } from "express";
const router =Router()
import signupHandler from "../controllers/signup.controller";
import signinHandler from "../controllers/signin.controller";
import meHandler from "../controllers/me.controller";
router.post('/signup',signupHandler)
router.post('/signin',signinHandler)
router.post('/me',meHandler)