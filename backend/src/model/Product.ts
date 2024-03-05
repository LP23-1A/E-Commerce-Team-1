import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    productName: String,
    price: Number,
    description: String,
    viewCount: Number,
    createdAt: {
        type: Date,
        default: () => Date.now()
    },
});
const ProductModel = mongoose.model("Product", ProductSchema);
export { ProductModel };