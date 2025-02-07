import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from '../Components/AppLayout'
import RegisterPage from '../Pages/RegisterPage'
import LoginPage from '../Pages/LoginPage'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import About from '../Pages/About'
import Profile from '../Pages/Profile'
import Services from '../Pages/Services'
import PageNotFound from '../Pages/PageNotFound'
import { getAuth,auth,onAuthStateChanged } from './firebase'
import { useEffect, useState } from 'react'
import { use } from 'react'


const AppRouter = () => {
  const [isUser,setUser] = useState(false)
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
      
        const uid = user.uid;
        console.log('user exist',user);
        setUser(true)
        
        // ...
      } else {
        console.log('User not found');
        setUser(false)
        
      }
    });
  },[])
  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<AppLayout><Home/></AppLayout>}/>
            <Route path='/about' element={<AppLayout><About/></AppLayout>}/>
            <Route path='/contact' element={<AppLayout><Contact/></AppLayout>}/>
            <Route path='/services' element={<AppLayout><Services/></AppLayout>}/>
            <Route path='/profile' element={<AppLayout><Profile/></AppLayout>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        </BrowserRouter>
    </>
    
  )
}


export default AppRouter;