import {user}from '../index.js'

// /*
// NOTE : THE TOKEN NEED TO BE PROVIDED IN THE HEADERS SECTION TOKEN : GENERATED TOKEN

// req.headers.token

// check for the provided token 
// if the user exists with this token
// then send the username and email of user who the token belongs to

// */



// // Remaining thing is : first find the user who the token belong to and in response send its name and mail

const detailsHandler =(req,res)=>{

    const token =req.headers.authorization
 const userdetail=user.find(u=>u.token===token)

const name=userdetail.name

    console.log(user);
res.json({
    "message" : `${name}`
    
})
 }

export default detailsHandler