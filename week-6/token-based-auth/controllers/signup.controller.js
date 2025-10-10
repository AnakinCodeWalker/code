import {user}from '../index.js'

/*
Algo :

take the name and email 
print it [for myself to see what user entered]
check if any input is missing 
check if user from provided credential already exists 
if not then push the details into array and 
return a message user signed up or whatever ...
*/


const signUpHandler =(req,res)=>{

    const {name,email}=req.body
   console.log(`name : ${name} email : ${email}`)

if(!name || !email){
    return res.json({
        "message":"all fields are required"
    })
}
  
//checking if the user already exists or not 
const userExists = user.find(u => 
    //will return true or false [boolean results]
    //apprantely u can go with find() as well
    u.name === name || u.email === email
)
//eventaully this will get evaluated and procced further..
  if (userExists) {
    return res.status(400).json({
         "message": "user already exists" 
        });
  }

  //this is an object  literal
  user.push({
    name:name,  //name (the one after the colon) is the variable holding the value.
    email:email //same goes for the mail as well
  })

  /*
  or you can do 
  user.push({name,email}) //internally this does the same thing
  */

    res.status(200).json({
        "message":"signup successful"
    })
}
export default signUpHandler