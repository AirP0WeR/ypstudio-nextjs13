import connectDB from '@/config/db';
import feedback from '../../../models/feedbackModel'
import logHelper from '../../../utils/logHelper'

export async function POST(request) {
  await connectDB();
  const data = await request.json();

  const name = data.name;
  const email = data.email;
  const message = data.message;

  logHelper("DB request data" + name + email + message);

  const feed = await feedback.create({
    name,
    email,
    message,
  });
 
  return Response.json({ ok: true }, {message: "Status ok"}, {status: 200 });

}