
import React from 'react'
import LoginForm from '../Components/LoginForm';
import {auth, getAuth, signInWithEmailAndPassword} from '../Config/firebase';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate()
  const login = (values)=> {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('User is logged in', user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.message);
        
      });
  }

  return (

    <div>
      <h1 style={{textAlign:'center', margin:'1vw', color:'purple'}}>Login</h1>
      <LoginForm login={login}/>
      
    </div>
  
  )
}
export default LoginPage;
