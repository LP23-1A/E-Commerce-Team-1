import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getOne,
  updateProduct,
} from "../controller/Product";

const product = express.Router();
product.route("/create").post(createProduct);
product.route("/:id").delete(deleteProduct).put(updateProduct);
product.route("/get").get(getAllProduct);
product.route("/getOne/:id").get(getOne);
export { product };
