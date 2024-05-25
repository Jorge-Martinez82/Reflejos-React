import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyATvuZE4j2DUFte-8w76M921nC4EpXDDWc",
    authDomain: "reflejosest.firebaseapp.com",
    projectId: "reflejosest",
    storageBucket: "reflejosest.appspot.com",
    messagingSenderId: "696976143284",
    appId: "1:696976143284:web:44c4f404c0d27240b878e1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
