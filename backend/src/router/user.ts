import express from "express";
import {
  SignUp,
  deleteUser,
  getAllUsers,
  updateUser,
} from "../controller/user";

export const user = express.Router();

user.route("/postUser").post(SignUp);

user.route("/getAllUsers").get(getAllUsers);

user.route("/updateUser/:id").put(updateUser);

user.route("/deleteUser/:id").delete(deleteUser);
