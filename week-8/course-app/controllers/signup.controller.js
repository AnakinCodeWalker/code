
const signupHandler = async (req, res) => {

    const { name, email, password } = req.body
    console.log(`Name is ${name}`)
    console.log(`Email is ${email}`)
    console.log(`Password is ${password}`)

    if(!name||!email||!password){
        res.status().json({
            "message":"All fields are Required"
        })
    }
    //provide the name of the model here in which i findOne method have to search in
    const FindUser = await      .findOne({
        email:email,
        password:password
    })

    if(FindUser){
return res.send().json({
    "message":"user already signedUp "

}
)
    }

    //schema name creating the user in db 
   await     .create({
    name:name,
    email:email,
    password:password
})

//again checking the user if created or not
    const createdUser = await   .findOne({
        email:email,
        password:password
    })


    if(createdUser){
return res.status().json({
    "message":"user signed up"
})
    }
    return res.status().json({
        "message":"something went wrong"
    })

}

export default signupHandler