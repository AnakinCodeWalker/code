import {user}from '../index.js'
// this is an AUTHENTICATED END POINT will only return you info if you have signed in 

// /* we can send it via post request here i am using get[fine]
// NOTE : THE TOKEN NEED TO BE PROVIDED IN THE HEADERS SECTION TOKEN : GENERATED TOKEN

// req.headers.token

// check for the provided token 
// if the user exists with this token
// then send the username and email of user who the token belongs to

// */



// // Remaining thing is : first find the user who the token belong to and in response send its name and mail

const detailsHandler =(req,res)=>{

    const token =req.headers.authorization

    //finding whose the token belong to 
 const userdetail=user.find(u=>u.token===token)


// const name=userdetail.name
// const email=userdetail.email

//storing to return the specific user name and email 
const {name ,email}=userdetail

    console.log(user);
res.status(200).json({
    "message" : `${name} ${email}`
    
})
 }

export default detailsHandler