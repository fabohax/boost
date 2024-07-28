import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Logo(props) {
    return (
        <div>
            <Link href="/" passHref>
                <Image src="/logo.svg" className="mx-auto z-100 bg-color-transparent" height={45} width={45} alt="Boost Perú" />
            </Link>
        </div>
    );
}

export default Logo;