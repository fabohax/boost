import Header from './header';
import Footer from './footer.js';
import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div>
      <Header showCartIcon={true} blue={true}/>

        <div className='default'>
        <h1 className="text-3xl font-bold mb-6 mt-24">Política de Privacidad</h1>

        <h2 className="text-2xl font-semibold mb-4">Boost Perú</h2>

        <p className="mb-4">
          En Boost Perú, la privacidad de nuestros visitantes es de suma importancia para nosotros. Esta política de privacidad documenta los tipos de información personal que son recibidos y recopilados por boostperu.com.pe y cómo se utiliza.
        </p>

        <h3 className="text-xl font-semibold mb-2">Información recopilada</h3>
        <p className="mb-4">
          En boostperu.com.pe, podemos recopilar y almacenar información personal que proporciones voluntariamente al interactuar con nuestro sitio web, incluyendo, entre otros, tu nombre, dirección de correo electrónico y detalles de contacto. También podemos recopilar información no personal, como datos demográficos y de uso del sitio.
        </p>

        <h3 className="text-xl font-semibold mb-2">Uso de la información</h3>
        <p className="mb-4">
          Utilizamos la información recopilada para brindar y mejorar nuestros servicios, procesar transacciones de compra en la tienda virtual y responder a consultas y solicitudes de soporte. También podemos utilizar la información para comunicarnos contigo acerca de actualizaciones, promociones u otras noticias relacionadas con boostperu.com.pe.
        </p>

        <h3 className="text-xl font-semibold mb-2">Procesamiento de pagos con Stripe</h3>
        <p className="mb-4">
          Nuestra tienda virtual utiliza el servicio de procesamiento de pagos de Stripe para gestionar transacciones de compra de forma segura. Stripe recopila y procesa información personal y financiera en cumplimiento con sus propias políticas de privacidad y términos de servicio. Te recomendamos revisar la política de privacidad de Stripe para obtener más información sobre cómo manejan tus datos.
        </p>

        <h3 className="text-xl font-semibold mb-2">Cookies</h3>
        <p className="mb-4">
          boostperu.com.pe utiliza cookies para mejorar la experiencia del usuario y analizar el uso del sitio web. Puedes configurar tu navegador para que rechace todas las cookies o te avise cuando se envíen cookies. Sin embargo, ten en cuenta que algunas características y servicios del sitio pueden no funcionar correctamente si deshabilitas las cookies.
        </p>

        <h3 className="text-xl font-semibold mb-2">Enlaces a sitios web de terceros</h3>
        <p className="mb-4">
          Nuestro sitio web puede contener enlaces a sitios web de terceros. Estos enlaces son proporcionados únicamente para tu conveniencia. No tenemos control sobre el contenido o las políticas de privacidad de estos sitios web de terceros, por lo que no nos hacemos responsables de ellos.
        </p>

        <h3 className="text-xl font-semibold mb-2">Cambios en la política de privacidad</h3>
        <p className="mb-4">
          Nos reservamos el derecho de actualizar o modificar esta política de privacidad en cualquier momento. Te recomendamos revisar esta página periódicamente para estar al tanto de cualquier cambio. El uso continuado de boostperu.com.pe después de cualquier modificación en esta política se considerará como tu aceptación de dichos cambios.
        </p>

        <p className="mb-24">
          Si tienes alguna pregunta sobre nuestra política de privacidad, contáctanos a través de los canales de atención al cliente proporcionados en el sitio web.
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default PrivacyPolicyPage;
