// ABSTRACT CLASSES
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ISME CONSTRUCTOR HOTE HAI OR CONCRETE METHOD HOTE HAI INTERFACE MAI NHI HOTE HAI
// YEH EXTEND HOTE HAI INTERFACE CAN BE USED AS TYPE OR CAN BE IMPLEMENTED 
//properties same as abstract class in java 
//can have acccess specifiers 
// can't create objects
// can have both abstract and concrete methods
// can have access specifiers
//they are extended and abstract classes  kai abstract methods should be defined  
// to access the class variable insid the method use this keyword
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
    }
    Employee.prototype.dance = function (name) {
        return this.name + " is Dancing";
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(post) {
        var _this = _super.call(this, "kabir") || this;
        _this.name = "kunal";
        // if u want to call parent method use super.
        console.log(_super.prototype.dance.call(_this, _this.name) + "super class method");
        _this.post = post; //obj.post = post u are  passing.
        return _this;
    }
    Manager.prototype.sing = function (name) {
        return name + " is singing";
    };
    Manager.prototype.dance = function () {
        return this.post + " is Dancing";
    };
    return Manager;
}(Employee));
var User = new Manager("Manager");
console.log(User.sing(User.name)); //here i accessed the name of the abstract class
console.log(User.dance());
//  can u do dynamic method dispatch in ts ?
