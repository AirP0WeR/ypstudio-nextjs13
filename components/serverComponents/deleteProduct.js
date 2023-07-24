'use server'

import Product from '@/models/productModel.js';
import connectDB from '@/config/db';
import logHelper from "@/utils/logHelper"
import { revalidatePath } from 'next/cache';

export async function deleteProduct(itemID, res) {
   
    await connectDB();
    try {
        const product = await Product.findById(itemID);
        // await new Promise((resolve) => setTimeout(resolve, 3000));
        await Product.deleteOne({ _id: product._id });
        logHelper(product)

        revalidatePath('/admin/productlist')
        return logHelper("deleted")
    } catch(err) {
        logHelper("error " + err)
    }
    return logHelper("Not deleted")



}