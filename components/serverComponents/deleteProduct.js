'use server'
import { unlink } from 'node:fs';
import Product from '@/models/productModel.js';
import connectDB from '@/config/db';
import logHelper from "@/utils/logHelper"
import { revalidatePath } from 'next/cache';

export async function deleteProduct(itemID) {
    await connectDB();
    try {
        const product = await Product.findById(itemID);
        logHelper("image " + product.image)
        unlink(`/home/airp0wer/ypstudio/ypstudio-nextjs13/public/${product.image}`, (err) => {
            if (err) throw err;
            console.log('path/file.txt was deleted');
          });
        await Product.deleteOne({ _id: product._id });
        revalidatePath('/admin/productlist')
          return {succes: true}
    } catch(err) {
        logHelper("error " + err)
    }

}