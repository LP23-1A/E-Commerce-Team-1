import express from "express";
import { sendOTP } from "../controller/otpController";
import { verifyOtpPassword } from "../controller/verifyOtp";

export const OTP =  express.Router()

OTP.route('/sendOTP').post(sendOTP)
OTP.route('/verifyOTP').post(verifyOtpPassword)
