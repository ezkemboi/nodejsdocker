// PORT 8001
import express from "express";
import RabitMq from "./config/rabbitMq";
import firebase from "./config/firebase";
import * as dotenv from "dotenv";

dotenv.config();
const database = firebase.database();
const writeUserData = (id: any) => {
  database.ref("/" + id).set({
    username: "Hezzie",
    email: "hezzie@gmail.com",
  });
};
const PORT = process.env.port || 5000;

const app = express();

app.get("/", (req, res) => {
  writeUserData(1);

  RabitMq("mpesaQueue", "receive", null, (value: any) => {
    console.log("Value", value);
  });
  res.send("value");
});

app.listen(PORT, () => {
  console.log("App listening to port" + PORT);
});
