import users from "../index.js"
const signUpHandler = async (req, res) => {

    const { name, email } = req.body
    console.log(`${name} ${email}`)

    if (!name || !email)
        return res.json({
            "message": "Somethings fishy over here !"
        })

    const signedUp = users.find(u => u.name == name && u.email == email)


    if (signedUp !== undefined)
        return res.json({
            "messsage": "user already signed up"
        })

    if (signedUp === undefined) {
        // if not signed up until then push the provided name and email to the db

        users.push({
            name,
            email
        })
        return res.json({
            "message": "user signed up"
        })
    }





}

export default signUpHandler
