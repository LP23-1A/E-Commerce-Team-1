import { Request, Response } from "express";
import { ProductModel } from "../model/Product";

interface ProductData {
  productName: string;
  categoryId: string;
  description: string;
  price: number;
  quantity: number;
  thumbnails: number;
  createdAt: number;
  category: string;
  subCategory: string;
  images: string[];
}

export const createProduct = async (req: Request, res: Response) => {
  try {
    const {
      productName,
      categoryId,
      description,
      price,
      category,
      subCategory,
      quantity,
      createdAt,
      thumbnails,
      images,
    }: ProductData = req.body;
    const product = await ProductModel.create({
      productName,
      categoryId,
      description,
      price,
      quantity,
      createdAt,
      thumbnails,
      category,
      subCategory,
      images,
    });
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send({ success: false, message: "Internal server error" });
  }
};

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const getallProduct = await ProductModel.find();
    res.status(200).send(getallProduct);
  } catch (error) {
    res.status(500).send({ success: false, message: "Internal server error" });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const ProductId = req.params.id;
    const deleteProduct = await ProductModel.findByIdAndDelete(ProductId);
    res.status(200).send({ success: true, deleteProduct });
  } catch (error) {
    res.status(500).send({ success: false, message: "Internal server error" });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const ProductId = req.params.id;
    req.body.updatedAt = new Date();
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      ProductId,
      req.body,
      { new: true }
    );
    res.status(200).send({ success: true, updatedProduct });
  } catch (error) {
    res.status(500).send({ success: false, message: "Internal server error" });
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    const ProductId = req.params.id;
    const getOne = await ProductModel.findById(ProductId);
    res.status(200).send(getOne);
  } catch (error) {
    res.status(500).send({ success: false, message: "Internal server error" });
  }
};
