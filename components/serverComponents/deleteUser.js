'use server'
import User from '@/models/userModel';
import connectDB from '@/config/db';
import logHelper from "@/utils/logHelper"
import { revalidatePath } from 'next/cache';

export async function deleteUser(iserID) {
    await connectDB();
    try {
        const user = await User.findById(iserID);
        // logHelper(user)
        await user.deleteOne({ _id: user._id });
        revalidatePath('/admin/userlist')
        return {succes: true}
    } catch(err) {
        logHelper("error " + err)
    }

}