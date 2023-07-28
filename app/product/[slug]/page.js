import Link from "next/link"
import Image from "next/image"
import Product from '@/models/productModel.js';
import connectDB from '@/config/db';
import { AddToCart } from "@/components/buttons.component";

export default async function Page({ params }) {



  await connectDB();
  const product = await Product.findById(params.slug)
  const item = JSON.stringify(product)
  console.log(JSON.stringify(product))
  return (
  
  <div className="container">
    <h1>My Post: {params.slug}</h1>
    <Link className='btn btn-light my-3' href='/'>
      Go Back
    </Link>
    <div className="row">
      <div className="col-6">
        <Image className="img-fluid" src={product.image} width={300} height={300} alt={product.name} />
      </div>
      <div className="col-3">
        <h1>{product.name}</h1>
        <h6>{product.description}</h6>
      </div>
      <div className="col-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Цена {product.price} руб.</li>
              <li className="list-group-item">Статус
                <div className="col">
                  {product.countInStock > 0 ? 'В наличии' : 'Отсутствует'}
                </div>
              </li>
              <li className="list-group-item">Количество {product.countInStock}</li>
            </ul>
            <Link href="/cart">
              <button className="btn btn-primary">В корзину</button>
            </Link>
            <AddToCart cartItem={item}/>
          </div>
        </div>
      </div>
    </div>
  </div>)

}