import express from 'express'
import { ENV } from './config/env.js';
import path from 'path';
import './config/db.js'
const app = express();


app.get("/health", (req,res,next)=>{
    res.status(200).json({
        msg :"Hi from the server"
    });
});

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