import logHelper from '@/utils/logHelper';
import Product from '@/models/productModel.js';
import connectDB from '@/config/db';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  await connectDB();
  const products = await Product.find({})

  // logHelper(products)
  
  return (
    <div className="container">
      <div className="row">
      {products.map((product) => (
            <div className="col-4" key={product._id}>
              <Link href={`/product/${product._id}`}>
                <h1>{product.name}</h1>
                <Image className="img-fluid" src={product.image} width={300} height={300} alt={product.name} />
                <h2>Цена {product.price}</h2>
              </Link>
            </div>

      ))}
      </div>
    </div>
  );
}