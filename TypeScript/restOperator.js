const arr = ["kabir"]

const array  = ["kunal",...arr]

console.log(`${arr}
     Another array:  ${array}`);

const obj1 ={
     name : "kutta"
}

const obj2 = {
     ...obj1,
     title : "kumar"
}

console.log(obj1);
console.log("using rest operator ");

console.log(obj2);