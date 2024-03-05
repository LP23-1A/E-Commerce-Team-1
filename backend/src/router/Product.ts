import express from "express";
import { createProduct, deleteProduct, getProduct, updateProduct } from "../controller/Product";

const product = express.Router();
product.route("/create").post(createProduct)
product.route("/:id").delete(deleteProduct).put(updateProduct)
product.route("/get").get(getProduct)
export { product }