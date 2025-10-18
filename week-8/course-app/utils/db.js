// connected to the db 

import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const MONGO_URL = process.env.MONGO_URL
const db = async () => {
    try {
        await mongoose.connect(MONGO_URL)
        console.log("connected to mongo db");
    } catch(err) {
        console.log("error connecting mongodb",err.message);
        process.exit(1)
    }
}

export default db