import express from "express";
import Feedback from "../models/Feedback.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const feedback = Feedback({ name, email, message });
    await feedback.save();
    res.status(201).json({message: "Feedback submitted successfully!"})
  } catch (err) {
    res.status(400).json({ err: "Error saving feedback" });
  }
});

router.get("/", async (req, res) => {
  try {
    const feedbackList = await Feedback.find().sort({createdAt: -1});
    res.json(feedbackList);
  } catch (err) {
    res.status(500).json({ err: "Error fetching feedback" });
  }
});

export default router;
