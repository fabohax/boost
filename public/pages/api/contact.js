import nodemailer from "nodemailer";

const contactHandler = async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "BOOSTPE fabohax@gmail.com",
    to: [
      'luislopez@boostperu.com.pe',
      'atencionalcliente@boostperu.com.pe',
      email
    ],
    subject: `${name} envió un mensaje`,
    html: `
      <div style="border: 1px solid #f0f0f0; border-radius: 10px; padding: 3em; margin: 0 auto;">
        <h2 style="font-weight: bold;color:#00f">${name}:</h2>
        <div style="font-size: 16px;">
          <p>${message}</p>
        </div>
      </div>
    `
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


export default contactHandler;