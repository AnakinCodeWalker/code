import { Router } from "express";
import  login ,{upload}from "../controllers/upload.controller.js"
import { storage } from "../controllers/notes.js";
import multer from "multer";

const uploader  = multer({storage})

const userRouter = Router()

userRouter.route("/upload").post(uploader.single('avatar') ,upload)
userRouter.route("/login").post(login)
export default userRouter