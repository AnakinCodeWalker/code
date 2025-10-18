import mongoose from "mongoose";
 
const CourseSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        unique: true
    },
     description: {
        type: String,
        required: true,
       
    },
    price: {
        type: number,
        required: true
    },
    imageurl:{
        type:string
    },
    creatorId:{
//put the object id of the admin here
type:objectId   
}

},{
    timestamps:true //adds createdAt / updatedAt
})

const Course = mongoose.model("Course", CourseSchema)
export default Course