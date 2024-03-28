import { Request, Response } from "express";
import { savedProductModel } from "../model/savedProducts";

export const createSavedProduct = async (req: Request, res: Response) => {
    try {        
        const SavedProduct = await savedProductModel.create({
            ...req.body
        })
        res.status(200).send(SavedProduct)
    } catch (error) {
        console.log(error);

    }
}

export const getSavedProduct = async (req: Request, res: Response) => {
    try {
        const getSavedProduct = await savedProductModel.find().populate('userId').populate('products');
        res.status(200).send(getSavedProduct)
    } catch (error) {
        console.log(error);
    }
}

export const getSavedProductById = async (req: Request, res: Response) => {
    
    try {
        const { id } = req.params;
        const getSavedProductById = await savedProductModel.findById(id).populate('userId').populate('products');
        console.log(getSavedProductById)
        res.status(200).send(getSavedProductById)
    } catch (error) {
        console.log(error);
    }
}

export const deleteSavedProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deleteSavedProduct = await savedProductModel.findByIdAndDelete(id);

        console.log('deleted', deleteSavedProduct);

    } catch (error) {
        console.log(error);
    }
}

export const updateSavedProduct = async (req: Request, res: Response) => {
    try {
        const orderId = req.params.id;
        const updateSavedProduct = await savedProductModel.findByIdAndUpdate(orderId, req.body);
        res.status(200).send(updateSavedProduct)
        console.log("updated", orderId)
    } catch (error) {
        console.log(error);

    }
}