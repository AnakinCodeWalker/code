console.log("hello")

// normal variables
let a : number = 5
console.log(a);

//functions
// u have to specify the return type as well for the methods  
function sum (num:number):number{
    return num
}
let c :number=0

console.log(sum(c))


//interfaces


interface User  {
// u  could make it a generic or u could define ki name ki values either be this or this.
name ?: "harkirat"|"kabir das", //u could make any field optional in the interface as well
age : number,
address ? : { //if u make this optional either skip it totally or define it fully
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

interface Detail  {
 
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
const form : Detail ={
    age:2,
    color:"red"
}

// as it is optional and you did not provided any value  this will be undefined..
console.log(form.name);




// u could make another interface and use it directly
// one field in the interface , can be of another type.
interface Address{ //to make things optional when u use it u have to make everything optional here
    city?:String,
    code?:number,
    state?:String
}

interface UserDetail {
    // u could make the propert/field of any  custom type.
fullName:String
address?:Address  //this field can be of interface type.
// here u make it optional again then this field will be totally optional
}

const userDetail:UserDetail={
fullName:"kallu"
}
console.log(userDetail);