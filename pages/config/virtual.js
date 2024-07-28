import React, {useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import { useSession, signIn, signOut } from "next-auth/react"

function Virtual() {
    const router = useRouter();
    const { data: session } = useSession();

    if(session) {
        return (
            <div className='h-full bg-white sm:h-full'>
                <header className='bg-blue-700'>
                    <Link href="/dash" passHref>
                        <Image src="/logo.svg" className="logo" height={50} width={50} alt="Boost Perú" />
                    </Link>
                    <div className='absolute right-12 mt-0 text-white'>{session.user.name}</div>
                    <Image src="/ico/user.png" height={25} width={25} alt="boost-user-ico" className='invert'></Image>
                </header>
                <div className='relative block lg:pt-24 pt-36 lg:w-2/4 mx-auto'>
                    <div className='text-left font-regular text-lg rounded-md bg-blue-700 p-2 text-white'>
                        <p><Image src="/ico/config.svg" height={18} width={18} alt="log-out" className='inline-block mx-auto mr-2 mb-1 invert'></Image>Tienda virtual</p>
                    </div>
                    <div className='mt-2'>
                        <form className='form'>                            
                            <button>Ver todos los ítems</button>
                            <input type="file"></input>
                            <input placeholder="Título"></input>
                            <input placeholder="Descripción"></input>
                            <input placeholder="Precio"></input>
                            <hr></hr>
                            <button>+ Agregar nuevo ítem</button>
                            <button>Guardar</button>
                        </form>
                    </div>
                </div>
                <div className='absolute right-2 bottom-2 mt-2 text-right'>
                        <button onClick={signOut} className='border-2 border-gray-100 p-3 rounded-md hover:bg-cyan-500 hover:border-black hover:text-white hover:invert'>
                            <Image src="/ico/power.svg" height={20} width={20} alt="log-out"></Image>
                        </button>
                    </div>
            </div>
        )
    }
    return <>
        <div className='login'>
            <Link href="/" passHref>
                <Image src="/logo.svg" className="block bg-transparent mx-auto justify-center items-center z-100 invert" height={45} width={45} alt="Boost Perú" />
            </Link> 
            <br/>
            <button onClick={() => signIn()} className='font-bold text-white rounded-md border-2 border-white p-3  hover:bg-white hover:text-black'>Iniciar Sesión</button>
        </div>
    </>
}
  
  export default Virtual;