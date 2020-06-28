import express from "express";
import RabitMq from "./config/rabitMq";
import firebase from "./config/firebase";
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";
import template from "./template";
dotenv.config();
const database = firebase.database();
const writeUserData = (id: any, data: any) => {
  database.ref("/" + id).set(data);
};
const PORT = process.env.port || 3000;

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(template);
});

app.listen(PORT, () => {
  console.log("App listening to port" + PORT);
});
