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

interface employee {
    name: String,
    age: number,

    employeed: boolean,
    // salary ?:number,

    // greet: ()=> void, //point to be noted here .. can have abstract method 
}

//  INTERFACE AS A TYPE
const student: employee = {
    name: "prince",
    age: 1,
    employeed: true
}

interface Address{
    city : String,
    state : String
}

// an interface whose one key type is another type of interface
interface  consumer {
    address : Address
}
console.log(student);


// when you implement some interface you have to define each and everything like u do in java

// jitna v features hai interface  ka sbko define krna parega class mai 


//IMPLEMENTS
class Manager implements employee {

    name: String;
    age: number;
    employeed: boolean;

    salary?: number;
    //plus its own properties implement krne kai bad apna properties add kr skte hai [but not in object]

    //you have to initalize the things you implemented like you do in java

    constructor(name: String, age: number, employeed: boolean) {
        this.name = name,
            this.age = age,
            this.employeed = employeed
    }
}
const rahul = new Manager("rahul", 27, true)

console.log(rahul.name + " " + rahul.age + " " + rahul.employeed);





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