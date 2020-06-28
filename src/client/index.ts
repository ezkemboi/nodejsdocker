import express from "express";
import * as bodyParser from "body-parser";
import template from "./template";

// port
const PORT = process.env.port || 3000;

// appinstance
const app = express();

// enable cors
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(template);
});

app.listen(PORT, () => {
  console.log("App listening to port" + PORT);
});
