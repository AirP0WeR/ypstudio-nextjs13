import { NextResponse } from 'next/server';
import connectDB from '@/config/db';
import User from '@/models/userModel';
import logHelper from '@/utils/logHelper';
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth";

// Register new user to DB temp

export async function POST(request) {
    await connectDB();
    const data = await request.json();
    logHelper(data);
    const name = data.name;
    const email = data.email;
    const emailVerified = data.emailVerified;
    const image = data.image;
    const role = data.role;
    const userExists = await User.findOne({ email });

    if (userExists) {
        return NextResponse.json({ message: "User already exists" }, { status: 400 });
    } else {
        const user = await User.create({
            name,
            email,
            emailVerified,
            image,
            role
        });
        return NextResponse.json({message: 'New user registred'}, {status: 201})
    }

}

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
export async function GET() {
    const session = await getServerSession(authOptions);
    if (session?.user.role === "admin") {
        // Signed in
        await connectDB();
        const users = await User.find({});
        logHelper(users);
        return NextResponse.json(users);
      } else {
        // Not Signed in
        return NextResponse.json({ message: "Not admin" }, {status: 401});
      }
}