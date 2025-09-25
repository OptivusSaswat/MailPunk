import { db } from "./server/db";

const response = async () => {
   return await db.user.create({
    data: {
      emailAddress: "xyzz@gmail.com",
      firstName: "Saswat",
      lastName: "Rath"
    }
  })
} 

response();
console.log(await response)