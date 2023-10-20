// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCelUazFpXw9-6r69XwIqw04IAnOUzOZZs",
  authDomain: "phone-website-5b4a2.firebaseapp.com",
  projectId: "phone-website-5b4a2",
  storageBucket: "phone-website-5b4a2.appspot.com",
  messagingSenderId: "676653607662",
  appId: "1:676653607662:web:dcce6d999396183804a1ff",
  measurementId: "G-5CJLNBLZJ4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
