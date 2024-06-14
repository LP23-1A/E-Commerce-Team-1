import { Request, Response } from "express";
import otpGenerator from "otp-generator";
import { OtpModel } from "../model/otpModel";

export const sendOTP = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    
    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    let result = await OtpModel.findOne({ otp: otp });
    while (result) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
      result = await OtpModel.findOne({ otp: otp });
    }

    const otpPayload = { email, otp };
    await OtpModel.create(otpPayload);

    res.status(200).json({
      success: true,
      message: "OTP sent successfully",
      otp,
    });
  } catch (error: unknown | any) {
    console.error("failed to send otp password", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
