import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const MONGO_URL = process.env.MONGO_URL
const db = async (req, res) => {

    try {
        await mongoose.connect(MONGO_URL)
        console.log('connected to mongo db');
    } catch (error) {
        console.log('error connecting mongodb');
        console.log(`${error}`);
        process.exit(1)
    }
}

export default db