// PORT 8001

const validMpesaRes = [
    {
        mpesaCode: 'NXQUIOAKSDII12JS',
        mpesaUser: 'kemboi',
        phoneNumber: '0722228902',
        success: true,
        amount: '5000',
        message: 'Successfully paid 5000 for rent'
    },
    {
        mpesaUser: 'Kebenei',
        phoneNumber: '0798862345',
        success: false,
        amount: '5000',
        message: 'Failed. Insufficient funds.'
    }
]

export function mpesa() {
    // process payment
    // response -> send back to queue
    console.log({ validMpesaRes })
}

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
