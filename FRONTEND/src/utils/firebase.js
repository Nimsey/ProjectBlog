// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "writers-blog-c7da5.firebaseapp.com",
    projectId: "writers-blog-c7da5",
    storageBucket: "writers-blog-c7da5.appspot.com",
    messagingSenderId: "896307468696",
    appId: "1:896307468696:web:c1e8312c83c7adc9d7b3ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;