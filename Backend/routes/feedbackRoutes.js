import express from "express";
import Feedback from "../models/Feedback.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const {name, email, message } = req.body;
        const feedback = Feedback({name, email, message});
        await feedback.save();
    } catch (err) {
        res.status(400).json({err: "Error saving feedback"});
    }
    
})

