
import mongoose from "mongoose";
import dotenv from  'dotenv'
dotenv.config()

const db= ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
console.log('connected to mongodb');
    }).catch((e)=>{
console.log('error connecting mongodb',e);
    process.exit(1); // Stop the app if DB fails
    })
}
export default db