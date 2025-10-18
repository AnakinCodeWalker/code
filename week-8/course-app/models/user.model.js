import mongoose from "mongoose";

const UserModel = new mongoose.Schema({

    name: {
        type: String,
        default: null,
        required: true
    },
    email: {
        type: String,
        default: null,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }

},{
    timestamps:true //adds createdAt / updatedAt
})

const User = mongoose.model('User', UserModel)

export default User

