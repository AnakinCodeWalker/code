import {user}from '../index.js'
import crypto from 'crypto'
//  REMAINING THING IS pushing the token to the correct user.. 


/*
Algo :
 take input the name and email [credential]
 check if they provided the  neccessary credentails
 check if user from the given credential exists or not
 if exists then  create a token  and sotre it into the users[] on which user it belogns to
 send the token to the user who the token belongs to 
  and  resposne with user signed in or whatever
 else response  user not exists or whatever
*/



/*
ABOUT THE FIND()..

.find() returns undefined if not found
used on arrays to locate the first element that satisfies a given condition
Returns the first element (object, value, etc.) 
that makes the callback function return true

Returns undefined if no matching element is found

SYNTAX : array.find(callbackFn)

*/


const signInHandler=(req,res)=>{

    const {name,email} = req.body
console.log(`name is ${name} mail is ${email}`)

    if(!name || !email){
     return res.json({
        "message":"All fields are required"
    })
}

// check if the user with provided credentail exists or not
 
//checking if the user already exists or not

//  u.name --> is the value inside the object
//  u.name === name --> the second name is req.body name 

const userExists = user.find(u => 
    u.name === name && u.email === email
)

if(userExists===undefined)
 return res.status(404).json({
 message: "User does not exist"
 })

//  1.created the token
 //by using the crypto module here i am creating the token

 const token = crypto.randomBytes(32).toString('hex')
  
//  2.pushing the token to user object to whom it belongs to

//we have to push the token to the specific user 
//for that first we have to find the user to whom this  should belong

userExists.token = token

//just consoling log for verification purpose wheather token pushed/not

console.log(user)

// as the user signin i am sending the token 
res.status(200).json({
        "message":"user signed in",
        "name":`${req.body.name}`,
        "token":`${token}`
    })
}
export default signInHandler