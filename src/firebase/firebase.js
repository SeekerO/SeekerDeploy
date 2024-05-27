// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBq1DstQbkvBn65u-puuRoGvCNod19OOXM",
  authDomain: "portoflio-seekerdev.firebaseapp.com",
  databaseURL:
    "https://portoflio-seekerdev-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portoflio-seekerdev",
  storageBucket: "portoflio-seekerdev.appspot.com",
  messagingSenderId: "25888819598",
  appId: "1:25888819598:web:b9a135d7f5c067306ffcdf",
  measurementId: "G-TCK24Y5XH5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
