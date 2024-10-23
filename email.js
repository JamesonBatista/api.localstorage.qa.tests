import nodemailer from "nodemailer";

function enviarEmail(destinatario, assunto, corpo) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true para 465, false para outras portas
    auth: {
      user: "projetoqaswagger@gmail.com", // Substitua pelo seu e-mail
      pass: "ihkq entb uwns hnyc", // Substitua pela sua senha
    },
  });

  // Configuração do e-mail a ser enviado
  const mailOptions = {
    from: "projetoqaswagger@gmail.com", // Substitua pelo e-mail do remetente
    to: destinatario, // Substitua pelo e-mail do destinatário
    subject: assunto,
    html: corpo, // ou html: '<p>Seu HTML aqui</p>'
  };

  // Enviar o e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Erro ao enviar e-mail:", error);
    } 	
  });
}

export default enviarEmail;
