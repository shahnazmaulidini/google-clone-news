import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAkFg1loHJ3g1OWxYYXzE4S3a3vvV1VbNg",
    authDomain: "try-clone-de8e0.firebaseapp.com",
    projectId: "try-clone-de8e0",
    storageBucket: "try-clone-de8e0.appspot.com",
    messagingSenderId: "226565128864",
    appId: "1:226565128864:web:fe91820a98dd3f855e7fc5"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();