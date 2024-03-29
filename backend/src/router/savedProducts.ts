import express from "express";
import { createSavedProduct, deleteSavedProduct, getSavedProduct, updateSavedProduct, getSavedProductById } from "../controller/savedProducts";

const savedProduct = express.Router();
savedProduct.route("/create").post(createSavedProduct)
savedProduct.route("/:id").delete(deleteSavedProduct).put(updateSavedProduct)
savedProduct.route("/get").get(getSavedProduct)
savedProduct.route("/:id").get(getSavedProductById)
export { savedProduct }