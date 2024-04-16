import mongose from "mongoose";

const UserSchema = new mongose.Schema({
  userName: {
    type: String,
    minLength: 3,
    required: true,
  },
  email: {
    type: String,
    minLength: 3,
    required: true,
  },
  role: {
    type: String,
    enum: ["Admin", "User"],
    default: "User",
  },
  nameOfStore: String,
  phoneNumber: Number,
  district: String,
  khoroo: String,
  skillInSales: String,
  typeOfProduct: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const userModal = mongose.model("users", UserSchema);

export { userModal };
