
// always avoid using the String --> wrapper classes.

/*
const name = "ksbir" ; //type infernecing
const  myName : String = "king" // type annotation
*/

// type inferencing.
const name =["kunal","kabir"]
console.log(name);

// type annotation
const numbers : number[] =[1,2,3,4]
console.log(numbers);

// using Generics.

                 //parameter
const student : Array<string> =["Using","Generics"]
console.log(student);

// using union.

const details :(string|number)[] =["kunal",34];
console.log(details);

// readOnly.
const readOnlyArray : readonly number[]=[1,2,3]

// ReadOnly. + generics
const  readOnlyGenericArray : ReadonlyArray<string>=["readOnly Array"]

console.log(readOnlyGenericArray);