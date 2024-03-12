import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  updateProduct,
} from "../controller/Product";

const product = express.Router();
product.route("/create").post(createProduct);
product.route("/:id").delete(deleteProduct).put(updateProduct);
product.route("/get").get(getAllProduct);
export { product };
