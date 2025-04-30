// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHY8uznRqdaZWK5YXwHGe5n0q4AhZEUVY",
    authDomain: "authentication-react-655d6.firebaseapp.com",
    projectId: "authentication-react-655d6",
    storageBucket: "authentication-react-655d6.firebasestorage.app",
    messagingSenderId: "570305209663",
    appId: "1:570305209663:web:00e58336d3307f66fd9f8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);