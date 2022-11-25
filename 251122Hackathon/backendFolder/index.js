//
import express from "express";
const app = express();
const router = app.Router();

app.post('/', (req, res) => {
  res.send(req)
})

const PORT = 3000;

app.use(express.json());



app.listen(PORT, console.log(`Listening on Port ${PORT}`))