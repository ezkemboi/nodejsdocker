import express from "express";
import RabitMq from "./services/rebitMq";
// Constants
const PORT = 5000;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
  RabitMq("codingtest", "send", (value: any) => {
    res.send(value);
  });
});

app.listen(PORT, HOST);
