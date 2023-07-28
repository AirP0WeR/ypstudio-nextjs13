import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import Product from '@/models/productModel.js';
import connectDB from '@/config/db';
import logHelper from '@/utils/logHelper';
import { writeFile } from 'fs/promises'
import { join } from 'path'
import Image from 'next/image';
import { revalidatePath } from 'next/cache';


export default async function Page({ params }) {
  connectDB();

  async function update(data) {
    'use server'
    const product = await Product.findById(params.id);

    const file = data.get('file')
    product.name = data.get('name');
    product.price = data.get('price')
    product.description = data.get('description')
    product.image = `/images/products/${file.name}`
    product.brand = data.get('brand')
    product.category = data.get('category')
    product.countInStock = data.get('count')

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const path = join('./public/images/products', file.name)
    await writeFile(path, buffer)
    console.log(`open ${path} to see the uploaded file`)


    const updatedProduct = await product.save();
    revalidatePath(`/admin/product/{${params.id}}`)
    logHelper('Updated')
  }

  const product = await Product.findById(params.id);

  return (
    <div className="container">
      <form action={update}>
        <legend>Создать товар</legend>
        <div className="mb-3">
          <label className="form-label">Название</label>
          <input name="name" type="string" className="form-control" placeholder="Название" defaultValue={`${product.name}`}></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Цена</label>
          <input name="price" type="number" className="form-control" placeholder="0" defaultValue={`${product.price}`}></input>
        </div>
        <div className="mb-3">
          <div className="row">
            <div className='col'>
              <label className="form-label">Изображение</label>
              <input required name="file" type="file" accept="image/png, image/jpeg" className="form-control"></input>
            </div>
            <div className='col'>
              <label className="form-label">Текущее фото</label>
              <input disabled="true" name="image" type="string" className="form-control" placeholder="Картинка" defaultValue={`${product.image}`}></input>
            </div>
            <div className='col text-center'>
              <Image
              src={`${product.image}`}
              width={150}
              height={150}
              alt="Product"
            />
            </div>
          </div>

        </div>
        <div className="mb-3">
          <label className="form-label">Бренд</label>
          <input name="brand" type="string" className="form-control" placeholder="Бренд" defaultValue={`${product.brand}`}></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Количество в наличии</label>
          <input name="count" type="number" className="form-control" placeholder="Количество в наличии" defaultValue={`${product.countInStock}`}></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Категоря</label>
          <input name="category" type="string" className="form-control" placeholder="Категоря" defaultValue={`${product.category}`}></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Описание</label>
          <input name="description" type="string" className="form-control" placeholder="Описание" defaultValue={`${product.description}`}></input>
        </div>
        <button type="submit" value="Создать">
          <FaTrash /> Сохранить
        </button>
      </form>
    </div>
  );
}
