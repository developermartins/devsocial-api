import express from "express";
import { getLikes, like, dislike } from "../controllers/likeController.js";

const router = express.Router();

router.get("/", getLikes);
router.post("/", like);
router.delete("/", dislike);

export default router;
