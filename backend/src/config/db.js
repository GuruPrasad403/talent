import mongoose from 'mongoose'
import { ENV } from './env.js'

/**
 * Establishes a connection to the MongoDB instance configured in ENV and logs the connected database name.
 *
 * Attempts to connect using mongoose and ENV.DB; on success logs "Data Base connected to <name>". On failure logs the error and terminates the process with exit code 1.
 */
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

export default connectToDB;