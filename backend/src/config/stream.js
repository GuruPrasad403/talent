import {StreamChat} from "stream-chat"
import { ENV } from "./env.js"

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if(!apiKey || !apiSecret) {
    console.error("STREAM_API_KEY or STREAM_API_SECRET is missing");
}

export const chatClient = StreamChat.getInstance(apiKey,apiSecret)


export const updateUser= async (userData)=>{
    try {
        await chatClient.upsertUser(userData);
        return userData
    } catch (error) {
        console.error(error);
    }
}

export const deleteUser = async (userId)=>{
    try {
        await chatClient.deleteUser(userId)
    } catch (error) {
        console.error(error)
    }
}