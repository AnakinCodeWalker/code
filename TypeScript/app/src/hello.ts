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

//  Anonymous Functions

// When a function appears in a place where TypeScript can determine how it’s going to be called, the parameters of that function are automatically given types. This process is called contextual typing because the context that the function occurred within informs what type it should have.



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

/*
Type Assertions : you tell the ts compiler trust me 

 -> Use type assertion only when TS can’t know
 -> Like a type annotation, type assertions are removed by the compiler and won’t affect the runtime behavior of your code.
 */
// const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;  //you know ki canvasElement hoga so u changed it
// ts ko pta hai koi element hoga but not specifically


/*
 u could use 2 assertions as well.

 const animal = expr as any as T;
*/


// u could provide a literal as a return type for a function as well.
function num():1|2{
    return 1;
}

// remove null  and undefined without performing type narrowing
/*

The non-null assertion operator tells TypeScript to ignore null and undefined checks, but it does not add any runtime safety

*/
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed()); // this could possible give runtime error
}


//  creating a function that will take another function as an input.

// u pass a fucntion into a function like this.
function greet(fn:(name:string)=>string){
const firstname = fn("kabir")
    console.log(`hi ${firstname}`);   
}
function fn(name:string):string{
return `${name}`
}
console.log(greet(fn));

/*
when strictNullChecks: true ,

null and undefined are NOT allowed unless explicitly mentioned

*/

// now u could use this also..
type greetMe = (a:number)=>void


// unknown vs any 
//  any -> koi v data type dedo chlega 
//  unknown mai v dedo chlega pr use krne se phele bata do data type.



//      TYPE NARROWING : 
// EXHAUSTIVE CHECK : exahustive check -> An exhaustive check means covering all possible types / cases so that nothing is left unhandled


// TYPE GAURD : using isntance of -->  for classes , type of , in--> for objects ,  yeh sbhi use krna hi type gaurd hai


//  is keyword type narrowing 

//  IS keyword : is used to create a custom type guard.
//  syntax   : param is Type  
// if function return true , then param should be treated as true.

type user = { name: string };
type Admin = { name: string; role: string };

function isAdmin(person: user | Admin): person is Admin {
  return "role" in person;
}

console.log(isAdmin);

// switch case narrowing

type Status = "loading" | "success" | "error";

function handleStatus(status: Status) {
  switch (status) {
    case "loading":
      return "Loading...";
    case "success":
      return "Data loaded";
    case "error":
      return "Something went wrong";
  }
}

type name  = "pream"|"prince"  // -> they are literal types.


// type assertion jaha tum batate ho data type.
// num as string


// function mai optional params and default params ko end mai likha jata hai



// ENUM :
//  ENUM VALUES ARE ON THE CAPS , 

enum cupSize {
    SMALL,
    LARGE,
    MEDIUM
}
const size =cupSize.LARGE

// IF U PROVIDE VALUE TO A VARIABLE THEN OTHER WILL BE INCREMENTED.
enum status{
    PENDING =100,
    SERVED ,
    CANCELLED
}

// ENUMS CAN BE CONSTANT 
// STANDARD PRACTICE : MAKE THEM HOMOGENEOUS ELEMENT NOT HETROGENEOUS.


// make PRIVATE VARIABLE   with _



//  TUPLE REMAINING : IN THE END THEY ARE ARRAY.

// composition in classes.. 
// index signatures
//  readonly , pick , omit , partial 