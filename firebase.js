// Import the functions you need from the SDKs you need
import {useState} from 'react';
import {initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { useDebugValue, useEffect } from 'react';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeTn7HVXjKq3Zad1JQgIpossZfj1PSxl0",
  authDomain: "online-phar.firebaseapp.com",
  projectId: "online-phar",
  storageBucket: "online-phar.appspot.com",
  messagingSenderId: "589597086290",
  appId: "1:589597086290:web:9597b836fbf68fcba1458b"
};

// hook to update the real time states


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export {app};
export {auth};
export function signup(email,password) {
  return createUserWithEmailAndPassword(auth, email,password);
}
export function useAuth(){
  const [currentUser, setcurrentUser] = useState();
  useEffect (() =>{
  const usesub = onAuthStateChanged(auth, user => setcurrentUser(user));
  return usesub;
  }, [])

  return currentUser;
}
export function logOut(){
  return signOut(auth);
}

export function login(email, password){
  return signInWithEmailAndPassword(auth, email, password);
}
export default db;
