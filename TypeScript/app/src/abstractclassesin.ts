// ABSTRACT CLASSES

// ISME CONSTRUCTOR HOTE HAI OR CONCRETE METHOD HOTE HAI INTERFACE MAI NHI HOTE HAI
// YEH EXTEND HOTE HAI INTERFACE CAN BE USED AS TYPE OR CAN BE IMPLEMENTED 
//properties same as abstract class in java 
//can have acccess specifiers 
// can't create objects
// can have both abstract and concrete methods
// can have access specifiers

//they are extended and abstract classes  kai abstract methods should be defined  


// to access the class variable insid the method use this keyword
abstract class Employee {

    name: String;

    abstract sing(name: String): String;

    dance(): String {
        return this.name + " is Dancing"
    }
    constructor(name: String) {
        this.name = name
    }
}
class Manager extends Employee {
    post: String
    constructor(post: String) {
        super("kabir")
        // if u want to call parent method use super.
        console.log(super.dance() + "super class method");

        this.post = post //obj.post = post u are  passing.
    }
    sing(name: String): String {
        return name + " is singing"
    }
    dance(): String {
        return this.post + " is Dancing"
    }
}
const User = new Manager("Manager");
console.log(User.sing(User.name));//here i accessed the name of the abstract class
console.log(User.dance());

//  can u do dynamic method dispatch in ts ?

