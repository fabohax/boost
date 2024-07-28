import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"

function Admin() {
    const { data: session } = useSession()
    if(session) {
        window.location.href = "/dash";
    }
    return <>
        <div className='login'>
            <Link href="/" passHref>
                <Image src="/logo.svg" className="block bg-transparent mx-auto justify-center items-center z-100 invert" height={45} width={45} alt="Boost Perú" />
            </Link> 
            <br/>
            <button onClick={() => signIn()} className='font-bold text-white rounded-md border-2 border-white p-3 hover:bg-white hover:text-black'>Iniciar Sesión</button>
        </div>
    </>
}

export default Admin;