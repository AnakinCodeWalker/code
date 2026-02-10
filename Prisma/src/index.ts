import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL!,
    },
  },
});

interface Details {
  username: string;
  password: string;
  firstName: string;
  lastName : string,
  email: string;
}

async function main(details: Details) {
  const user = await prisma.user.create({
    data: {
      username: details.username,
      password: details.password,
      firstName: details.firstName,
      lastName:details.lastName ,
      email: details.email,
    },
  });

  console.log(user);
}

main({
  username: "prince",
  password: "123",
  firstName: "Prince",
  lastName : "kumar",
  email: "prince@gmail.com",
});
