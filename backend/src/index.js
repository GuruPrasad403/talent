import express from 'express'
import { ENV } from './config/env.js';

const app = express();


app.get("/health", (req,res,next)=>{
    res.status(200).json({
        msg :"Hi from the server"
    });
});


app.listen(ENV.PORT, ()=>{
    console.log("Server started");
})