import mongoose from "mongoose";

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
    expires: 300,
  },
  userEmail: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const OtpModel = mongoose.model("OTP", OTPSchema);
export default OtpModel;
