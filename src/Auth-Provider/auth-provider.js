import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyB-ScNAsZ5HBzFsfVYmHBM73BmKpiaCnj4",
  authDomain: "list-english.firebaseapp.com",
  databaseURL: "https://list-english-default-rtdb.firebaseio.com",
  projectId: "list-english",
  storageBucket: "list-english.appspot.com",
  messagingSenderId: "291998724093",
  appId: "1:291998724093:web:6773166bbe021d0714b394",
  measurementId: "G-45JR6S15GJ",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const starCountRef = ref(db, "list");
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});
