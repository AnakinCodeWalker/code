// one more alternative way i can do is take the id and create the jwt and then take the token for authentication

// i will do that in the todos routeHandler

//POST
// authenticated endpoint[means u can only access them after u are signed in/authenticated]

//this will let you create a todo
import Todo from '../models/todos.model.js'
import User from '../models/Users.model.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const todoHandler = async (req, res) => {

    const SECRET_KEY = process.env.SECRET_KEY

    /* const { title, done,userId}= req.body
    
    this is wrong because userId user kasie pass krega yeh to db mai rhega or uska access to user kai pass nhi rhega na  
    id ko hm extract kr skte hai jwt token se or db mai daal skte hai info   
    */

    const { title, done}= req.body

    const token = req.headers.token

    const decodedInfo = jwt.verify(token, SECRET_KEY)
    const {id, email} = decodedInfo

    //even though schema mai userId is required we are going to get the id from the  jwt token
    if (!title) {
        return res.json({
            "message": "all fields are required"
        })
    }

    //Note: this method find the user by id findById expects a single value — the _id of the document (a string or ObjectId).
    
    //even though it is not required kuki extracted token jo jwt se aayega woh most cases mai shi hi hoga but i am adding in case i am missing an edge case in here 

    //extracted from the jwt 
    const findUser = await User.findById(id)

    if (findUser === null) {
        return res.json({
            "message": "userId is incorrect"
        })
    }

    const todoGenrated = await Todo.create({
        title: title,
       
        // done: done ?? false,
        //  // no need to do this kuki hm false ko already default value set krdiye so this is kind of redundant 
       
        // simply do this 
        done :done , //put the done user is providing
        userId: id //put the id extracted from the jwt
    })

    console.log(title, done, id)

    if (todoGenrated) {
        return res.status(200).json({
            "message": "todo generated successfully",
            "mail":email
        })
    } else {
        return res.status(403).json({
            "message": "something's wrong"
        })
    }

}
export default todoHandler