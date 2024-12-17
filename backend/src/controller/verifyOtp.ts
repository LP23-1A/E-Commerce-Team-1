import { Request, Response } from "express";
import { userModal } from "../model/user";

export const verifyOtpPassword = async (req: Request, res: Response) => {
  try {
    const { email, otpCode } = req.body;

    const user = await userModal.find({ email }).populate("OTP");

    console.log("this is user:", user)

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "OTP code is not valid." });
    }

    return res
      .status(200)
      .json({ success: true, message: "Successful OTP verification." });


  } catch (error) {
    console.error("Error during verifying OTP code:", error);
    return res
      .status(500)
      .json({
        success: false,
        message: "Failed to verify OTP. Please try again later.",
      });
  }
};
