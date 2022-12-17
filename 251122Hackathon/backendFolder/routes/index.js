import express from "express";
import sendEmail from "../models/sendEmail.js";
// import { addEmail, getEmail, deleteEmail } from "../models/EmailModels.js";
import getEmail from '../db/scripts/getEmail.js'
import deleteEmail from '../db/scripts/deleteEmail.js'
import addEmail from '../db/scripts/addEmail.js'



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

router.delete("/:id", async function (req, res) {
  const id = req.params.id;
  console.log(id);
  const result = await deleteEmail(id);

  res.json({
    success: true,
    payload: result,
  });
});

export default router;
