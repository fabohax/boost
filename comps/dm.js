import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function DM(props) {
    return (
        <div>
            <Link href="https://wa.link/1oekn9" target="_blank" passHref><dm><Image src="/ico/wa.svg" height={45} width={45} alt="Envíanos un mensaje" className="invert"></Image></dm></Link>
        </div>
    );
}

export default DM;