import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import products from '../db/data.json';

const SimilarProducts = ({ currentProduct }) => {

  if (!currentProduct) {
    return null;
  }

  let similarProducts = products.data.filter((product) => product.tag === currentProduct.tag);
  similarProducts = similarProducts.filter((product) => product.id !== currentProduct.id);

  return (
    <div>
      <br></br>
      <h2>Similares:</h2>
      <div className='grid visible'>
        {similarProducts.slice(0, 3).map((product) => (
          <div key={product.id} className='similarItem rounded rounded-md p-3'>
            <Link href={`/${product.id}`} passHref>
              <Image width={350} height={350} src={`/img${product.image}`} alt={product.title} />
              <p className='text-sm font-bold'>{product.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
