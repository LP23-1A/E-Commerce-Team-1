import { Request, Response } from "express";
import { IncomeModel } from "../model/income";

interface IncomeData {
  orderNumber: String;
  paymentStatus: String;
  paymentType: Number;
  createdAt: Date;
  updatedAt: Date
}

export const createIncome = async (req: Request, res: Response) => {
  try {
    const {
      orderNumber,
      paymentStatus,
      paymentType,
      createdAt,
      updatedAt
    }: IncomeData = req.body;
    const Income = await IncomeModel.create({
        orderNumber,
        paymentStatus,
        paymentType,
        createdAt,
        updatedAt
    });
    res.status(200).send(Income);
  } catch (error) {
    console.log(error);
  }
};

export const getAllIncome = async (req: Request, res: Response) => {
  try {
    const getallIncome = await IncomeModel.find();
    res.status(200).send(getallIncome);
  } catch (error) {
    console.log(error);
  }
};