// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8mxhB18mHPPQCa4HnkL1Ppg7WfNTiBxI",
  authDomain: "b7a11-toy-marketplace.firebaseapp.com",
  projectId: "b7a11-toy-marketplace",
  storageBucket: "b7a11-toy-marketplace.appspot.com",
  messagingSenderId: "35847035663",
  appId: "1:35847035663:web:e3999ff17ac2822679bc7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;