import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  productName: String,
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  price: Number,
  quantity: Number,
  thumbnails: String,
  images: String,
  coupon: String,
  salePercent: Number,
  description: String,
  viewsCount: Number,
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});
const ProductModel = mongoose.model("Product", ProductSchema);
export { ProductModel };