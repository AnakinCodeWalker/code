// this is an auhtenticated endpoint [an enpoint that needs authentication to be accessed]
import users from "../index.js"

const detailHandler = (req, res) => {



    
    const token = req.headers.token
    
    if(!token){
       return res.json({
      "message": "send the token"
    })
    }
    console.log(users)

    const User = users.find(u => u.token === token)

    if (User == undefined) {
        return res.json({
            "message": "send the token"
        })
    }

 

    return res.json({
        "name": User.name,
        "email": User.email
    })

}
export default detailHandler