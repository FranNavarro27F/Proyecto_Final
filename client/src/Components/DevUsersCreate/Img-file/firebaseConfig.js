
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAEv2lVqV6rJp4N4dq0ojMcfmfa_-y8BSA",
    authDomain: "proyecto-final-ebe50.firebaseapp.com",
    projectId: "proyecto-final-ebe50",
    storageBucket: "proyecto-final-ebe50.appspot.com",
    messagingSenderId: "124523456314",
    appId: "1:124523456314:web:cb30eb92424aa2d7d55203"
  };
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;