import { Request, Response } from "express";
import { userModal } from "../model/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const SignUp = async (req: any, res: any) => {
  try {
    const { ...userData } = req.body;

    const response = await userModal.create({ ...userData });
    const token = jwt.sign({ userId: response._id }, "Test");

    res.status(200).send({
      success: true,
      createdUser: response,
      token,
    });
    console.log(response, "response");
  } catch (error) {
    console.log("eraror at creating user", error);
    res.status(500).send({
      success: false,
      error,
    });
  }
};

export const getAllUsers = async (req: any, res: any) => {
  try {
    const allUsers = await userModal.find();
    return res.status(200).send({
      PositiveResult: true,
      allUsers,
    });
  } catch (error) {
    console.log("error at fetchin AllUser", error);
    res.status(500).send({
      success: false,
      error,
    });
  }
};

export const updateUser = async (req: any, res: any) => {
  try {
    const id = req.params.id;

    const desiredUser = await userModal.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).send({
      PositiveResult: true,
      Here: desiredUser,
    });
  } catch (error) {
    console.log("error at updating user", error);
    res.status(500).send({
      success: false,
      error,
    });
  }
};

export const deleteUser = async (req: any, res: any) => {
  try {
    const id = req.params.id;

    await userModal.findByIdAndDelete(id);

    res.status(200).send({
      PositiveResult: true,
      Here: "The user is deleted successfully",
    });
  } catch (error) {
    console.log("error at deleting user", error);
    res.status(500).send({
      success: false,
      error,
    });
  }
};
