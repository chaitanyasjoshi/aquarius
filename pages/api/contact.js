import nodemailer from 'nodemailer';
import 'dotenv/config';

export default (req, res) => {
  const { name, email, contactno, company, city, country, message } = req.body;

  const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mail = {
    from: name,
    to: process.env.EMAIL,
    subject: 'Enquiry',
    text: `Name: ${name}
          Email: ${email}
          Contact No.: ${contactno}
          Company Name: ${company}
          City: ${city}
          Country: ${country}
          Message: ${message}`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: 'ERROR', message: error });
      console.log(error);
    } else {
      res.json({ status: 'Message Sent' });
    }
  });
};
