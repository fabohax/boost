/*footer.js*/
import Link from 'next/link';
import Image from 'next/image';
import LanguageDropdown from '../comps/language';
import DM from '../comps/dm';
import Suscribe from '../comps/suscribe';

const Footer = () => {
    return (
        <footer className="footer">
          <div className="footer-grid">
            <div className="footer-item">
            <Link href="/" passHref>
              <Image src="/logo.svg" className="logo invert" height={50} width={50} alt="BOOST logo"/>
            </Link>
            </div>
            <div className="footer-item">
              <Link href="/tienda" passHref>
                Tienda
              </Link>
            </div>
            <div className="footer-item">
              <Link href="/reclamaciones" passHref>
                Reclamaciones
              </Link>
            </div>
            <div className="footer-item">
              <Link href="/contacto" passHref>
                Contacto
              </Link>
            </div>
            <div className="footer-item">
              <Link href="/somos" passHref>
                Somos
              </Link>
            </div>
            <div className="footer-item">
              <Link href="/privacidad" passHref>
                Privacidad
              </Link>
            </div>
            <div className="footer-item">
              <Link href="/terminos" passHref>
                Términos
              </Link>
            </div>
            <div className="footer-item">
                
            </div>
          </div>
          <Suscribe/>
          <DM/>
        </footer>
    );
}

export default Footer;