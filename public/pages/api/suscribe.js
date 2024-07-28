import nodemailer from "nodemailer";

const subscribeHandler = async (req, res) => {
  const { email } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const companyNotificationOptions = {
    from: "BOOSTPE fabohax@gmail.com",
    to: [
      'luislopez@boostperu.com.pe',
      'atencionalcliente@boostperu.com.pe',
      'fabohax@gmail.com'
    ],
    subject: `✉️ Nueva suscripción de ${email}`,
    html: `
      <div style="border: 1px solid #f0f0f0; border-radius: 10px; padding: 3em; margin: 0 auto;">
        <h2 style="font-weight: bold;color:#00f">Nueva suscripción</h2>
        <div style="font-size: 16px;">
          <p>Se ha suscrito un nuevo usuario con el siguiente correo electrónico:</p>
          <p>${email}</p>
        </div>
      </div>
    `
  };

  const userConfirmationOptions = {
    from: "BOOSTPE fabohax@gmail.com",
    to: email,
    subject: "✅ Confirmación de suscripción a Boost Perú",
    html: `
      <div style="border: 1px solid #f0f0f0; border-radius: 10px; padding: 3em; margin: 0 auto;">
        <h2 style="font-weight: bold;color:#00f">Confirmación de suscripción</h2>
        <div style="font-size: 16px;">
          <p>¡Gracias por suscribirte a nuestro boletín informativo!</p>
          <p>A partir de ahora recibirás actualizaciones, ofertas y promociones directamente en tu bandeja de entrada.</p>
        </div>
      </div>
    `
  };

  try {
    await Promise.all([
      transporter.sendMail(companyNotificationOptions),
      transporter.sendMail(userConfirmationOptions)
    ]);
    res.redirect(302, '/');
    res.status(200).json({ message: "Suscripción exitosa" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Error al enviar el correo electrónico" });
  }
};

export default subscribeHandler;
