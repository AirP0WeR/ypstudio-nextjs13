// import { NextResponse } from 'next/server';
import connectDB from '@/config/db';
import User from '../../../../models/userModel';
import jwt from 'jsonwebtoken';
import logHelper from '@/utils/logHelper';

// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public

export async function POST(request) {
    await connectDB();
    const data = await request.json();
    logHelper(data);

    const email = data.email;
    const password = data.password;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {

        const existUser = user.id
        logHelper(existUser);

        const token = jwt.sign({ existUser }, process.env.JWT_SECRET, {
            expiresIn: '30d',
        });
        logHelper(token);


        // Set JWT as an HTTP-Only cookie
        const userInfo = {
            '_id': user._id,
            'name': user.name,
            'email': user.email,
            'isAdmin': user.isAdmin
        }

        const secure = process.env.NODE_ENV !== 'development';
        return new Response(JSON.stringify(userInfo), {
            status: 200,
            headers: {
                'Set-Cookie': `token=${token}`,
                'httpOnly': `true`,
                'secure': `${secure}`,
                'sameSite': 'strict',
                'maxAge': 30 * 24 * 60 * 60 * 1000
            },
            // body: {
            //     _id: user._id,
            //     name: user.name,
            //     email: user.email,
            //     isAdmin: user.isAdmin
            // }
        })
        // return Response.json({ message: "Auth user" }, { status: 200 });

    } else {
        return Response.json({ message: "Invalid user data" }, { status: 400 });
    }
}

export async function GET() {
    await connectDB();
    const users = await User.find({});
    logHelper(users);

    return Response.json(users);

}