// this is an auhtenticated endpoint [an enpoint that needs authentication to be accessed]
import users from "../index.js"

const detailHandler = (req, res) => {



    const { name, email } = users
    const token = req.headers.token
    console.log(users)

    const User = users.find(u => u.token === token)

    if (User == undefined) {
        return res.json({
            "message": "send the token"
        })
    }

 

    return res.json({
        "name": name,
        "email": email
    })

}
export default detailHandler