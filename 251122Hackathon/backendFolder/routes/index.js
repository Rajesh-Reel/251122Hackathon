import express from "express";
import sendEmail from "../models/sendEmail.js";
import { addEmail } from "../models/addEmail.js";

const router = express.Router();

router.post("/", addEmail);

// router.post("/", sendEmail);

export default router;
