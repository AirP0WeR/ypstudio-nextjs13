import { NextResponse } from 'next/server';
import connectDB from '@/config/db';
import User from '../../../models/userModel';
import jwt from 'jsonwebtoken';
import logHelper from '@/utils/logHelper';


export async function POST(request) {
    await connectDB();
    const data = await request.json();
    logHelper(data);

    const name = data.name;
    const email = data.email;
    const password = data.password;
    const userExists = await User.findOne({ email });

    if (userExists) {
        return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    const user = await User.create({
        name,
        email,
        password,
    });

    if (user) {
        const newUser = user.id
        console.log(newUser);
        const token = jwt.sign({ newUser }, process.env.JWT_SECRET, {
            expiresIn: '30d',
        });
        logHelper(token);


        // Set JWT as an HTTP-Only cookie

        const secure = process.env.NODE_ENV !== 'development';

        return new Response('Hello, Next.js!', {
            status: 201,
            headers: {
                'Set-Cookie': `token=${token}`,
                'httpOnly': `true`,
                'secure': `${secure}`,
                'sameSite': 'strict',
                'maxAge': 30 * 24 * 60 * 60 * 1000
            },
        })

    } else {
        return NextResponse.json({ message: "Invalid user data" }, { status: 400 }), generateToken;
    }

}

export async function GET() {
    await connectDB();
    const users = await User.find({});
    logHelper(users);
  
    return Response.json(users);
  
  }