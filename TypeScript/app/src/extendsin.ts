// to access the class variable insid the method use this keyword

// u dont have to write the function keyword inside the class u can define it directly.
// works similarly as it will work on the java as well 

// even though you dont have any variable that you ARE  trying to intiallize or any methods that are taking any args but still you have to call the  super() in parent class 

// but  if you have then call the super and pass the value in  it and create a constructor in the base class
class child {
    name: string ="kabir das" //as u are defining it here u dont have to pass it in the constructor
    //or agar sirf yhi varaible hota to , u dont have to create the parent constructor at all bs normal super likh do in the vase and u are good to go.
   
    sex:string
    constructor(sex: string) { // need to define it only to intialize sex variable.
        this.sex = sex
    }
   /* 
   u could make a shorthand of this also where u dont have to define the variable and then intialize it inside the constructor.
    
   constructor(public name:string , public sex:string){
        this.name=name
        this.sex=sex
    }
        */
}
class father extends child {

    age: number
    constructor(age: number) {
        // if you  pass something over it will override the value you are passing the class itself
        super("female")

        this.age = age
    }
}

const obj = new father(23)
console.log(obj.name)
console.log(obj.sex);


