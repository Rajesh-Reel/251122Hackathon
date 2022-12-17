//
import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();
import emailRouter from "./routes/emailRouter.js";

const PORT = 3000;
const app = express();
app.use(express.json());

app.use(cors());

console.log(process.env.SENDER_EMAIL, process.env.EMAIL_KEY);

app.use("/email", emailRouter);

app.listen(PORT, console.log(`Listening on Port ${PORT}`));
