import { Request, Response } from "express";
import { ProductModel } from "../model/Product";

interface ProductData {
  ProductName: string;
  description: string;
  price: number;
  quantity: number;
}

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { ProductName, description, price, quantity }: ProductData = req.body;
    const product = await ProductModel.create({
      ProductName,
      description,
      price,
      quantity,
    });
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
  }
};

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const getallProduct = await ProductModel.find();
    res.status(200).send(getallProduct);
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { ProductId } = req.params;
    const deleteProduct = await ProductModel.findByIdAndDelete(ProductId);
    // res.status(200).send({ success: true, deleteProduct })
    console.log("deleted", deleteProduct);
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { ProductId } = req.params;
    const updateProduct = await ProductModel.findByIdAndUpdate(ProductId);
    res.status(200).send(updateProduct);
  } catch (error) {
    console.log(error);
  }
};
