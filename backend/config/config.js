
import { configDotenv } from 'dotenv';
import mongoose from 'mongoose';

configDotenv()

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected");
    } catch (error) {
        console.log("Error connecting to database:", error);
    }
};
