import express from "express";
import { sendOTP } from "../controller/otpController";

export const OTP =  express.Router()

OTP.route('/sendOTP').post(sendOTP)