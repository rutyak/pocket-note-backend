import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import noteRoutes from "./routes/noteRoutes.js"; 
import groupRoutes from "./routes/groupRoutes.js"; 
import { errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();

const app = express();

const corsOptions = {
    origin: [
        "http://localhost:5173",
        "https://pocket-notes-app-new.netlify.app"
    ],
    methods: ["GET","POST","PATCH","DELETE"],
}
app.use(cors(corsOptions));

app.use(express.json());

app.use(authRoutes);
app.use(noteRoutes);
app.use(groupRoutes); 

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
