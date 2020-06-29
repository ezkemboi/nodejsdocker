import RabitMq from "./config/rabitMq";
import { write } from "./config/firebase";
import * as dotenv from "dotenv";
import * as uuid from "uuid";

dotenv.config();

RabitMq("service_mpesa", "receive", null, (value: any) => {
  const id: string = uuid.v4();
  write(id, value);
  console.log(value);
});
