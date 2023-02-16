import express from "express";
import { comments, addComment } from "../controllers/commentController.js";

const router = express.Router();

router.get("/", comments);
router.post("/", addComment);
export default router;
