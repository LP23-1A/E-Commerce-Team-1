import mongoose from "mongoose";

const savedProductSchema = new mongoose.Schema({
  savedProductId: String,
  products: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});
const savedProductModel = mongoose.model("SavedProduct", savedProductSchema);
export { savedProductModel };
