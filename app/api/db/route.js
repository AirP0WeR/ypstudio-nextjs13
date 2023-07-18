import { NextResponse } from 'next/server';
import connectDB from '@/config/db';
import feedback from '../../../models/feedbackModel'

export async function POST(request) {
  await connectDB();
  const res = await request.json();
  console.log(res);
  const name = res.name;
  const email = res.email;
  const message = res.message;
  console.log(name, email, message);

  const feed = await feedback.create({
    name,
    email,
    message,
  });
 
  return Response.json({message: "Status ok"}, {status: 200 });

}