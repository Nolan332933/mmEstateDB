// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mmestatedb.firebaseapp.com",
  projectId: "mmestatedb",
  storageBucket: "mmestatedb.appspot.com",
  messagingSenderId: "305658440488",
  appId: "1:305658440488:web:3350840e1ecf09ca0f7e1d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);