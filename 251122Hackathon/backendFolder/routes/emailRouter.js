import express from "express";
import sendEmail from "../models/sendEmail.js";
// import { addEmail, getEmail, deleteEmail } from "../models/EmailModels.js";
import getEmail from "../db/scripts/getEmail.js";
import deleteEmail from "../db/scripts/deleteEmail.js";
import addEmail from "../db/scripts/addEmail.js";

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

// router.get("/send", async function (req, res) {
//   const result = await getEmail();

//   console.log(result.rows);
//   res.json(result.rows);
// });

router.post("/send", (req, res) => {
  console.log(req.body);
  res.json(req.body);

  const options = {
    method: "POST",
    url: "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": `${process.env.EMAIL_KEY}`,
      "X-RapidAPI-Host": "rapidprod-sendgrid-v1.p.rapidapi.com",
    },
    data: `{"personalizations":[{"to":[{"email":"${req.body.email}"}],"subject":"Yooooo!"}],"from":{"email":"from_${process.env.SENDER_EMAIL}"},"content":[{"type":"text/plain","value":"Hello, World!"}]}`,
  };
});

export default router;

/*
email - post
email/send - get
email - get
*/
