//
import express from "express";
const app = express();
import cors from "cors";
import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();
app.use(express.json());

app.use(cors());

console.log(process.env.SENDER_EMAIL, process.env.EMAIL_KEY);

app.post("/", (req, res) => {
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
    data: `{"personalizations":[{"to":[{"email":"${req.body.email}"}],"subject":"${req.body.subject}"}],"from":{"email":"from_philip.doge.kaminski@gmail.com"},"content":[{"type":"text/plain","value":"${req.body.message}"}]}`,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      console.log(process.env.SENDER_EMAIL);
    })
    .catch(function (error) {
      console.error(error);
    });
});

const PORT = 3000;

app.listen(PORT, console.log(`Listening on Port ${PORT}`));
