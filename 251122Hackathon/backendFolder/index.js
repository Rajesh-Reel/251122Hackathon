//
import express from "express";
const app = express();
import cors from 'cors'
app.use(express.json());

app.use(cors())

app.post('/', (req, res) => {
  console.log(req.body);
  res.json(req.body)
})  

// app.post('/', (req, res) => {
//   res.send(req)
// })

const PORT = 3000;




app.listen(PORT, console.log(`Listening on Port ${PORT}`))