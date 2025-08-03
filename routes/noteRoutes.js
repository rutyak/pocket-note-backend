import express from "express";
import {
  createNote,
  getNotes,
} from "../controllers/noteController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create/note", protect, createNote);  
router.get("/notes", protect, getNotes);        

export default router;
