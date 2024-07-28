import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = ({ showCartIcon, blue }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div>
      <nav className={`${blue ? ("bnav"):("")} z-40`}>
        <div>
          <Link href="/" passHref>
            <Image src="/logo.svg" className="logo invert" height={50} width={50} alt="Boost Perú" />
          </Link>
        </div>
        <div className="flex items-center justify-end lg:block md:block hidden">
          <Link href="https://www.tiktok.com/@boostperu" target="_blank" passHref>
            <Image src="/ico/tiktok.svg" height={36} width={36} alt="tiktok" />
          </Link>
          <Link href="https://www.facebook.com/BoostPeru" target="_blank" passHref>
            <Image src="/ico/fb.svg" height={36} width={36} alt="facebook" />
          </Link>
          <Link href="https://www.instagram.com/boostperu_/" target="_blank" passHref>
            <Image src="/ico/ig.svg" height={36} width={36} alt="instagram" />
          </Link>
          <Link href="https://www.youtube.com/@boostperu8654" target="_blank" passHref>
            <Image src="/ico/yt.svg" height={36} width={36} alt="youtube" />
          </Link>
          <Link href="/soporte" passHref className='noscale'>
            <button className="text-black py-2 px-4 invert rounded">Soporte Técnico</button>
          </Link>
          {showCartIcon ? (
            <Link href="/tienda" passHref>
              <Image src="/ico/bag.svg" height={50} width={50} alt="Tienda" />
            </Link>
          ) : (
            <Link href="/carrito" passHref>
              <Image src="/ico/cart.svg" height={50} width={50} alt="Other Page" />
            </Link>
          )}
        </div>
        <button
            className={`${
              isMenuOpen ? 'hidden' : ''
            } lg:hidden block invert mr-4`}
            onClick={handleMenu}
          >
          <Image
            src="/ico/burguer.svg"
            height={25}
            width={25}
            alt="boost-burger-ico"
            className="hover:scale-110"
          />
        </button>
      </nav>
      <div id="menu"
        className={`${
          isMenuOpen ? 'w-full lg:w-auto block' : 'hidden w-0'
        } transition-all duration-300 text-white absolute h-full z-50`}
      >
        <button
          id="close"
          onClick={handleMenu}>
          <Image src="/ico/close.svg"             
            height={25}
            width={25}
            alt="boost-burger-ico">
          </Image>
        </button>
        <Link href="/soporte" className='block lg:text-[0.75em] text-[1.5em] m-4 hover:bg-white hover:text-black'>Soporte Técnico</Link>
        <Link href="/tienda" className='block lg:text-[0.75em]  text-[1.5em] m-4 hover:bg-white hover:text-black'>Tienda Virtual</Link>
        <Link href="/reclamaciones" className='block lg:text-[0.75em]  text-[1.5em] m-4 hover:bg-white hover:text-black'>Reclamaciones</Link>
        <Link href="/somos" className='block lg:text-[0.75em]  text-[1.5em] m-4 hover:bg-white hover:text-black'>Somos</Link>
        <Link href="/contacto" className='block lg:text-[0.75em]  text-[1.5em] m-4 hover:bg-white hover:text-black'>Contacto</Link>
      </div>
    </div>
  );
};

export default Header;
