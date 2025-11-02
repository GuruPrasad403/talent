import { requireAuth } from "@clerk/express";
import User from "../models/User.js";

export const protectRoute = [
    requireAuth({signInUrl : "/sign-in"}),
    async (req,res,next)=>{
        try {
            const clerkId = req.auth().userId;
            if(!clerkId) return res.status(401).json({msg : "Invalid Token"});
            // find user 
            const user = await User.findOne({clerkId});
            if(!user) return res.status(404).json({msg :"User Not Found"});
            // adding user to the req object
            req.user = user; 
            next()
        } catch (error) {
            console.error("Error in middleware", error)
            res.status(500).json({msg :"Server Down, Please try after sometime"});
        }
    }

]