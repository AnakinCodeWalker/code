import mongoose from "mongoose";

// For a done field, it’s better to use Boolean, not string enum.
// enum:["true","false"]

const TodoSchema = new mongoose.Schema({
    done: {
        type: Boolean,
        default: false,

    },
    title: {
        type: String,
        required: true
    },
    // important thing here is...
    userId: {
        // This tells Mongoose that this field will store an ObjectId, which is the unique ID of another document in MongoDB.
        type: mongoose.Schema.Types.ObjectId,
        //   This tells Mongoose that the ObjectId stored here is a reference to a User document. In other words, this todo belongs to a specific user.
        ref: "User",
        required: true
    },
}, {
    timestamps: true
})


//this line will let me store data in this sepcific[Todo] model by this specific [TodoSchema] shcema.

const Todo = mongoose.model("Todo", TodoSchema)

export default Todo

/*
// This tells Mongoose that this field will store an ObjectId, which is the unique ID of another document in MongoDB.
        
// yeh object id kai liye 
type: mongoose.Schema.Types.ObjectId,
   

//This tells Mongoose that the ObjectId stored here is a reference to a User document. In other words, this todo belongs to a specific user.

//yeh kiska object id store krega uske liye
ref: "User",
*/