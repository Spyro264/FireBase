// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTYx7-3vK4W_PPHvMbNgZN5hdWDyT073Q",
  authDomain: "fir-course-38e9b.firebaseapp.com",
  projectId: "fir-course-38e9b",
  storageBucket: "fir-course-38e9b.firebasestorage.app",
  messagingSenderId: "985562857388",
  appId: "1:985562857388:web:02528060139750d3d5c409",
  measurementId: "G-K17BCL222M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
