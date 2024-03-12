import mongoose from "mongoose"

export const connectDataBase = async () => {
    try {
        const MONGODB_URL: any = process.env.MONGODB_URI
        await mongoose.connect(MONGODB_URL);
        console.log("DataBase connect successfully");
    } catch (error: unknown) {
        console.log(error);
        throw new Error('DataBase cannot connect')
    }
};