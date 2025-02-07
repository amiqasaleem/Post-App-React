import React from 'react'
import RegisterForm from '../Components/RegisterForm'
import { auth,getAuth,createUserWithEmailAndPassword } from '../Config/firebase'

const RegisterPage = () => {
  const register=(a)=>{
    createUserWithEmailAndPassword(auth, a.email, a.password)
  .then((userCredential) => {
   
    const user = userCredential.user;
    console.log("user registered",user);
    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
     
  }
  return (
    <div>
      <h1 style={{textAlign:'center', margin:'1vw', color:'purple'}}>Sign up</h1>
      <RegisterForm register={register}/>
    </div>
  )
}
export default RegisterPage;