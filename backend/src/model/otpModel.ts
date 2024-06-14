import mongoose from "mongoose";
import mailSender from "../utils/mailSender"

const OTPSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  otp: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    expires: "5m",
  },
});

async function sendVerificationEmail(email: string, otp: any) {
  try {
    const mailResponse = await mailSender(
      email,
      "Verification Email",
      `<h1>Please confirm your OTP</h1>
         <p>Here is your OTP code: ${otp}</p>`
    );
    console.log("successfully verified otp", mailResponse);
  } catch (error) {
    console.error("error occurs during send verifying email", error);
    throw error;
  }
}

OTPSchema.pre("save", async function (next) {
    console.log('new document is save to database')
    if (this.isNew) {
        await sendVerificationEmail(this.email, this.otp)
    }
    next()
})

const OtpModel = mongoose.model("Product", OTPSchema);
export { OtpModel };