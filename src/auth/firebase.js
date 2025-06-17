// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBXQ9EzJXzA4N9LDzI1fvaayjmBbquHxQ",
  authDomain: "prueba-auth-f8cf1.firebaseapp.com",
  projectId: "prueba-auth-f8cf1",
  storageBucket: "prueba-auth-f8cf1.firebasestorage.app",
  messagingSenderId: "675421160",
  appId: "1:675421160:web:1d6ec23d40040c1030a25d",
  measurementId: "G-4JC0R4DZMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

export function crearUsuario(email, password){
    return(
        new Promise((res, rej) => {
             signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed up 
            console.log("Credenciales", userCredential)
            const user = userCredential.user;
            console.log(user)
            res(user)
            })
            .catch((error) => {
            console.log(error.code, error.message)
            const errorCode = error.code;
            const errorMessage = error.message;
            rej(error)
            });
        })
    )
}

export function iniciarSesionUsuario(email, password){
    return(
        new Promise((res, rej) => {
             signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed up 
            console.log("Credenciales", userCredential)
            const user = userCredential.user;
            console.log(user)
            res(user)
            })
            .catch((error) => {
            console.log(error.code, error.message)
            const errorCode = error.code;
            const errorMessage = error.message;
            rej(error)
            });
        })
    )
}




