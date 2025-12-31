// works similarly as it will work on the java as well 
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
// even though you dont have any variable that you ARE  trying to intiallize or any methods that are taking any args but still you have to call the  super() in parent class 
// but  if you have then call the super and pass the value in  it and create a constructor in the base class
var child = /** @class */ (function () {
    function child(sex) {
        this.name = "kabir das";
        this.sex = sex;
    }
    return child;
}());
var father = /** @class */ (function (_super) {
    __extends(father, _super);
    function father(age) {
        // if you  pass something over it will override the value you are passing the class itself
        var _this = _super.call(this, "female") || this;
        _this.age = age;
        return _this;
    }
    return father;
}(child));
var obj = new father(23);
console.log(obj.name);
console.log(obj.sex);
