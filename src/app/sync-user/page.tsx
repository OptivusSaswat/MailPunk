import { db } from "@/server/db";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";
import { toast } from "sonner";

const SyncUser = async() => {
  const {userId} = await auth()
  if(!userId){
    toast.error("Couldn't sync user with the database")
    throw new Error("Error not found")
  }

  const client = await clerkClient()
  const user = await client.users.getUser(userId)

  if(!user.emailAddresses[0]?.emailAddress){
    return notFound()
  }

  await db.user.upsert({
    where:{
      id: userId
    },

    update:{
      emailAddress: user.emailAddresses[0].emailAddress!,
      firstName: user.firstName!,
      lastName: user.lastName!,
      imageUrl: user.imageUrl!
    },

    create:{
      emailAddress: user.emailAddresses[0].emailAddress,
      firstName: user.firstName!,
      lastName:user.lastName!,
      imageUrl: user.imageUrl!
    }
  })

  console.log(user)

  return redirect("/")
}

export default SyncUser