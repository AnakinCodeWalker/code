// IMPLEMENTING INTERFACES AND  USING IT AS A TYPE

//JAVA HAS DIFFRENT RULES FOR IT
//   only  abstract methods no concrete but not in java 
// variables Can only be declared (no values)
// they are not part of js so they are Removed at compile-time
// constructors Not allowed
// access modifiers Not allowed inside interfaces
// they extends each other but implement classes 
// IN JAVA  “Here’s a constant shared by all” — you can’t assign a new value in the class.

//when you write  methods in interface you dont write the : like you do when you create a normal () or define a variable  you write directly the return type.


// interfaces mai variable likhe hue hai , methods likhe hue hai inki implementation mai likhunga 
// this provides u oop properties where the normal object lacks behind so i.e why we might wanna use  
interface employee {
    name: String,
    age: number,

    employeed: boolean,
    // salary ?:number,


    greet(num: number): void; //point to be noted here .. can have abstract method 
}

//  INTERFACE AS A TYPE
const person: employee = {
    name: "prince",
    age: 1,
    employeed: true,
    greet(num: number): void {
        console.log(`hi there`);
        // this will refer to the object variable via using the this keyword.
        console.log(`you are ${num} years old than me${this.name}`);
       
    }
}

interface Address {
    city: String,
    state: String
}

// an interface whose one key type is another type of interface
interface consumer {
    address: Address // one field whose type is of another interface.
}
console.log(person);
console.log(person.greet(2));


// when you implement some interface you have to define each and everything like u do in java

// jitna v features hai interface  ka sbko define krna parega class mai 


//IMPLEMENTS
class Manager implements employee {

    name: String;
    age: number;
    employeed: boolean;

    //plus its own properties implement krne kai bad apna properties add kr skte hai [but not in object]
    salary?: number;
    
    greet(age: number): void {
        console.log(`Age is ${age}`);
    }


    //you have to initalize the things you implemented like you do in java

    constructor(name: String, age: number, employeed: boolean) {
        this.name = name,
        this.age = age,
        this.employeed = employeed
    }
}
const rahul = new Manager("rahul", 27, true)

console.log(rahul.name + " " + rahul.age + " " + rahul.employeed + "" + rahul.greet(21));



// creating a function and and passing an interface into  it and then passing an object into it.
interface Greet{   //creating the interface
    name:"user"|"admin",
    permission:"access"|"not access"
}

function greetSomeOne(greet:Greet):void{  //passing an interface into the function 
    console.log(greet.name);
}

// creating an object from the itnerface
const u1:Greet={
    name:"user",
    permission:"not access"
}

// passing the object jiski type interface hai.
greetSomeOne(u1)


/*

// NOTE : adding extra property will work or not ? if an object is using a interface


// adding extra property will work agr koi class isko implement krega tb 
interface god{
    name :String
}
// this will not work kuki jis type ka interface hai usme yeh exists nhi krta hai 
const owner:god={
    name:"zeus",
    // age:"infinite" 
}
    */

/*
you could extend an interface but not type [can be done indirectly.]
*/

type window ={
     title : string
} &{
    ts: "kabir"; 
}

const name :window = {
    title : "monk who drink",
    ts  : "kabir"
}

console.log("extending a type : " + name.title);

interface smallWindow{
    title:string
}

//  u could modify or add property to the interface after creating it.
// its not possible in type
interface smallWindow{
    size ?: "xl"|"m"|"l"
} 
interface bigWindow extends smallWindow{
    ts : "kabir"
}
const windowObj: bigWindow = {
  title: "My App",
  ts: "kabir",
};
console.log("exntending an interface"+ windowObj.ts+""+windowObj.title);



