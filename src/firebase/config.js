// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore, serverTimestamp } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG2mVhSdHWqvt6WhZ8d10BCfQEDpjG6E8",
  authDomain: "firegram-354d1.firebaseapp.com",
  projectId: "firegram-354d1",
  storageBucket: "firegram-354d1.appspot.com",
  messagingSenderId: "83547783400",
  appId: "1:83547783400:web:fde1c6a3450c7fb4acc95d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
const db = getFirestore(app);

const timestamp = serverTimestamp;

export {storage, timestamp, db}