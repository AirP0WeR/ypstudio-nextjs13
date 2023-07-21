import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth";
import Product from '@/models/productModel.js';
import { NextResponse } from 'next/server';
import connectDB from '@/config/db';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public


export async function GET(request) {
    await connectDB();
    const data = await request.json();

    const pageSize = process.env.PAGINATION_LIMIT;
    const page = Number(data.query.pageNumber) || 1;
  
    const keyword = data.query.keyword
      ? {
          name: {
            $regex: data.query.keyword,
            $options: 'i',
          },
        }
      : {};
  
    const count = await Product.countDocuments({ ...keyword });
    const products = await Product.find({ ...keyword })
      .limit(pageSize)
      .skip(pageSize * (page - 1));
    
    return NextResponse.json({products, page, pages: Math.ceil(count / pageSize) }, { status: 200 });



}


// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
export async function POST() {

}