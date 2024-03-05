import mongoose, { Schema } from 'mongoose';

const OrderSchema = new mongoose.Schema({
    orderNumber: String,
    status: String, // You can store the status as a string or you can reference another collection for status options
    phoneNumber: String,
    deliveryDate: Date,
    amountPaid: Number,
    amountToBePaid: Number,
    coupon: String,
    description: String,
    orderType: String, // You can store the order type as a string or reference another collection for order type options
    details: [ // Array of OrderDetails objects
      {
        // Define the schema for OrderDetails here
      }
    ],
    createdAt: { type: Date, default: Date.now }, // Timestamp for when the document was created
    updatedAt: { type: Date, default: Date.now } // Timestamp for when the document was last updated
  }
  );

const OrderModel = mongoose.model('order', OrderSchema);

export { OrderModel };