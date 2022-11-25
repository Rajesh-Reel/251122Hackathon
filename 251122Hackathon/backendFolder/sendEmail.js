import * as dotenv from 'dotenv'
dotenv.config()

/*
Update the options object to include whatever is submitted on the front end.

Any time a request is made to port 3000 with the endpoint /send-email then link here


*/


import axios from "axios";

const options = {
  method: 'POST',
  url: 'https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': `${process.env.EMAIL_KEY}`,
    'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com'
  },
  data: '{"personalizations":[{"to":[{"email":"ph.kaminski.dev@gmail.com"}],"subject":"Hello, World!"}],"from":{"email":"from_lorentzbloomguitar@gmail.com"},"content":[{"type":"text/plain","value":"Hello, World!"}]}'
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});