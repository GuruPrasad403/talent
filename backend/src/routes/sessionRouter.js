import express from 'express'
import { protectRoute } from '../middlewares/authMiddleware.js';
import { createSession, endSession, getMyActiveSessions, getMyRecentSessions, getSessionById, joinSession } from '../controllers/sessionsController.js';

const router = express.Router();


router.post("/", protectRoute, createSession);
router.get("/active", protectRoute, getMyActiveSessions);
router.get("/my-recent-sessions", protectRoute, getMyRecentSessions);
router.get("/:id", protectRoute, getSessionById);
router.get("/:id/join", protectRoute,joinSession)
router.get("/:id/end", protectRoute,endSession)


export default router;