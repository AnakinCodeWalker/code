import mongoose from "mongoose";

// first schema will be created then a model from it and then we will export it 

// you can add a object inside the main object of the schema this will this will provide timestamps true  createdAt updatedAt...

const UserSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
},
    {
        timestamps: true, // auto adds createdAt & updatedAt
    }
)


//this line will let me store data in this sepcific[User] model by this specific shcema

//kis collection mai data dalega  kis trh ka schema hoga iska 
const User = mongoose.model('User', UserSchema)

export default User