import mongoose from 'mongoose'
import { ENV } from './env.js'

async function connectToDB(){
    try {
        const connection = await mongoose.connect(ENV.DB);
        console.log("Data Base connected to",  connection.connection.name);
    } catch (error) {
        console.log(error);
        process.exit(1) //0 means sucessfull
    }
}
connectToDB();