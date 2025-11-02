import { chatClient } from "../config/stream.js";


export function getStreamToken(req,res,next){
    try {
        // use clerk id bcz we have given clerk id not mongoDB id 
    const token = chatClient.createToken(req.user.clerkId);
    res.status(200).json({
        msg :"Token Created", 
        token , 
        userName : req.user.name, 
        imgPath : req.user.image,
        userId : req.user.clerkId
    })
    } catch (error) {
        console.error("Error in ChatController", error);
        res.status(500).json({
            msg : "server down, please try later"
        })
    }
}