//
import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();
import newRouter from "./routes/index.js";

const PORT = 3000;
const app = express();
app.use(express.json());

app.use(cors());

console.log(process.env.SENDER_EMAIL, process.env.EMAIL_KEY);

app.get("/", function (req, res) {
  res.send({ success: true, message: "Welcome to the back end" });
});

app.use("/new", newRouter);

app.listen(PORT, console.log(`Listening on Port ${PORT}`));
