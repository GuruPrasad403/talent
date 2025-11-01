import dotenv from 'dotenv'
dotenv.config({quiet : true});


export const ENV = {
    PORT : process.env.PORT,
    DB : process.env.DB,
    NODE_ENV: process.env.NODE_ENV,

} 