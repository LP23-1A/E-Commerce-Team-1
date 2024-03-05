import express from "express";
import { SignUp } from "../controller/user";

export const user = express.Router();

user.route('/postUser')
    .post(SignUp)
