import { Request, Response } from "express";
import { OrderModel } from "../model/order";

interface ProductData {
    status: string; orderNumber: string; amountPaid: Number; amountToBePaid: Number; createdAt: Date;
}

export const createOrder = async (req: Request, res: Response) => {
    try {        
        const product = await OrderModel.create({
            ...req.body
        })
        res.status(200).send(product)
    } catch (error) {
        console.log(error);

    }
}

export const getOrder = async (req: Request, res: Response) => {
    try {
        const getallProduct = await OrderModel.find().populate('userId').populate('details');
        res.status(200).send(getallProduct)
    } catch (error) {
        console.log(error);
    }
}

export const getOrderById = async (req: Request, res: Response) => {
    
    try {
        const { id } = req.params;
        const getOrderById = await OrderModel.findById(id);
        console.log(getOrderById)
        res.status(200).send(getOrderById)
    } catch (error) {
        console.log(error);
    }
}

export const deleteOrder = async (req: Request, res: Response) => {
    try {
        const { ProductId } = req.params;
        const deleteProduct = await OrderModel.findByIdAndDelete(ProductId);

        console.log('deleted', deleteProduct);

    } catch (error) {
        console.log(error);
    }
}

export const updateOrder = async (req: Request, res: Response) => {
    try {
        const orderId = req.params.id;
        const updateOrder = await OrderModel.findByIdAndUpdate(orderId, req.body);
        res.status(200).send(updateOrder)
        console.log("updated", orderId)
    } catch (error) {
        console.log(error);

    }
}