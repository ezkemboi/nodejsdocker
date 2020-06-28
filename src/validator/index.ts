import express from "express";
import RabitMq from "./config/rabitMq";
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";
import cors from "cors";

dotenv.config();
const PORT = process.env.port || 3001;

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/", (req, res) => {
  console.log(req.body);

  RabitMq(req.body.queue, "send", JSON.stringify(req.body), (value: any) => {
    console.log(value);
  });
  res.send("Received data");
});
app.listen(PORT, () => {
  console.log("App listening to port" + PORT);
});
