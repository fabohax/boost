import nodemailer from "nodemailer";

const supportHandler = async (req, res) => {
  const { device, support, brand, description, name, email, phone } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const htmlMail= `
    <div style="border: 1px solid #f0f0f0; border-radius: 10px; padding: 3em; margin: 0 auto;">
      <h2 style="color:#00f;font-weight: bold;">${name} envió una solicitud de Soporte Técnico:</h2>
      <table style="font-size: 16px; width: 100%;">
        <tr>
          <td style="width: 50%;"><strong>Dispositivo:</strong></td>
          <td>${device}</td>
        </tr>
        <tr>
          <td style="width: 50%;"><strong>Tipo de soporte:</strong></td>
          <td>${
            support === "configuracion" ? "Configuración Inicial":
            support === "conexion" ? "Conexión Inalámbrica":
            support === "actualizacion" ? "Actualización":
            support === "rendimiento" ? "Rendimiento":
            support === "instalacion" ? "Instalación":
            support === "recuperacion" ? "Recuperación":
            support === "reparacion" ? "Reparación":
            support === "asistencia" ? "Asistencia de uso":
            support === "indefinido" ? "Indefinido":
            support          
          }</td>
        </tr>
        <tr>
        <td style="width: 50%;"><strong>Marca:</strong></td>
        <td>${
          brand === "apple" ? "Apple":
          brand === "samsung" ? "Samsung":
          brand === "other" ? "Other":
          brand
        }</td>
      </tr>
        <tr>
          <td style="width: 50%;"><strong>Descripción:</strong></td>
          <td>${description}</td>
        </tr>
        <tr>
        <td style="width: 50%;"><strong>Nombre:</strong></td>
        <td>${name}</td>
        </tr>
        <tr>
          <td style="width: 50%;"><strong>Correo:</strong></td>
          <td>${email}</td>
        </tr>
        <tr>
          <td style="width: 50%;"><strong>Teléfono:</strong></td>
          <td>${phone}</td>
        </tr>
      </table>
      <hr>
      <p><strong><a href="https://boostperu.com.pe" style="text-decoration:none">BOOST PERÚ</a></strong></p>
    </div>
  `; 

  const submitTimestamp = Date.now();

  const date = new Date(submitTimestamp);
  const year = String(date.getFullYear()).slice(-2);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  const formattedDate = `#${year}${month}${day}${hours}${minutes}${seconds}`;

  const mailOptions = {
    from: "BOOSTPE fabohax@gmail.com",
    to: [
      'atencionalcliente@boostperu.com.pe',
      'luislopezarevalo',
      'fabohax@gmail.com',
      email
    ],
    subject: `${formattedDate} Nueva orden de Soporte Técnico / ${name}`,
    html: htmlMail
  };


  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({message:`${name}, tu mensaje se envió correctamente.`});
    res.redirect('/enviado');
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
};  


export default supportHandler;
