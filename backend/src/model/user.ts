import mongose from "mongoose";

const UserSchema = new mongose.Schema({
    userName: {
        type: String,
        minLength: 3,
        required: true
    },
    email: {
        type: String,
        minLength: 3,
        required: true
    },
    password: String,
    address: String,
    zipCode: String,
    cartId: String,
    createdAt: Date,
    updatedAt: Date
});

const userModal = mongose.model("User", UserSchema);

export { userModal }