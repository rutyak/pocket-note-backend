import express from "express";
import {
  createGroup,
  getGroups,
} from "../controllers/groupController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create/group", protect, createGroup);
router.get("/groups", protect, getGroups);

export default router;
