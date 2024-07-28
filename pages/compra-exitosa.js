import React from 'react';
import Header from './header';
import Footer from './footer';

function Comprada(props) {
    return (
        <div>
            <div className='default'>
                <Header showCartIcon={true} blue={true}/>
                <div className="mt-24 mb-12 p-5 rounded rounded-md">
                    <h2 className="text-2xl font-bold">🥳 ¡Gracias por tu compra!</h2>
                    <p>Te hemos enviado un correo electrónico con los detalles de tu orden.</p>
                    <p className='mt-3'>¡Mantente atent@!</p>
                    <p className="text-lg font-bold mt-12">¿Deseas suscribirte a ofertas y promociones?</p>
                    <form action="/api/suscribe" method="POST" className="form mt-4">
                        <input
                        type="email"
                        name="email"
                        placeholder="Ingresa tu correo aquí"
                        className="border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
                        />
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Comprada;