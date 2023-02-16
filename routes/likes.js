import express from "express";
import { getLikes } from "../controllers/likeController.js";

const router = express.Router();

router.get("/", getLikes);

export default router;
