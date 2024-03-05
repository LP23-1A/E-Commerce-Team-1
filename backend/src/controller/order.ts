import { Request, Response } from "express";
import { OrderModel } from "../model/order";

interface ProductData {
    ProductName: string; description: string; status: string;
}

export const createOrder = async (req: Request, res: Response) => {
    try {
        const { ProductName, description, status }: ProductData = req.body
        const product = await OrderModel.create({
            ProductName,
            description,
            status,
        })
        res.status(200).send(product)
    } catch (error) {
        console.log(error);

    }
}

export const getOrder = async (req: Request, res: Response) => {
    try {
        const getallProduct = await OrderModel.find();
        res.status(200).send(getallProduct)
    } catch (error) {
        console.log(error);

    }
}

export const deleteOrder = async (req: Request, res: Response) => {
    try {
        const { ProductId } = req.params;
        const deleteProduct = await OrderModel.findByIdAndDelete(ProductId);
        // res.status(200).send({ success: true, deleteProduct })
        console.log('deleted', deleteProduct);

    } catch (error) {
        console.log(error);

    }
}

export const updateOrder = async (req: Request, res: Response) => {
    try {
        const { ProductId } = req.params;
        const updateProduct = await OrderModel.findByIdAndUpdate(ProductId);
        res.status(200).send(updateProduct)
    } catch (error) {
        console.log(error);

    }
}