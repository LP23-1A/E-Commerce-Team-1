import { Request, Response } from "express";
import otpGenerator from "otp-generator";
import nodemailer from "nodemailer";

export const sendOTP = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    console.log(email, "this is email")

    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email is required" });
    }

    const otp = otpGenerator.generate(6, {
      specialChars: false,
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
    });

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: "uulaaka73@gmail.com", 
        pass: "utrhxcutldbgdjuk",   
      },
    });

    const mailOptions = {
      from: "uulaaka73@gmail.com",
      to: email,
      subject: "Your One Time Passcode",
      text: `Your one time passcode is: ${otp}`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "One time passcode has been sent successfully",
    });
  } catch (error) {
    console.error("Error occurred while sending OTP:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send OTP. Please try again later.",
    });
  }
};
