import mongoose from "mongoose";
import { boolean } from "zod";

const CourseSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: number,
        required: true
    },
    purchase: {
        type: boolean,
        default: false

    }

})

const Course = mongoose.model("Course", CourseSchema)
export default Course