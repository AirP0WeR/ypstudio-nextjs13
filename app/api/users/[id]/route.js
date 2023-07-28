import { NextResponse } from 'next/server'
import connectDB from '@/config/db';
import User from '@/models/userModel';
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth";
import logHelper from "@/utils/logHelper"



// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
export async function GET(request, { params }) {
  const session = await getServerSession(authOptions);
  if (session?.user.role) {
    await connectDB();
    logHelper("Id " + params.id)
    try {
      const user = await User.findById(params.id);
      if (user) {
        return NextResponse.json({ message: "User info", user }, { status: 200 });
      }
    } catch (err) {
      logHelper("error " + err)
    }
    return NextResponse.json({ message: "User not founded" }, { status: 404 });
  } else {
    return NextResponse.json({ message: "Only admin can get users"}, { status: 404 });
  }

}

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin

export async function DELETE(request, { params }) {
  const session = await getServerSession(authOptions);
  if (session?.user.role) {
    await connectDB();
    logHelper("Id " + params.id)
    try {
      const user = await User.findById(params.id);
      if (user) {
        await User.deleteOne({ _id: user._id });
        return NextResponse.json({ message: "User deleted" }, { status: 200 });
      }
    } catch (err) {
      logHelper("error " + err)
    }
    return NextResponse.json({ message: "User not founded" }, { status: 404 });
  } else {
    return NextResponse.json({ message: "Only admin can delet users"}, { status: 404 });
  }
}

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin

export async function PUT(request, { params }) {
  const session = await getServerSession(authOptions);
  if (session?.user.role) {
    await connectDB();
    const data = await request.json();
    logHelper("Id " + params.id)
    try {
      const user = await User.findById(params.id);
      if (user) {
        user.name = data.name || user.name;
        user.role = data.role || user.role;;
        await user.save();
        return NextResponse.json({ message: "User updated", user }, { status: 200 });
      }
    } catch (err) {
      logHelper("error " + err)
    }
    return NextResponse.json({ message: "User not founded" }, { status: 404 });
  } else {
    return NextResponse.json({ message: "Only admin can update users"}, { status: 404 });
  }
}