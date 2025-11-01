import dotenv from 'dotenv'
dotenv.config();


export const ENV = {
    PORT : process.env.PORT,
    DB : process.env.DB,
    NODE_ENV: process.env.NODE_ENV
} 