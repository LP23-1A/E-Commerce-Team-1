import mongoose from "mongoose"

export const connectDataBase = async () => {
    try {
        const MONGODB_URL = `mongodb+srv://Isvhbaatar5:94849622@cluster0.z3m8yz0.mongodb.net/e-commerce-Team-1`
        await mongoose.connect(MONGODB_URL);
        console.log("DataBase connect successfully");
    } catch (error: unknown) {
        console.log(error);
        throw new Error('DataBase cannot connect')
    }
};