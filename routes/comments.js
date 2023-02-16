import express from "express";
import { comments } from "../controllers/commentController.js";

const router = express.Router();

router.get("/", comments);

export default router;
