import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO, {
            dbName: "Nextjs-Blog", // Specify the database name here
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("Connection failed:", error);
        throw new Error("Connection failed!");
    }
};

export default connect;
