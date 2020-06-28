import * as firebase from "firebase";
import * as dotenv from "dotenv";

dotenv.config();

const {
  API_KEY,
  AUTHDOMAIN,
  DATABASEURL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} = process.env;

//Firebase config variables
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTHDOMAIN,
  databaseURL: DATABASEURL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

// initialize app
const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;

// Write data to realtime database
export const write = (id: any, data: any) => {
  Firebase.database()
    .ref("/" + id)
    .set(data);
};
