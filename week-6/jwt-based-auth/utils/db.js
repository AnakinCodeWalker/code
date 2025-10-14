///A nusiance you need an internet connection for connecting to the db and spent half an hour for seaching what causes an error to connect to the db



// connecting to the db for future references...
import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

const MONGO_URL = process.env.MONGO_URL

const db = () => {
    mongoose.connect(MONGO_URL)
        .then(() => {
            console.log('connection established to db')
        }).
        catch(() => {
            console.log('error connecting mongo db')
            process.exit(1) // means there is an error and it will immediately end the current process...
        })
}
export default db