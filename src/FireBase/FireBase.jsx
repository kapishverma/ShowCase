import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCBthjfSK5R2UzfDfEREGdLWG370J37qLs",
    authDomain: "photofolio-1e50c.firebaseapp.com",
    projectId: "photofolio-1e50c",
    storageBucket: "photofolio-1e50c.appspot.com",
    messagingSenderId: "527573934005",
    appId: "1:527573934005:web:0d85c704059b7c12c183fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
