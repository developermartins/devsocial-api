import express from "express";
import { getRelationships, addRelationShips, deleteRelationships } from "../controllers/relationship.js";

const router = express.Router();

router.get("/", getRelationships);
router.post("/", addRelationShips);
router.delete("/", deleteRelationships);

export default router;
