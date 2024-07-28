import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from './header';
import Footer from './footer';
import { useRouter } from 'next/router';
import { getCart, removeAllFromCart } from '../comps/Cart';
import Checkout from '../comps/checkout';

function Cart() {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);  
  const [cartItems, setCartItems] = useState([]);
  const [isGrid, setGrid] = useState(false);
  const [PENUSDRate] = useState(0.285); 

  useEffect(() => {
    setGrid(true);
  }, []);

  useEffect(() => {
    const cartItems = getCart();
    setCartItems(cartItems);
  }, []);

  const handleClearCart = () => {
    removeAllFromCart();
    window.location.reload();
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.Qty, 0);
  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price) * item.Qty, 0);
  const USDPrice = (totalPrice * PENUSDRate).toFixed(2);

  const handleCheckoutClick = () => {
    setShowPopup(true);
  };

  return (
    <div>
      <Head>
        <title>CARRITO DE COMPRAS | BOOST</title>
      </Head>
      <Header showCartIcon={true}  blue={true}/>
      <div className="cart">
        {totalQuantity && totalQuantity > 0 ? (
          <div className="cartCheck select-none rounded rounded-md">
            {totalQuantity} item{totalQuantity === 1 ? '' : 's'} a {totalPrice} PEN {' '}
            <button onClick={handleCheckoutClick} className='rounded rounded-md'>
              Comprar
            </button>
          </div>
        ) : (
          <div className="noItems rounded rounded-md">
            No hay artículos en el carrito. <Link href="/tienda" className="blue">VER TIENDA</Link>
          </div>
        )}
        {showPopup && <Checkout cartItems={cartItems} amount={USDPrice} />}
        <div className={`grid ${isGrid ? 'visible' : ''}`}>
          {/* Render cart items */}
          {cartItems.map((item) => (
            <div className="cartItem" key={item.id}>
              <div className="squareItem rounded rounded-md">
                <Link href={`/${item.id}`} passHref>
                  <Image width={350} height={350} src={`/img${item.image}`} alt={item.title} />
                </Link>
              <p className="mt-2 text-sm font-bold">{item.title}</p>
              <p className="text-sm">{item.price} PEN | Q: {item.Qty}</p>
              </div>
            </div>
          ))}
        </div>
        {cartItems && cartItems.length > 0 && (
          <div>
            <Link href="#" onClick={handleClearCart} className="buttonCart rounded rounded-md">
              Limpiar carrito
            </Link>
            <Link href="/tienda" className="buttonCart rounded rounded-md">
              Ver más
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
