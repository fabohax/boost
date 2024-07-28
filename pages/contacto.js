import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from './header';
import Footer from './footer';
import ContactForm from '../comps/contact';
import Map from '../comps/map';
import Socials from './socials';

const ContactPage = () => {
    
  return (
    <div>
      <Head>
        <title>CONTACTO | BOOST</title>
      </Head>
      <Header showCartIcon={true} blue={true}/>
      <div className="default">
        <h1>🤙 Contáctanos</h1>
        <p>
          Para cualquier consulta o pregunta, envíe un correo electrónico a:{' '}
        </p>
        <p>
          <h2>
            <Link href="mailto:atencionalcliente@boostperu.com.pe" passHref>
              atencionalcliente<br className='lg:hidden'></br>@boostperu.com.pe
            </Link>
          </h2>
        </p>
        <br />
        <p>
          <strong>Dirección:</strong>
        </p>
        <p>
          📍 <b>Miraflores:</b>{' '}
          <Link
            href="https://goo.gl/maps/LZNE4ct8Sr6szkTf8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Compu Palace / Tienda 2104 2° Piso
          </Link>
        </p>
        <p>
          📍 <b>Surco:</b>{' '}
          <Link
            href="https://goo.gl/maps/W1b2tyVASiQuLnsj7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Av. Caminos del Inca 257 Centro comercial Caminos del Inca II Tda 252
            2° Piso
          </Link>
        </p>
        <p>
          📍 <b>San Miguel:</b>{' '}
          <Link
            href="https://goo.gl/maps/vEWQxK9yyTwqsYkU7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Av. Prolongación La Mar N° 2275 en el C.C Shopping Center Tda. 145
          </Link>
        </p>
        <p>
          📍 <b>Independencia:</b>{' '}
          <Link
            href="https://goo.gl/maps/6qsBgu7XRVG1NhUt5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Av industrial 3670 C.C. Viera C.C. 1er Piso, Stand L10
          </Link>
        </p>
        <p>
          📍 <b>Ica:</b>{' '}
          <Link
            href="https://goo.gl/maps/kJ7tsuXH68y8QJ3T9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Calle Las Brunias 192 Urb. San Isidro
          </Link>
        </p>
        <br />
        <p>
          <strong>Teléfono:</strong>
        </p>
        <p>📞 <Link href="tel:+5112420325" passHref>
            (+511) 242 0325
          </Link>{' '}
          {' '}

          📱
          <Link href="tel:+51987314401" passHref>
            +51 987 314 401
          </Link>
        </p>
        <br />
        <p>
          <strong>Horario:</strong>
        </p>
        <p>📅 
          Lunes a Sábado de 10:00 AM a 8:00 PM
          <br />
          (Sólo en Independencia es hasta las 7:30 PM)
        </p>
        <br />
        <h1>📧 Envíanos un mensaje</h1>
        <ContactForm />
        <Socials/>
      </div>
      <Map/>
      <Footer />
    </div>
  );
};

export default ContactPage;
