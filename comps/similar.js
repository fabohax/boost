import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import products from '../db/data.json';

const SimilarProducts = ({ currentProduct }) => {
  // Filter products with the same tag as the current product
  const similarProducts = products.data.filter((product) => product.tag === currentProduct.tag);
  const [isGrid, setGrid] = useState(false);

  useEffect(() => {
    setGrid(true);
  }, []);

  return (
    <div>
      <br></br>
      <h2>Similares:</h2>
      <div className={`grid ${isGrid ? 'visible' : ''}`}>
        {similarProducts.slice(0, 3).map((product) => (
          <div key={product.id}>
            <Link href={`/${product.id}`} passHref>
              <Image width={350} height={350} src={product.image} alt={product.title} />
              <p>{product.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
