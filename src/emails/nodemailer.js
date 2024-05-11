import nodemailer from 'nodemailer'
import { htmlCode } from './html.js';

export const emailSender = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mohamed.rom86@gmail.com",
      pass: "wxeogekswrrqhchm",
    },
  
  });
  const info = await transporter.sendMail({
    from: '"Mohamed romdhani" <mohamed.rom86@gmail.com>', // sender address
    to: options.email, // list of receivers
    subject: "Email verification ✔", // Subject line
    text: "Mohamed romdhani\'s sara7aApp 👻 test nodemailer", // plain text body
    html: htmlCode(`http://localhost:3000/verify/${options.email}`), // html body
  });

  
  console.log("Message sent: %s", info.messageId);
}

