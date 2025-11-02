import mongoose from 'mongoose'
import { ENV } from './env.js'
let Status = false
async function connectToDB(){
    if(Status) return
    try {
        const connection = await mongoose.connect(ENV.DB);
        Status = true
        console.log("Data Base connected to",  connection.connection.name);
    } catch (error) {
        console.log(error);
        process.exit(1) //0 means sucessfull
    }
}
connectToDB();

export default connectToDB;