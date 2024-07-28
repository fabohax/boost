import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from './header';
import Map from '../comps/map';
import Reviews from './reviews';
import Footer from './footer';

export default function Home() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <main className="container y mandatory-scroll-snapping m-0">
        <Header showCartIcon={true} blue={false}/>
        <section className="items-center">
          <intro>
            <video autoPlay loop muted onClick={handlePlay} playsInline>
              <source src="/boostr.mp4" type="video/mp4" />
            </video>
          </intro>
          <mobileintro onClick={handlePlay}>
            <video id="mobileintro" autoPlay muted loop playsInline>
              <source src="/boost.mp4" type="video/mp4"></source>
            </video>
          </mobileintro>
          <button onClick={handlePlay} className='invert text-white fixed bottom-6 left-6 z-50'>
            {isPlaying ? 
            <Image src="/ico/sound.svg" height={35} width={35} alt="sound"/> : 
            <Image src="/ico/mute.svg" height={35} width={35} alt="muted"/>}
          </button>
          <audio ref={audioRef} loop className='hidden'>
            <source src="/boostr.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </section>
        <section className="ad one items-center">
          <div className='mx-auto  justify-center pt-12'>
            <h1>¿Buscas servicio técnico?</h1>
            <p>Te atendemos inmediatamente</p>
            <Link href="/soporte" passHref><button>Contáctanos</button></Link>
            <div className="socials invert">
              <Link href="https://wa.link/agfp0z" target="_blank" passHref><Image src="/ico/wa.svg" height={36} width={36} alt="whatsapp"></Image></Link>
              <Link href="https://www.facebook.com/BoostPeru" target="_blank" passHref><Image src="/ico/fb.svg" height={36} width={36} alt="facebook"></Image></Link>
              <Link href="https://www.instagram.com/boostperu_/" target="_blank" passHref><Image src="/ico/ig.svg" height={36} width={36} alt="instagram"></Image></Link>
              <Link href="https://www.tiktok.com/@boostperu" target="_blank" passHref><Image src="/ico/tiktok.svg" height={36} width={36} alt="tiktok"></Image></Link>
              <Link href="https://www.youtube.com/@boostperu8654" target="_blank" passHref><Image src="/ico/yt.svg" height={36} width={36} alt="youtube"></Image></Link>
            </div>
          </div>
        </section>
        <section className="four items-center">
          <Reviews/>
          <Footer/>
        </section>
    </main>
  )
}
