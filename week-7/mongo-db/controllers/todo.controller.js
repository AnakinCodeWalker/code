//POST
// authenticated endpoint[means u can only access them after u are signed in/authenticated]

//this will let you create a todo
import Todo from '../models/todos.model.js'
import User from '../models/Users.model.js'


const todoHandler =async (req, res) => {

    const { title, done, userId } = req.body

    if (!title || !userId) {
        return res.json({
            "message": "all fields are required"
        })
    }

    //Note: this method find the user by idfindById expects a single value — the _id of the document (a string or ObjectId).
    const findUser=await User.findById(userId)

    if(findUser===null){
        return res.json({
            "message":"userId is incorrect"
        })
    }

    const todoGenrated= await Todo.create({
        title:title,
       done: done ?? false,
        userId:userId
    })

  console.log(title, done, userId)

    if(todoGenrated){
        return res.status(200).json({
            "message":"todo generated successfully"
        })
    }else{
        return res.status(403).json({
"message":"something's wrong"
        })
    }

}
export default todoHandler