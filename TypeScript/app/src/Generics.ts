// this is how you can define an object.
const myObject : Record<string , number>={
"1":2,
}

// function with generic
 
function generic1<T>(num:T){
console.log(num);
}
generic1<number>(2); // even if you dont write <number> just by looking at parameters , it will figure out the types.



//  function with mulitple generic
function generic<T,U>(x:T,y:U){
console.log(typeof x +""+ typeof y);
}
generic("1",2)


// Arrow function

const arrow1 =<T>(num:T)=>{
console.log(`arrow 1 ${num}`);
}
arrow1(1)


// Arrow function2

const arrow2 =<T,U>(num1:T,num2:U):void=>{
 
    console.log(`${num1}${num2}`);
}
arrow2("1",2)
// interface

// function num <T>(num1:T):T{return num1}
// const num =<T> (number1:T):T=> number1

//  Generic Inteface 
interface genericInterfce <T>{
name : T 
}
const usingInterface:genericInterfce<string>={
    name :"2"
}


//  type  using Generic

type genericType <T>= {
number1 : T
}
const usingGenericType :genericType<string>={
number1 : "kai"
}

//  Generic classs

// either make it optional or make condtructor for it.
class Student<T>{
public number ? : T
}
const studentObj = new Student<number>()
studentObj.number=5


//   Generic array

type genericArr <T> = T[]

const arr : genericArr<number> = [1,2,3]


// interface with function

interface user{
    (num:string):void
}

const greet: user = (value) => {
  console.log("Hello " + value);
};

//  (name: Type): ReturnType

interface userAction{
     greet : ()=> void
}

const user:userAction = {
    greet :()=>{
}
}

// GENERICS COULD EXTEND..

// ts does not now string has .length property
// you can make an interface with .length and extend the generic
interface numLength{
    length:number
}
function fullName<T extends numLength>(num:T):T{
console.log(num.length);
return num 
}
console.log(fullName("2"));


 
