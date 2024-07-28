import React from 'react';

function Suscribe(props) {
    return (
        <div>
            <form action="/api/suscribe" method="POST" className="suscribeForm w-full">
                <input
                type="email"
                name="email"
                placeholder="░ Suscríbete con tu correo aquí!"
                className="block border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500 mt-18 mx-auto"
                autoComplete='off'
                />
            </form>
        </div>
    );
}

export default Suscribe;