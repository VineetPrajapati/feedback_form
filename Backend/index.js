import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import feedbackRouters from "./routes/feedbackRoutes.js";

dotenv.config();

// express app
const app = express();

// db connection
connectDB();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/feedback", feedbackRouters);

// PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
