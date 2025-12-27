
// works similarly as it will work on the java as well 

// even though you dont have any variable that you ARE  trying to intiallize or any methods that are taking any args but still you have to call the  super() in parent class 

// but  if you have then call the super and pass the value in  it and create a constructor in the base class
class child {
    name: string = "kabir"
    
    constructor(name: string) {
        this.name = name
    }
}
class father extends child {

    age: number
    constructor(age: number) {
        // if you  pass something over it will override the value you are passing the class itself
        super("raghuveer")

        this.age = age
    }
}

const obj = new father(23)
console.log(obj.name)

