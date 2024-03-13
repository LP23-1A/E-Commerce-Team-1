import mongoose, { Schema } from 'mongoose';

const OrderSchema = new mongoose.Schema({
    orderNumber: String,
    userId: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    status: String,
    amountPaid: Number,
    amountToBePaid: Number,
    details: [
      {
        // Define the schema for OrderDetails here
      }
    ],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  }
  );

const OrderModel = mongoose.model('order', OrderSchema);

export { OrderModel };