import express from 'express'
import { ENV } from './config/env.js';
import path from 'path';
import cors from 'cors'
import './config/db.js'
import { functions, inngest } from './config/inngest.js';
import {serve} from 'inngest/express'
import  {clerkMiddleware} from '@clerk/express'
import chatRouter from './routes/chatRouter.js'
const app = express();
app.use(cors(
    {origin:ENV.CLIENT_URL,
        credentials:true // this allows cokkies on requests 
    }
))
app.use(express.json());
app.use("/api/inngest", serve({client:inngest, functions}));
app.use(clerkMiddleware()) //this addes the auth to the req object
app.get("/health", (req,res,next)=>{
    res.status(200).json({
        msg :"Hi from the server"
    });
});
// All router starts from here 
// chat route 
app.use("/api/chat", chatRouter)

// make our app ready for the deployment. 
const __dirname = path.resolve();
if(ENV.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));
    app.get("/{*any}", (req,res,next)=>{
        try {
            res.status(200).sendFile(path.join(__dirname, "../frontend/dist/index.html"))
        } catch (error) {
            console.log(error);
            next(error);
            
        }
    })
}
app.listen(ENV.PORT, ()=>{
    console.log("Server started",__dirname);
})