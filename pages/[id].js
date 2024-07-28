/*[id].js*/
"use client"
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import data from '../db/data.json';
import { getCart, addToCart, removeFromCart } from '../comps/Cart';
import SimilarProducts from './similar';
import Header from './header';
import Footer from './footer';
import '../app/special.css';

function Product({ product }) {
  const products = data.data;
  const { id, title, tag, description, price, currency, image } = product;
  const [cartItems, setCartItems] = useState([]);
  const [Qty, setQty] = useState(1);

  useEffect(() => {
    const cartItems = getCart();
    setCartItems(cartItems);
  }, []);

  const router = useRouter();
  const isProductInCart = cartItems.some((item) => item.id === id);
  const GRABBER = isProductInCart ? 'REMOVER' : 'LLEVAR';
  
  const handleAddToCart = () => {
    if (isProductInCart) {
      removeFromCart(product);
    } else {
      addToCart(product, Qty);
    }
    router.push('/carrito');
  };
  const handleRemoveFromCart = () => {
    removeFromCart(product);
  };

  const downQty = () => {
    if (Qty > 1) {
      setQty(Qty - 1);
    }
  };

  const upQty = () => {
    setQty(Qty + 1);
  };

  return (
    <div className="product">
      <Head>
        <title>{title} | BOOST</title>
      </Head>
      <Header blue={true} />
      <div className="productPage lg:mx-auto m-6">
        <div className="grid-container">
          <div className="image-container">
            <Image width={500} height={500} src={`/img${image}`} alt={title} />
          </div>
          <div className="details-container">
            <h1 className="title">{title}</h1>
            <p className='font-bold'>{price} {currency} </p>
            <button
              className={isProductInCart ? 'whiteButton' : 'buyButton'}
              onClick={handleAddToCart}
            >
              {GRABBER}
            </button>
            <button onClick={downQty} className='qbtn ml-2 font-bold bg-gray-200 p-2 text-white pl-4 pr-4'>-</button>
            <input
              type="number"
              placeholder="1"
              name="Qty"
              className='qty text-center p-2 outline-none'
              value={Qty}
              max="50"
              onChange={(e) => setQty(parseInt(e.target.value))}
            />
            <button onClick={upQty} className='qbtn font-bold bg-gray-200 p-2 text-white pl-4 pr-4'>+</button>
          </div>
        </div>
        <div className='p-6'>{description}</div>
        <SimilarProducts currentProduct={product} />
      </div>
      <Footer />
    </div>
  );
}

// Rest of the code remains the same


export async function getStaticPaths() {
  const paths = data.data.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}



export async function getStaticProps({ params }) {
  const { id } = params;
  const parsedId = parseInt(id, 10);
  const product = data.data.find((product) => product.id === parsedId);
  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
}

export default Product;
