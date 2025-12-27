// type or interface are almost same , bs syntax thora sa alg hai or isko implement nhi kr skte hai interface ko kr skte hai 

//interface dont have union and intersections[iisi mai union intersection niche hai]
// at root level u can not use the [ union | ]  like u can in type but inside of interface u can do that for  a variable 


//type ka type mai interface ko use kr skte hai 

type lord= {  // type or object ka syntax same hai bs type likhna prta hai aage
    name :String,
    status :god // type mai interface ka use 
}

const shiva:lord ={
    name:"shiva",
    status:{ //iska type hai god joki  hai interface as a type
        name:"all haild the lord",
     greet:()=>{

    console.log('supreme ruler');
}   
    }
}
console.log(JSON.stringify(shiva));
interface god{
    name:string,
    greet : ()  => void //only have abstract method
}

// type of object  is interface 
const lord :god={
name:"mahamud",
greet:()=>{
    console.log('i am god');
}
}


// union ( | ) [NOT AVIALABLE IN INTERFACES]



//intersection ( & ) [NOT AVIALABLE IN INTERFACES]
//dono ki porperties ko define krna parega
type employee ={
    name : string,
role : String
}

type manager={
name:string,
salary :String
}

type person = manager & employee

//now you have to define all the properties of the manager and employee as it type of both 

const user :person = {
name:"raghav sir", //name dono mai tha to sirf 1 bar define kiya or dono ki sari porperties ko define krna para
role:"boss",
salary:"16 lakh",
}
console.log(user);

