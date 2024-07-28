import nodemailer from 'nodemailer';

const sendOrderEmail = async (cartItems, amount, payerName, payerMail) => {
  
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  });  

  const htmlMailToBoost = `
    <div class="border-radius:1em;border:1px solid #f0f0f0, padding:1em;">
      <h2>Detalles de la compra en BOOST</h2>
      <p>Fecha de compra: ${new Date().toLocaleString()}</p>
      <h3>Productos comprados:</h3>
      ${cartItems.length > 0 ? (
        `<ul>${cartItems
          .map(
            (item) =>
              `<li>[1] ${item.title} - ${item.price} PEN - ${item.tag}</li>`
          )
          .join("")}
        </ul>`
      ) : (
        '<p>NO DATA</p>'
      )}
      <h3>Total pagado:</h3>
      <p>${amount} USD</p>
      <p>Revisar la orden en la cuenta de <a href="https://paypal.com">Paypal</a> para más detalle.</p>
      <hr>
      <p><strong><a href="https://boostperu.com.pe" style="text-decoration:none">BOOST PERÚ</a></strong></p>
    </div>
  `;

  const mailToBoostOptions = {
    from: 'BOOSTPE <fabohax@gmail.com>',
    to: ['tucuxikay@gmail.com'],
    subject: '🌟 ¡Nueva compra en Boost Perú!',
    html: htmlMailToBoost,
  };

  try {
    await transporter.sendMail(mailToBoostOptions);
    console.log(`Correo enviado exitosamente`);
  } catch (error) {
    console.error("Error al enviar el correo:", error);
  }
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { cartItems, amount } = req.body;
    try {
      await sendOrderEmail(cartItems, amount);
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}
