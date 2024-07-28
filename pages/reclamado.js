/*reclamado.js*/
import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import Link from 'next/link';

const ReclamadoPage = () => {
    return (
        <div>
            <Head>
            <title>Libro de Reclamaciones| BOOST</title>
            </Head>
            <Header showCartIcon={true} blue={true}/>
            <div className="default">
                <h1>📝</h1>
                <h1 className="blue">Gracias por enviar sus datos al <strong>Libro de Reclamaciones</strong>.</h1>
                <br></br>
                <p>Nos comprometemos a responder a su consulta en <strong>el menor tiempo posible</strong>, y como máximo en un plazo de <strong>15 días laborables</strong>.</p>
                <br></br>
                <p><b>Apreciamos su experiencia con nosotros y nos esforzamos por proporcionar una respuesta inmediata.</b></p>
            </div>
            <Footer/>
        </div>
    )
}

export default ReclamadoPage;