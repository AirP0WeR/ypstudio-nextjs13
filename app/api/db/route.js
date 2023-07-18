import { NextResponse } from 'next/server';
import connectDB from '@/config/db';
import feedback from '../../../models/feedbackModel'

export async function POST(request) {
  await connectDB();
  const data = await request.json();
  console.log(data);
  const name = data.name;
  const email = data.email;
  const message = data.message;
  console.log(name, email, message);

  const feed = await feedback.create({
    name,
    email,
    message,
  });
 
  return Response.json({message: "Status ok"}, {status: 200 });

}