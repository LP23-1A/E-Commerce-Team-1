import AWS from "aws-sdk";
import dotenv from "dotenv";
import { Request, Response } from "express";
import { ProductModel } from "../model/Product";

dotenv.config();
interface ProductData {
  productName: string;
  description: string;
  price: number;
  quantity: number;
  thumbnails: number;
  createdAt: number;
  coupon: string;
}
const region = "";
const bucketName = "ecommerce-team-1";
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new AWS.S3();
export const generateUploadUrl = async (req: Request, res: Response) => {
  const params = {
    Bucket: bucketName,
    Key: __filename,
    Expires: 60,
  };
  const uploadURL = await s3.getSignedUrlPromise("putObject", params);
  return uploadURL;
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const {
      productName,
      description,
      price,
      quantity,
      createdAt,
      coupon,
      thumbnails,
    }: ProductData = req.body;
    const product = await ProductModel.create({
      productName,
      description,
      price,
      quantity,
      createdAt,
      thumbnails,
      coupon,
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
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const ProductId = req.params.id;
    console.log(ProductId);

    req.body.updatedAt = new Date();
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      ProductId,
      req.body,
      { new: true }
    );
    res.status(200).send({ success: true, updatedProduct });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Internal server error" });
  }
};
