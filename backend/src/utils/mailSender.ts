import nodeMailer from "nodemailer";

const mailSender = async (email: any, title: any, body: any) => {
  try {
    let transporter = nodeMailer.createTransport({
      host: "test from e-commerce-team-1",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    let information = await transporter.sendMail({
      from: "test from e-commerce-team-1",
      to: email,
      subject: title,
      html: body,
    });
    console.log("email info:"), information;
  } catch (error) {
    console.error("error at mailsender:", error);
  }
};

export default mailSender;
