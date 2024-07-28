import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from './header';
import Footer from './footer';
import axios from 'axios';
import Socials from './socials';

const SoportePage = () => {

  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [Loading, setLoading] = useState({});
  

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: fieldValue
    }));
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    setFormData((prevState) => ({
      ...prevState,
      image: formData, // Almacena el objeto FormData en lugar del archivo directamente
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await axios.post('/api/support', formData);
      if (response.status === 200) {
        setLoading(false);
        // Redireccionar a la página de éxito o mostrar un mensaje de éxito
        router.push('/success');
      } else {
        setLoading(false);
        // Mostrar un mensaje de error si la respuesta no es exitosa
        alert('Error al enviar el formulario');
      }
    } catch (error) {
      setLoading(false);
      // Mostrar un mensaje de error si hay un error en la solicitud
      alert('Catched Error al enviar el formulario');
      console.error(error);
    }
  };
  

  return (
    <div>
      <Head>
        <title>Soporte Técnico | BOOST</title>
      </Head>
      <Header showCartIcon={true} blue={true}/>
      <div className="default">
        <h1>📝 Completa este formulario para recibir atención de nuestro equipo técnico:</h1>
        <form onSubmit={handleSubmit} action="/api/support" method="POST" encType="multipart/form-data">
          <div className='form'>
            <select name="device" onChange={handleInputChange}>
              <option value="">Tipo de dispositivo</option>
              <option value="Auricular">Auricular</option>
              <option value="Celular">Celular</option>
              <option value="Tablet">Tablet</option>
              <option value="Laptop">Laptop</option>
            </select>
            <select name="brand" onChange={handleInputChange}>
              <option value="">Marca</option>
              <option value="apple">Apple</option>
              <option value="samsung">Samsung</option>
              <option value="huawei">Huawei</option>
              <option value="xiaomi">Xiaomi</option>
              <option value="sony">Sony</option>
              <option value="lg">LG</option>
              <option value="hp">HP</option>
              <option value="dell">Dell</option>
              <option value="lenovo">Lenovo</option>
              <option value="asus">ASUS</option>
              <option value="acer">Acer</option>
              <option value="google">Google</option>
              <option value="microsoft">Microsoft</option>
              <option value="oppo">OPPO</option>
              <option value="vivo">Vivo</option>
              <option value="oneplus">OnePlus</option>
              <option value="motorola">Motorola</option>
              <option value="nokia">Nokia</option>
              <option value="htc">HTC</option>
              <option value="blackberry">BlackBerry</option>
              <option value="other">Otro</option>
            </select>
            <select name="support" onChange={handleInputChange}>
              <option value="">Tipo de soporte técnico</option>
              <option value="configuracion">Configuración inicial</option>
              <option value="conexion">Conexión inalámbrica: Internet, Bluetooth, Sincronización</option>
              <option value="actualizacion">Actualización y mantenimiento: Limpieza de archivos, Optimización</option>
              <option value="rendimiento">Rendimiento: Lentitud, Congelamiento, Reinicios inesperados, Duración de batería</option>
              <option value="instalacion">Instalación de aplicaciones</option>
              <option value="recuperacion">Recuperación de datos</option>
              <option value="reparacion">Reparación de parte: Pantalla, Audio, Batería</option>
              <option value="asistencia">Asistencia de uso</option>
              <option value="indefinido">Indefinido</option>
            </select>
            <textarea name="description" placeholder="Cuéntanos qué servicio necesitas"></textarea>
            <input name="name" type="text" placeholder="Tu nombre" required autocomplete="off"></input>
            <input name="email" type="email" placeholder="Tu correo electrónico" required autocomplete="off"></input>
            <input name="phone" type="number" placeholder="Tu número telefónico" required ></input>
            <button type="submit">Enviar pedido</button>
            <p className='text-sm font-bold gray'>Al enviar, aceptas nuestros <Link href="/terminos">Términos de Servicio</Link> y <Link href="/privacidad">Política de Privacidad.</Link> </p>
          </div>
        </form>
        <div>
          <strong>También puees contactarnos en cualquiera de nuestras redes sociales:</strong>
          <Socials/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SoportePage;
