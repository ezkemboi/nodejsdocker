dotenv.config();

RabitMq("validator_jenga", "receive", null, (value: any) => {
  RabitMq("service_jenga", "send", value, (res: any) => {
    console.log(res);
  });
  console.log(value);
});
RabitMq("validator_mpesa", "receive", null, (value: any) => {
  RabitMq("service_mpesa", "send", value, (res: any) => {
    console.log(res);
  });
  console.log(value);
});
import express from "express";
import RabitMq from "./config/rabitMq";
import firebase from "./config/firebase";
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";

dotenv.config();
const PORT = process.env.port || 3001;

const app = express();
app.use(bodyParser.json());

app.post("/user", (req, res) => {
  RabitMq(req.body.queue, "send", req.body, (value: any) => {
    console.log(value);
  });
  res.send("Received data");
});
app.listen(PORT, () => {
  console.log("App listening to port" + PORT);
});
