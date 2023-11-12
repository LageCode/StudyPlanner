import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDMm1WoS0XhKuF6ICpPEdsk2y73RC9CYuU",
  authDomain: "studyplanner-a5b7d.firebaseapp.com",
  projectId: "studyplanner-a5b7d",
  storageBucket: "studyplanner-a5b7d.appspot.com",
  messagingSenderId: "126754174226",
  appId: "1:126754174226:web:9ca68d0a6fe5ee3170afcb",
  measurementId: "G-PSWYLZBGNJ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();