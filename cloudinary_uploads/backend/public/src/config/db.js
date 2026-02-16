import mongoose,{connect} from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const db  = async () => {
    
    await connect(process.env.MONGOURI)
    .then(()=>{
console.log(`connected to  mongodb`);
    }).catch((err)=>{
console.log(`error conneting mongodb`);
console.log(`${err.message}`);
process.exit(1)
    })
}
export default db