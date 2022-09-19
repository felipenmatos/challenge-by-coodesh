import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCDsJQrAZNZ-MW57GzqRpw9q_uOaPMGtH0",
  authDomain: "english-list.firebaseapp.com",
  databaseURL: "https://english-list-default-rtdb.firebaseio.com",
  projectId: "english-list",
  storageBucket: "english-list.appspot.com",
  messagingSenderId: "972192123931",
  appId: "1:972192123931:web:d86bb3b87de1b5f839bcbe",
  measurementId: "G-203BXKE5G1",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const starCountRef = ref(db, "list");
