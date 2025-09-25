import { db } from "@/server/db";


export const POST = async (req: Request) =>{
  const {data} = await req.json();
  console.log('clerk webhook received', data)

  await db.user.create({
    data:{
      id: data.id,
      emailAddress: data.email_addresses[0]?.email_address || "FailedToGet@email.com",
      firstName: data.first_name,
      lastName: data.last_name,
      imageUrl: data.image_url
    }
  })

  console.log('User Created')
  return new Response('Webhook Received', {status: 200})
}