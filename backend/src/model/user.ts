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
    role: {
        type: String,
        enum: ['Admin', 'User'],
        default: 'User'
    },
    phoneNumber: Number,
    password: String,
    address: String,
    zipCode: String,
    cartId: String,
    createdAt: Date,
    updatedAt: Date
});

const userModal = mongose.model("User", UserSchema);

export { userModal }