import { Request, Response } from "express";
import { ProductModel } from "../model/Product";

interface ProductData {
  productName: string;
  description: string;
  price: number;
  quantity: number;
}

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { productName, description, price, quantity }: ProductData = req.body;
    const product = await ProductModel.create({
      productName,
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
    const ProductId = req.params.id;
    const deleteProduct = await ProductModel.findByIdAndDelete(ProductId);
    res.status(200).send({ success: true, deleteProduct });
    // console.log("deleted", deleteProduct);
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const ProductId = req.params.id;
    const updateProduct = await ProductModel.findByIdAndUpdate(
      ProductId,
      req.body
    );
    res.status(200).send({ success: true, updateProduct });
  } catch (error) {
    console.log(error);
  }
};
