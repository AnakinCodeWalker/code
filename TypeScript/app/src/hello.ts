console.log("hello")

// normal variables
let a : number = 5
console.log(a);

//functions
function sum (num:number):number{
    return num
}
let c :number=0

console.log(sum(c))


//interfaces

interface User  {
name : String,
age : number,
address : {
city : String,
state :String
},
color: number|string
}

let userDetails :User ={
name:"kabir das",
age :39,
address: {
city : "jahanabad",
state: "tripura"
},
color:103,

}
console.log(userDetails);

//  you can make the parameter optional as well by putting a ? in front of it 

interface detail  {
 
    // If you make a property optional in TypeScript and then don’t provide a value for it,
// when you access it, it will automatically be undefined at runtime (in plain JavaScript behavior).

// make it optional if it is required then dont make it undefined 
name  ? : String,
age : number,

//this make the address as optional but if you are filling the address u have to fill city and state as well cause they are not optional.

address ? : {
city : String,
state :String
},
color: number|String
}

// this will 
const form : detail ={
    age:2,
    color:"red"
}

// as it is optional and you did not provided any value  this will be undefined..
console.log(form.name);


