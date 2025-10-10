/*
understood the workflow of
authorization
 
token 

about the find() in array

about the crypto module 

*/


/*
About the .find() --> this takes a callback method 
as input check on the array if the [first occurrrence] of the element exists
or not if yes then ok if not then return undefined

*/

/*
const arr = [{
    firstName: "prince",
    lastname: "kumar"
}, {
    firstName: "raghu",
    lastname: "chitanaya"
}]

for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i].firstName}`)
    console.log(`${arr[i].lastname}`)
}
console.log();
*/

/*
for every element in the array
whatever you pass in the callback in the find() 
*/

/*
here u will be the key in array of objects
u is just the convinent it can be changed as well
DONT KNOW WHY BUT IF I PUT BRACES/BRACKETS IT DOES NOT WORK AS IT SHOULD BE.
*/

/*
const value = arr.find(u =>
    u.firstName === "raghu"
)

console.log(`${value.firstName}`);
*/