import express from "express";
import { createOrder, deleteOrder, getOrder, updateOrder, getOrderById } from "../controller/order";

const order = express.Router();
order.route("/create").post(createOrder)
order.route("/:id").delete(deleteOrder).put(updateOrder)
order.route("/get").get(getOrder)
order.route("/:id").get(getOrderById)
export { order }