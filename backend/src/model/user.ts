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
    nameOfStore: String,
    phoneNumber: Number,
    district: String,
    khoroo: String,
    skillInSales: Boolean,
    typeOfProduct: String,
    createdAt: Date,
    updatedAt: Date
});

const userModal = mongose.model("User", UserSchema);

export { userModal }