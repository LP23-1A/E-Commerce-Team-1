import express from "express";
import {
  createIncome,
  getAllIncome,
} from "../controller/Income";

const Income = express.Router();
Income.route("/create").post(createIncome);
Income.route("/get").get(getAllIncome);
export { Income };