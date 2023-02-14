import express from "express";
import { posts } from "../controllers/postController.js";

const router = express.Router();

router.get("/", posts);

export default router;
