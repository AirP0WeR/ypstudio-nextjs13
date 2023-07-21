import User from '@/models/userModel';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import connectDB from '@/config/db';

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private

export async function GET() {
    await connectDB();
    const session = await getServerSession(authOptions);
    if (session) {
      const email = session.user.email;
      const user = await User.findOne( {email} );
  
      if (user) {
          return Response.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            image: user.image,
            isAdmin: user.isAdmin,
          });
      
        } else {
          return Response.json({message: 'User not found'}, {status: 404});
        }
    } else {
      return Response.json({message: 'Not authorized'}, {status: 401});
    }

}