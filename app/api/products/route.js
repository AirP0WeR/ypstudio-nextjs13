import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth";
import Product from '@/models/productModel.js';
import { NextResponse } from 'next/server';
import connectDB from '@/config/db';
import logHelper from "@/utils/logHelper";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
export async function GET() {
  await connectDB();
  const count = await Product.countDocuments();
  const products = await Product.find({});
  return NextResponse.json({ message: "list of products", products, count }, { status: 200 });
}


// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
export async function POST(request) {
  const session = await getServerSession(authOptions);
  if (session?.user.role) {
        // Signed in
    const data = await request.json();
    await connectDB();
    logHelper(session)
    const product = new Product({
      name: data.name || "",
      price: data.price || "0",
      image: data.image || '/images/sample.jpg',
      brand: data.brand || 'Sample brand',
      category: data.category || 'Sample category',
      countInStock: data.countInStock || 0,
      numReviews: data.numReviews || 0,
      description: data.description || 'Sample description',
    });
    const createdProduct = await product.save();
    return NextResponse.json({ message: "Product created", createdProduct }, { status: 200 })

  } else {
    // Not Signed in
    return NextResponse.json({ message: "Not admin" }, { status: 401 });
  }
}