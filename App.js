import {useRef, useState} from 'react';
import {useEffect} from 'react';
import './App.css';
import {signup, useAuth,logOut, login} from "./firebase"
import {auth} from './firebase';
import {BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter} from 'react-router-dom';

export default function Signin(){
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  async function handleSignup(){
    setLoading(true);
    try{
      await signup(emailRef.current.value, passwordRef.current.value);
    }
    catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogout(){
    setLoading(true);
    try{
      await logOut();
    }
    catch{
      alert("error");
    }

    setLoading(false);
  }

  async function handleSignin(){
    setLoading(true);
    try{
      await login(emailRef.current.value, passwordRef.current.value);
    }
    catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (

    
    <div id = "main">
     
      <div> CURRENTLY LOGGED IN AS {currentUser?.email} </div>
      <div id = "fields">
      <input ref={emailRef} placeholder ="Email" />
      <input ref={passwordRef} type = "password" placeholder = "Password" />
     

      </div>
      <button disabled ={loading || currentUser!=null} onClick={handleSignup}>Sign UP</button>
      <button disabled ={loading || !currentUser} onClick={ handleLogout} > Log Out </button>
      <button disabled ={loading || currentUser} onClick={ handleSignin} > Login in </button>


    </div>
    

  );
}