// contact.js
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from './header';
import Footer from './footer';

const ContactPage = () => {
    return (
        <div>
            <Head>
            <title>SOMOS BOOST PERÚ</title>
            </Head>
            <Header showCartIcon={true} blue={true}/>
            <div className="default">
                <h1>💖 SOMOS BOOST PERÚ </h1>
                <p className='mb-6 text-lg'>
                <Image src="/somos/789897789.jpg" height={500} width={500} alt="somos-boost" className='rounded-img'></Image>
                Con más de <b>10 años de experiencia</b> en la industria tecnológica, somos una cadena destacada como <b>importadores directos de repuestos y accesorios</b>. Nos especializamos en brindar servicios especializados en <b>software y hardware para portátiles y celulares</b>.</p>

                <p className='mb-6 text-lg'>En <b>BOOST PERÚ</b>, comprendemos la importancia de un <b>soporte técnico confiable y eficiente</b>. Nuestro equipo de profesionales capacitados se dedica a ofrecer servicios de <b>primera clase</b> que satisfacen sus necesidades específicas. Ya sea que necesite ayuda con la <b>solución de problemas de software</b>, <b>reparaciones de hardware</b> o <b>actualizaciones de accesorios</b>, estamos aquí para ayudarle.</p>

                <p className='mb-6 text-lg'>Como entusiastas de la tecnología, nos mantenemos constantemente actualizados con los <b>últimos avances de la industria</b> para asegurarnos de ofrecer <b>soluciones de vanguardia</b>. Nuestro compromiso con la excelencia y la satisfacción del cliente nos ha ganado una sólida reputación en el mercado.</p>

                <p className='mb-6 text-lg'><Link href="/contacto"><b>Visítenos en cualquiera de nuestras tiendas</b></Link> convenientemente ubicadas, donde nuestro personal amable y conocedor estará encantado de atenderle. <Link href="/soporte"><b>Experimente nuestro servicio rápido y confiable</b></Link>, ya que nos esforzamos por brindar <b>soluciones inmediatas a sus problemas técnicos</b>.</p>

                <p className='mb-6 text-lg'>Elija <b>BOOST PERÚ</b> para todas sus necesidades de soporte técnico. <b>Garantizamos</b> una experiencia fluida y satisfactoria, ya que trabajamos incansablemente para mantenerlo <b>conectado con el mundo digital</b>.</p>
                <p className='text-[2em]'>✨💻📱🎧</p>
            </div>
            <Footer/>
        </div>
    );
  };
  
  export default ContactPage;
  