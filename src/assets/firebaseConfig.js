import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "yourAPIkey",
    authDomain: "yourauthDomain",
    projectId: "yourprojectId",
    storageBucket: "yourstorageBucket",
    messagingSenderId: "yourmessagingSenderId",
    appId: "yourAppId"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
