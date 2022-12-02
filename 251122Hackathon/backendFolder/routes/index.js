import express from "express";
import sendEmail from "../models/sendEmail.js";

const router = express.Router();

router.get("/", function (req, res) {
  res.send({success: true, message: "Welcome to the /new route"});
})

router.post("/", sendEmail);

export default router;