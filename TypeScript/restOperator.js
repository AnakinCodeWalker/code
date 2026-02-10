const arr = ["kabir"]

const array  = ["kunal",...arr]

console.log(`${arr}
     Another array:  ${array}`);

const obj1 ={
     name : "kutta"

}

const obj2 = {
     ...obj1,  //copying everything from the object 1 to object 2 
 caste : "kumar",              // adding its own properties
}
console.log(obj1);
console.log("using rest operator ");

console.log(obj2);

console.log(" ");
// overriding the properties and using rest operator

const oldObject ={
     name : "kutta",
title :"kumar kabir"
}

const newObject={
     ...oldObject,  //what this will do is copy everything from object 1  to object 2
title : "santa" // and the property of object 1 will be overriden .. here
}

console.log(oldObject);

console.log("using the rest operator");
console.log(newObject);