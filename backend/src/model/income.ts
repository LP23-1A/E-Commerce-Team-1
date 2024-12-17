import mongoose from "mongoose";

const IncomeSchema = new mongoose.Schema({
  orderNumber: String,
  paymentStatus: String,
  paymentType: Number,
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});
const IncomeModel = mongoose.model("Income", IncomeSchema);
export { IncomeModel };