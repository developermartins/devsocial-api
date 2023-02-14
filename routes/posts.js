import express from "express";
import { posts, addPost } from "../controllers/postController.js";

const router = express.Router();

router.get("/", posts);
router.post("/", addPost);

export default router;