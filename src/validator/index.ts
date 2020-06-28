// Client -> send request to PORT -> 8000
// 8000 -> PORT 
import Joi from 'joi';
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
    const { email, password, paymentMethod } = req.body;
    const schema = Joi.object().keys({
        email:  Joi.string().email().required(),
        password: Joi.string().regex(/^[a-Z0-9]{6-9}$/).required(),
        paymentMethod: Joi.string().valid('mpesa', 'jenga').required(),
    })

    const result = Joi.validate({ email, password, paymentMethod}, schema)

    console.log({ result })

    writeUserData(1);
    RabitMq("validatorQueue", "receive", null, (value: any) => {
        console.log("Value", value);
    });
    res.send("value");
});

app.listen(PORT, () => {
  console.log("App listening to port" + PORT);
});

