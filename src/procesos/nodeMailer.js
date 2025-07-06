const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();


router.post("/send", async (req, res) => {
  const { name, lname, email, tel, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "matprimas.tocha.loc33@gmail.com",
      pass: "TU_CONTRASEÑA",
    },
  });

  const opcionesMail = {
    from: email,
    to:"matprimas.tocha.loc33@gmail.com",
    subject: `Contacto de ${name} ${lname} Adming`,
    text: `${message}\nTeléfono: ${tel || "no proporcionado"}`,
  };

  try {
    const info = await transporter.sendMail(opcionesMail);
    return res.status(200).json({ success: true, info });
  } catch (error) {
    console.error("Error enviando email:", error);
    return res.status(500).json({ success: false, error });
  }
});

module.exports = router;