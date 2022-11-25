//
import express from "express";
const app = express();
const PORT = 3000;

app.use(express.json());
// console.log('Welcome to the back end on ${PORT}')
app.listen(PORT, function() {console.log('Listening on Port ${PORT}')})