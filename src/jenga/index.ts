import RabitMq from "./config/rabitMq";
import { write } from "./config/firebase";
import * as dotenv from "dotenv";
import * as uuid from "uuid";

dotenv.config();

RabitMq("jenga", "receive", null, (value: any) => {
  console.log(
    "Last ====================>>>>>>>>>",
    typeof value,
    value,
    JSON.parse(value),
    typeof JSON.parse(value)
  );
  const id: string = uuid.v4();
  write(id, JSON.parse(value));
});
