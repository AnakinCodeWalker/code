import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    }

    //you can set up the role as well but  i am creating another model for that here 
    // role: {
     
    //     enum: ['user', 'admin'],
    //     default: 'user'
    // }

}, {
    timestamps: true //adds createdAt / updatedAt
})

const User = mongoose.model('User', UserSchema)

export default User

