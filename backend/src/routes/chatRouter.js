import express from 'express'
import { protectRoute } from '../middlewares/authMiddleware.js';
import { getStreamToken } from '../controllers/chatController.js';

const router = express.Router();


// genrate an token for the stream 

router.get("/token", protectRoute, getStreamToken)

export default router