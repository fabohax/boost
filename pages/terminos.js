import {useRouter} from 'next/router';
import Header from './header';
import Footer from './footer';
import React from 'react';

const TermsOfServicePage = () => {
  return (
    <div>
      <Header showCartIcon={true} blue={true}/>
      <div className='default'>
        <h1 className='text-3xl font-bold mb-6 mt-24'>Términos de Servicio</h1>
        <h2 className='text-2xl font-semibold mb-4'>Boost Perú</h2>

        <p className='mb-4'>
          Bienvenido al sitio web de BOOST PERÚ. Antes de utilizar nuestros servicios, te pedimos que leas detenidamente los siguientes términos de uso. Estos términos rigen el uso de nuestro sitio web y todos los servicios ofrecidos en él. Al acceder o utilizar nuestro sitio web, aceptas cumplir con estos términos en su totalidad. Si no estás de acuerdo con alguno de estos términos, te pedimos que no utilices nuestro sitio web.
        </p>

        <div className='mb-8'>
          <h3 className='text-xl font-semibold mb-2'>1. Uso del sitio web</h3>
          <ul className='list-disc list-inside'>
            <li className='mb-2'>1.1. El sitio web &quot;boostperu.com.pe&quot; está destinado únicamente para uso personal y no comercial. No podrás utilizar este sitio web para ningún propósito ilegal o no autorizado.</li>
            <li className='mb-2'>1.2. No está permitido acceder, alterar o dañar áreas no públicas del sitio web &quot;boostperu.com.pe&quot;, su infraestructura o sistemas relacionados.</li>
            <li>No podrás utilizar el sitio web &quot;boostperu.com.pe&quot; para enviar spam, correo no deseado o cualquier tipo de comunicación no solicitada.</li>
          </ul>
        </div>

        <div className='mb-8'>
          <h3 className='text-xl font-semibold mb-2'>2. Contenido del sitio web</h3>
          <ul className='list-disc list-inside'>
            <li className='mb-2'>2.1. Todo el contenido presente en el sitio web &quot;boostperu.com.pe&quot;, incluyendo textos, imágenes, videos, logotipos, gráficos y software, está protegido por derechos de autor y otros derechos de propiedad intelectual. No podrás copiar, distribuir, modificar, transmitir o utilizar dicho contenido sin permiso expreso por escrito.</li>
            <li>&quot;boostperu.com.pe&quot; se reserva el derecho de modificar o eliminar cualquier contenido del sitio web sin previo aviso.</li>
          </ul>
        </div>

        <div className='mb-8'>
          <h3 className='text-xl font-semibold mb-2'>3. Tienda virtual</h3>
          <ul className='list-disc list-inside'>
            <li className='mb-2'>3.1. La tienda virtual de &quot;boostperu.com.pe&quot; está destinada a la venta de productos y servicios. Toda la información proporcionada en la tienda, incluyendo precios, descripciones y disponibilidad, está sujeta a cambios sin previo aviso.</li>
            <li className='mb-2'>3.2. Al realizar una compra a través de nuestra tienda virtual, aceptas proporcionar información precisa y completa, incluyendo datos de contacto y dirección de envío.</li>
            <li>&quot;boostperu.com.pe&quot; se reserva el derecho de rechazar o cancelar cualquier pedido en caso de sospecha de fraude, error en la información proporcionada o cualquier otra razón justificada.</li>
          </ul>
        </div>

        <div className='mb-8'>
          <h3 className='text-xl font-semibold mb-2'>4. Formularios de soporte técnico y otros servicios</h3>
          <ul className='list-disc list-inside'>
            <li className='mb-2'>4.1. &quot;boostperu.com.pe&quot; brinda formularios para la atención de soporte técnico y otros servicios. Al utilizar estos formularios, aceptas proporcionar información precisa y completa.</li>
            <li>La atención a los formularios de soporte técnico y otros servicios se realizará según los términos y condiciones específicos establecidos por &quot;boostperu.com.pe&quot;.</li>
          </ul>
        </div>

        <div className='mb-8'>
          <h3 className='text-xl font-semibold mb-2'>5. Privacidad y protección de datos</h3>
          <ul className='list-disc list-inside'>
            <li className='mb-2'>5.1. La privacidad y la protección de datos son de suma importancia para &quot;boostperu.com.pe&quot;. Al utilizar nuestro sitio web, aceptas nuestra política de privacidad y el tratamiento de tus datos personales de acuerdo con la misma.</li>
            <li>&quot;boostperu.com.pe&quot; se compromete a proteger tus datos personales y a utilizarlos únicamente con fines específicos y legítimos.</li>
          </ul>
        </div>

        <div className='mb-8'>
          <h3 className='text-xl font-semibold mb-2'>6. Limitación de responsabilidad</h3>
          <ul className='list-disc list-inside'>
            <li className='mb-2'>6.1. El uso del sitio web &quot;boostperu.com.pe&quot; es bajo tu propio riesgo. No nos hacemos responsables de cualquier daño directo, indirecto, incidental, especial o consecuente que pueda surgir del uso o la incapacidad de uso de nuestro sitio web.</li>
            <li>&quot;boostperu.com.pe&quot; no garantiza la disponibilidad ininterrumpida y libre de errores del sitio web, ni la corrección, confiabilidad o actualidad de su contenido.</li>
          </ul>
        </div>

        <div className='mb-8'>
          <h3 className='text-xl font-semibold mb-2'>7. Enlaces a terceros</h3>
          <ul className='list-disc list-inside'>
            <li className='mb-2'>7.1. Nuestro sitio web puede contener enlaces a sitios web de terceros. Estos enlaces son proporcionados únicamente para tu conveniencia. &quot;boostperu.com.pe&quot; no tiene control sobre el contenido o las políticas de privacidad de estos sitios web de terceros, por lo que no nos hacemos responsables de ellos.</li>
          </ul>
        </div>

        <p className='mb-24'>
          Estos términos de uso son aplicables al sitio web &quot;boostperu.com.pe&quot; y podrán ser modificados o actualizados en cualquier momento. Te recomendamos revisar periódicamente esta página para estar al tanto de los cambios. Si continúas utilizando nuestro sitio web después de la publicación de cambios en estos términos, se considerará como tu aceptación de dichos cambios.
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default TermsOfServicePage;
