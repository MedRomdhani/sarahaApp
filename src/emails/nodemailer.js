import nodemailer from 'nodemailer'

export const emailSender = async () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mohamed.rom86@gmail.com",
      pass: "wxeogekswrrqhchm",
    },
  
  });
  const info = await transporter.sendMail({
    from: '"Mohamed romdhani" <mohamed.rom86@gmail.com>', // sender address
    to: "mohamed.rom86@outlook.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Mohamed romdhani\'s sara7aApp 👻 test nodemailer", // plain text body
    html: "<h1>Hello world?</h1>", // html body
  });

  
  console.log("Message sent: %s", info.messageId);
}
