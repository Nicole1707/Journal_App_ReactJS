import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
 
 
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSErFc3KR4ipXpdNfHuo_-f5o1idnbWsM",
    authDomain: "journal-app-reactjs-ee501.firebaseapp.com",
    projectId: "journal-app-reactjs-ee501",
    storageBucket: "journal-app-reactjs-ee501.appspot.com",
    messagingSenderId: "820723611305",
    appId: "1:820723611305:web:6ab2a2a335eb7cdfa41bb8"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
const db = getFirestore();
 
const googleAuthProvider = new GoogleAuthProvider();
 
export{
    db,
    googleAuthProvider
}