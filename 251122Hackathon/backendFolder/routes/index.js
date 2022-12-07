import express from "express";
import sendEmail from "../models/sendEmail.js";
import { addEmail, getEmail } from "../models/addEmail.js";

const router = express.Router();

// router.post("/", addEmail);
router.post("/", async function (req, res) {
  const newEmail = req.body;
  const result = await addEmail(newEmail);

  res.json({
    success: true,
    payload: result,
  });
});

router.get("/", async function (req, res) {
  const result = await getEmail();
  //what difference would it make if we replaced res.json() with res.send() here?
  res.json(result);
});
// router.post("/", sendEmail);

export default router;
