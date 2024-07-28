import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

function Socials(props) {
    return (
        <div className='socials'>
            <Link href="https://wa.link/agfp0z" target="_blank" rel="noopener noreferrer">
            <Image src="/ico/wa.svg" height={36} width={36} alt="whatsapp" />
            </Link>
            <Link href="https://www.facebook.com/BoostPeru" target="_blank" rel="noopener noreferrer">
            <Image src="/ico/fb.svg" height={36} width={36} alt="facebook" />
            </Link>
            <Link href="https://www.instagram.com/boostperu_/" target="_blank" rel="noopener noreferrer">
            <Image src="/ico/ig.svg" height={36} width={36} alt="instagram" />
            </Link>
            <Link href="https://www.youtube.com/@boostperu8654" target="_blank" rel="noopener noreferrer">
            <Image src="/ico/yt.svg" height={36} width={36} alt="youtube" />
            </Link>
            <Link href="https://www.tiktok.com/@boostperu" target="_blank" rel="noopener noreferrer">
            <Image src="/ico/tiktok.svg" height={36} width={36} alt="tiktok" />
            </Link>
        </div>
    );
}

export default Socials;