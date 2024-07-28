import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './header';
import Footer from './footer';
import Regiones from '../db/regiones.json';
import Provincia from '../db/provincias.json';

const ReclamacionesPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const regiones = Regiones.Region;

  useEffect(() => {
    fetch(Regiones.url)
      .then(response => response.json())
      .then(data => {
        provinciasPorRegion.current = data;
      })
      .catch(error => {
        console.error('Error fetching region data:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: fieldValue
    }));
  };  

  const getProvinciasByRegion = (selectedRegion) => {
    if (selectedRegion) {
      return Provincia[selectedRegion] || [];
    }
    return [];
  };

  return (
      <div>
        <Head>
          <title>Libro de Reclamaciones | BOOST</title>
        </Head>
        <Header showCartIcon={true} blue={true}/>
        <div className="default">
          <h1>📕</h1>
          <h1>Libro de Reclamaciones</h1>
          <br />
          <p>Datos de la persona que presenta el reclamo:</p>
          <form action="/api/complaint" method="post">
            <div className="form">
              <select id="store" name="store" value={formData.store} onChange={handleInputChange}>
                <option value="">¿Dónde te atendieron?</option>
                <option value="Miraflores">Tienda Miraflores</option>
                <option value="SanMiguel">Tienda San Miguel</option>
                <option value="Independencia">Tienda Independencia</option>
                <option value="Surco">Tienda Surco</option>
                <option value="Ica">Tienda Ica</option>
                <option value="Virtual">Tienda Virtual</option>
              </select>
              <input id="email" type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleInputChange} required />
              <input id="primerNombre" type="text" name="primerNombre" placeholder="Primer Nombre" value={formData.primerNombre} onChange={handleInputChange} required />
              <input id="segundoNombre" type="text" name="segundoNombre" placeholder="Segundo Nombre" value={formData.segundoNombre} onChange={handleInputChange} required />
              <input id="apellidoPaterno" type="text" name="apellidoPaterno" placeholder="Apellido Paterno" value={formData.apellidoPaterno} onChange={handleInputChange} required />
              <input id="apellidoMaterno" type="text" name="apellidoMaterno" placeholder="Apellido Materno" value={formData.apellidoMaterno} onChange={handleInputChange} required />
              <select id="documentType" name="documentType" value={formData.documentType} onChange={handleInputChange}>
                  <option value="">Tipo de documento</option>
                  <option value="DNI">DNI</option>
                  <option value="CE">C.E.</option>
                </select>
                <input id="id" type="number" name="id" placeholder="Número de Documento" value={formData.id} onChange={handleInputChange} required />
              <select
                id="region"
                name="region"
                value={formData.region}
                onChange={(e) => {
                  const selectedRegion = e.target.value;
                  setFormData((prevState) => ({
                    ...prevState,
                    region: selectedRegion,
                    provincia: '', // Reset provincia value when region changes
                  }));
                }}
              >
                <option value="">Selecciona una región</option>
                {regiones &&
                  regiones.map((region, index) => (
                    <option key={index} value={region}>
                      {region}
                    </option>
                  ))}
              </select>
              {formData.region && (
                <select
                  id="provincia"
                  name="provincia"
                  value={formData.provincia}
                  onChange={handleInputChange}
                >
                  <option value="">Selecciona una provincia</option>
                  {getProvinciasByRegion(formData.region).map((provincia, index) => (
                    <option key={index} value={provincia}>
                      {provincia}
                    </option>
                  ))}
                </select>
              )}
              <select id="answerType" name="answerType" value={formData.answerType} onChange={handleInputChange}>
                <option value="">¿Por cuál vía solicitas respuesta?</option>
                <option value="answerToMail">Correo Electrónico</option>
                <option value="answerToAddress">Dirección Domiciliaria</option>
              </select>
              {formData.answerType === "answerToAddress" && (
                <div>
                  <input id="direccion" type="text" name="direccion" placeholder="Dirección Domiciliaria" value={formData.direccion} onChange={handleInputChange} required />
                  <input id="referenciaDireccion" type="text" name="referenciaDireccion" placeholder="Referencia" value={formData.referenciaDireccion} onChange={handleInputChange} required />
                </div>
              )}
              <input id="phoneNumber" type="number" name="phoneNumber" placeholder="Teléfono" value={formData.phoneNumber} onChange={handleInputChange} required />
              <input id="nroOrden" type="number" name="nroOrden" placeholder="Orden de compra" value={formData.nroOrden} onChange={handleInputChange} />
              <p>Identificación del bien contratado</p>
              <input type="radio" id="producto" name="descripcionBien" value="Producto" onChange={handleInputChange} className="input-radio"/>
              <label htmlFor="producto">Producto</label>
              <input type="radio" id="servicio" name="descripcionBien" value="Servicio" onChange={handleInputChange} className="input-radio"/>
              <label htmlFor="servicio">Servicio</label>
              <input type="text" name="descripcionBien" placeholder="Nombre del Producto o Servicio" onChange={handleInputChange} />
              <h1>Detalle de su reclamo</h1>
              <p>Tipo</p>
              <input type="radio" id="reclamo" name="tipoReclamo" value="Reclamo" onChange={handleInputChange} className="input-radio" checked={formData.tipoReclamo === 'Reclamo'}/>
              <label htmlFor="reclamo">Reclamo</label>
              <input type="radio" id="queja" name="tipoReclamo" value="Queja" onChange={handleInputChange} className="input-radio" checked={formData.tipoReclamo === 'Queja'}/>
              <label htmlFor="queja">Queja</label>
              <p>Motivo</p>
              <select id="motivo" name="motivo" value={formData.motivo} onChange={handleInputChange}>
                <option value="">Seleccionar</option>
                <option value="Cambios">CAMBIOS</option>
                <option value="Cancelacion">CANCELACIÓN</option>
                <option value="Cobros">COBROS - FACTURACIÓN</option>
                <option value="Colaboradores">COLABORADORES</option>
                <option value="Cuenta">CUENTA</option>
                <option value="Devoluciones">DEVOLUCIONES</option>
                <option value="Entrega">ENTREGA</option>
                <option value="Garantia">GARANTÍA</option>
                <option value="MediosDePago">MEDIOS DE PAGO</option>
                <option value="ProductoServicio">PRODUCTO - SERVICIO</option>
                <option value="PublicidadOfertas">PUBLICIDAD Y OFERTAS</option>
                <option value="Reembolso">REEMBOLSO</option>
                <option value="Sitio">SITIO</option>
                <option value="Tienda">TIENDA</option>
              </select>
              <textarea id="detalle" name="detalle" rows="4" cols="25" placeholder="Detalle de su reclamo o sugerencia aquí" value={formData.detalle} onChange={handleInputChange} />
              <textarea id="pedido" name="pedido" rows="1" cols="1" placeholder="Su pedido aquí" value={formData.pedido} onChange={handleInputChange} />
              <input type="checkbox" name="menorEdad" value="menorDeEdad" className="checkbox"/><label>Menor de edad</label>
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
  );
}

export default ReclamacionesPage;
