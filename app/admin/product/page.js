import Link from "next/link";
// import AddNewProduct from "@/components/serverComponents/addNewProduct"
import { writeFile } from 'fs/promises'
import { join } from 'path'
import logHelper from '@/utils/logHelper'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import Product from '@/models/productModel.js';
import connectDB from '@/config/db';
import { revalidatePath } from 'next/cache';

export default async function Page() {
  async function upload(data) {
    'use server'

    const file = data.get('file')
    const name = data.get('name')
    const price = data.get('price')
    const brand = data.get('brand')
    const count = data.get('count')
    const category = data.get('category')
    const description = data.get('description')
    
    if (!file) {
      throw new Error('No file uploaded')
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // With the file data in the buffer, you can do whatever you want with it.
    // For this, we'll just write it to the filesystem in a new location
    const path = join('./public/images/products', file.name)
    await writeFile(path, buffer)
    console.log(`open ${path} to see the uploaded file`)

    await connectDB();
    try {
      const product = new Product({
        name: name || 'Sample name',
        price: price || 0,
        image: `/images/products/${file.name}` || '/images/sample.jpg',
        brand: brand || 'Sample brand',
        category: category || 'Sample category',
        countInStock: count || 0,
        numReviews: 0,
        description: description || 'Sample description',
      });
      const createdProduct = await product.save();
      // logHelper(product)
      // const product = await Product.findById(itemID);
      // // await new Promise((resolve) => setTimeout(resolve, 3000));

      revalidatePath('/admin/product')
      return logHelper("Product addeed")
    } catch (err) {
      logHelper("error " + err)
    }
    return { success: true }
  }

 
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
        <Link href='/admin/productlist' className='btn btn-light my-3'>
          Go Back
        </Link>
        </div>
        <div className="col-9">
        <form action={upload}>
          <legend>Создать товар</legend>
          <div className="mb-3">
            <label className="form-label">Название</label>
            <input name="name" type="string" className="form-control" placeholder="Картошка"></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Цена</label>
            <input name="price" type="number" className="form-control" placeholder="0"></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Изображение</label>
            <input required name="file" type="file" accept="image/png, image/jpeg" className="form-control"></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Бренд</label>
            <input name="brand" type="string" className="form-control" placeholder="Бренд"></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Количество в наличии</label>
            <input name="count" type="number" className="form-control" placeholder="Количество в наличии"></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Категоря</label>
            <input name="category" type="string" className="form-control" placeholder="Категоря"></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Описание</label>
            <input name="description" type="string" className="form-control" placeholder="Описание"></input>
          </div>
          <button type="submit" value="Создать">
            <FaTrash /> Сохранить
          </button>
        </form>
        </div>
      </div>
    </div>
  );
}