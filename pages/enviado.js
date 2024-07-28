/*reclamado.js*/
import Head from 'next/head';
import Header from './header';
import Footer from './footer';

const ReclamadoPage = () => {
    return (
        <div>
            <Head>
            <title>Libro de Reclamaciones| BOOST</title>
            </Head>
            <Header showCartIcon={true}/>
            <main className="default">
                <h1>📝</h1>
                <p className="blue">Tu mensaje se envió correctamente</p>
                <br></br>
                <p>Nos comprometemos a responder a su consulta en <strong>el menor tiempo posible</strong>.</p>
                <br></br>
                <p>Gracias por su preferencia.</p>
            </main>
            <Footer/>
        </div>
    )
}

export default ReclamadoPage;