/*index.js*/
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import data from '../db/data.json';
import Header from './header';
import Footer from './footer';

export default function Home() {

  const [products, setProducts] = useState(data.data);

  useEffect(() => {
    setProducts(data.data);
  }, []);

  const [isGrid, setGrid] = useState(false);

  useEffect(() => {
    setGrid(true);
  }, []);

  return (
    <div className="block store">
      <Header showCartIcon={false} blue={true}/>      
      <div className={`lg:w-1/2 grid ${isGrid ? 'visible' : ''}`}>
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <Link href={`/${product.id}`} passHref>
              <Image width={350} height={350} src={`/img${product.image}`} alt={product.title} />
              <p className='text-sm'>{product.title}</p>
              <p className='text-sm text-right'>S/. {product.price}.00</p>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
