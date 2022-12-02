//
import express from "express";
const router = express.Router();

router.get("/", function (req, res) {
  res.send({success: true, message: "Welcome to the /new route"});
})

router.post("/", (req, res) => {
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

export default router;