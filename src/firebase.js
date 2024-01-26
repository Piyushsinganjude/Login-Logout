// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAAsdnlegu4p-k9MHkppp5VGvUvhJKo1co",
  authDomain: "login-logout-7ed47.firebaseapp.com",
  projectId: "login-logout-7ed47",
  storageBucket: "login-logout-7ed47.appspot.com",
  messagingSenderId: "123928633766",
  appId: "1:123928633766:web:5b1bb6d0e988e8967e6f67",
  measurementId: "G-LW5GH72Y6S"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app,auth};

