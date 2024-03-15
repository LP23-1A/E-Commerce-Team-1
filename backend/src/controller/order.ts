import { Request, Response } from "express";
import { OrderModel } from "../model/order";

interface ProductData {
  status: string;
  orderNumber: string;
  amountPaid: Number;
  amountToBePaid: Number;
  createdAt: Date;
}

export const createOrder = async (req: Request, res: Response) => {
  try {
    const {
      orderNumber,
      amountPaid,
      status,
      amountToBePaid,
      createdAt,
    }: ProductData = req.body;
    const product = await OrderModel.create({
      orderNumber,
      status,
      amountPaid,
      amountToBePaid,
      createdAt,
    });
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
  }
};

export const getOrder = async (req: Request, res: Response) => {
  try {
    const getallProduct = await OrderModel.find();
    res.status(200).send(getallProduct);
  } catch (error) {
    console.log(error);
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const { ProductId } = req.params;
    const deleteProduct = await OrderModel.findByIdAndDelete(ProductId);

    console.log("deleted", deleteProduct);
  } catch (error) {
    console.log(error);
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const orderId = req.params.id;
    const updateOrder = await OrderModel.findByIdAndUpdate(orderId, req.body);
    res.status(200).send(updateOrder);
    console.log("updated", orderId);
  } catch (error) {
    console.log(error);
  }
};
