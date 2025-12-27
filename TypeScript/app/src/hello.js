console.log("hello");
// normal variables
var a = 5;
console.log(a);
//functions
function sum(num) {
    return num;
}
var c = 0;
console.log(sum(c));
var userDetails = {
    name: "kabir das",
    age: 39,
    address: {
        city: "jahanabad",
        state: "tripura"
    },
    color: 103,
};
console.log(userDetails);
 
var form = {
    age: 2,
    color: "red"
};
// as it is optional and you did not provided any value  this will be undefined..
console.log(form.name);
