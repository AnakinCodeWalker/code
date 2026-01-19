import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


interface detials {
       username: string,
    password: string,
    firstName: string,
    email: string
}
async function main(detials:detials) {
    const user =await prisma.user.create({
        // @ts-ignore
        data: {
     username: detials.username,
    password: detials.password,
    firstName: detials.firstName,
    email: detials.email
    }
    })
    console.log(user);
}



main({
  username: "prince",
  password: "123",
  firstName: "Prince",
  email: "prince@gmail.com",
})    

