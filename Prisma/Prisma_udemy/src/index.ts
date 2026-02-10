import { PrismaClient } from "@prisma/client";

interface UserDetails{
    firstName : string,
//   middleName :string,
  lastName : string ,
  email  : string  ,
//   verified  : boolean
}

const prisma = new PrismaClient()

async function main(userDetails:UserDetails[]) {
    


const User = await prisma.user.create({

    data:{
firstName:userDetails.firstName ,
//  middleName :userDetails.middleName,
  lastName : userDetails.lastName,
  email  : userDetails.email,
//   verified  : userDetails.verified,
    }
})
}

main([{
    firstName : "ravi",
//   middleName :"kanth",
  lastName : "pathak" ,
  email  : "xyz@getMaxListeners.com",
//   verified  : false
},{
    firstName : "ravi",
//   middleName :"kanth",
  lastName : "pathak" ,
  email  : "xyz@getMaxListeners.com",
//   verified  : false
}])