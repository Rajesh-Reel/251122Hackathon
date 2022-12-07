import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

export default async function sendEmail(req, res) {
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
    //TODO: Change the from: to a .env variable
    data: `{"personalizations":[{"to":[{"email":"${req.body.email}"}],"subject":"${req.body.subject}"}],"from":{"email":"from_${process.env.SENDER_EMAIL}"},"content":[{"type":"text/plain","value":"${req.body.message}"}]}`,
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
}
