import nodemailer from "nodemailer";

const complaintHandler = async (req, res) => {
  const { store, primerNombre, segundoNombre, apellidoPaterno, apellidoMaterno, email, documentType, id, region, provincia, answerType, direccion, referenciaDireccion, phoneNumber, nroOrden, descripcionBien, tipoReclamo, motivo, detalle, pedido, menorEdad } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const htmlMail = `
  <div style="border: 1px solid #f0f0f0; border-radius: 10px; padding: 3em; margin: 0 auto;">
    <h2 style="color:#00f;font-weight: bold;">Registro generado en el Libro de Reclamaciones:</h2>
    <table style="font-size: 16px; width: 100%;">
      <tr>
        <td style="width: 50%;"><strong>Tienda:</strong></td>
        <td>${store === "SanMiguel" ? "San Miguel" : store}</td>

      </tr>
      <tr>
        <td style="width: 50%;"><strong>Primer Nombre:</strong></td>
        <td>${primerNombre}</td>
      </tr>
      <tr>
        <td style="width: 50%;"><strong>Segundo Nombre:</strong></td>
        <td>${segundoNombre}</td>
      </tr>
      <tr>
        <td style="width: 50%;"><strong>Apellido Paterno:</strong></td>
        <td>${apellidoPaterno}</td>
      </tr>
      <tr>
        <td style="width: 50%;"><strong>Apellido Materno:</strong></td>
        <td>${apellidoMaterno}</td>
      </tr>
      <tr>
        <td style="width: 50%;"><strong>Email:</strong></td>
        <td>${email}</td>
      </tr>
      <tr>
        <td style="width: 50%;"><strong>Tipo de Documento:</strong></td>
        <td>${documentType}</td>
      </tr>
      <tr>
        <td style="width: 50%;"><strong>ID:</strong></td>
        <td>${id}</td>
      </tr>
      <tr>
        <td style="width: 50%;"><strong>Región:</strong></td>
        <td>${region}</td>
      </tr>
      <tr>
        <td style="width: 50%;"><strong>Provincia:</strong></td>
        <td>${provincia}</td>
      </tr>
      <tr>
        <td style="width: 50%;"><strong>Tipo de respuesta:</strong></td>
        <td>${answerType === "answerToAddress" ? "Domiciliaria" : answerType === "answerToMail" ? "Electrónica" : answerType}</td>
      </tr>
      <tr>
        <td style="width: 50%;"><strong>Dirección:</strong></td>
        <td>${direccion === undefined ? "Sin especificar" : direccion}</td>
      </tr>  
      <tr>
        <td style="width: 50%;"><strong>Referencia de Dirección:</strong></td>
        <td>${referenciaDireccion === undefined ? "Sin especificar" : referenciaDireccion}</td>
      </tr>
      <tr>
        <td style="width: 50%;"><strong>Teléfono:</strong></td>
        <td>${phoneNumber}</td>
      </tr>
      <tr>
        <td style="width: 50%;"><strong>Número de Orden:</strong></td>
        <td>${nroOrden}</td>
      </tr>
      <tr>
        <td style="width: 50%;"><strong>Descripción del Bien:</strong></td>
        <td>${descripcionBien}</td>
      </tr>
      <tr>
        <td style="width: 50%;"><strong>Tipo de Reclamo:</strong></td>
        <td>${tipoReclamo}</td>
      </tr>
      <tr>
        <td style="width: 50%;"><strong>Motivo:</strong></td>
        <td>
          ${
            motivo === "Cancelacion" ? "Cancelación" :
            motivo === "Garantia" ? "Garantía" : 
            motivo === "MediosDePago" ? "Medios de Pago" : 
            motivo === "ProductoServicio" ? "Producto - Servicio" : 
            motivo === "PublicidadOfertas" ? "Publicidad y Ofertas" : 
            motivo
          }
        </td>
      </tr>
      <tr>
        <td style="width: 50%;"><strong>Detalle:</strong></td>
        <td>${detalle}</td>
      </tr>
      <tr>
        <td style="width: 50%;"><strong>Pedido:</strong></td>
        <td>${pedido}</td>
      </tr>
      <tr>
        <td style="width: 50%;"><strong>Menor de Edad:</strong></td>
        <td>${menorEdad ? "Sí" : "No"}</td>
      </tr>
    </table>
    <hr>
    <p><strong>BOOST PERÚ</strong></p>
  </div>
`;


  const mailOptions = {
    from: "BOOSTPE fabohax@gmail.com",
    to: [
      'luislopez@boostperu.com.pe',
      'atencionalcliente@boostperu.com.pe',
      'fabohax@gmail.com',
      email
    ],
    subject: `${primerNombre} ${apellidoPaterno} escribió en el Libro de Reclamaciones`,
    html: htmlMail,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({message:`${primerNombre}, tu mensaje se envió correctamente. Te responderemos a ${email} en lo pronto posible.`});
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
};

export default complaintHandler;
