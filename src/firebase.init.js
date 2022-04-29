// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZpTL84-hOGMLYfJ3N9DfWrxvN2Gb5LPk",
    authDomain: "warehouse-management-website.firebaseapp.com",
    projectId: "warehouse-management-website",
    storageBucket: "warehouse-management-website.appspot.com",
    messagingSenderId: "17129320472",
    appId: "1:17129320472:web:cb385c53feb656be49936d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;