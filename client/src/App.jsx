import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Home from './pages/home/Home'
import Properties from './pages/properties/Properties'
import Contact from './pages/contactus/Contact'
import Aboutus from './pages/aboutus/Aboutus'
import Footer from './Components/Footer'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './pages/home/login/login'
import Signin from './pages/home/Signin'

function App() {
 

  return (
    <>
 <BrowserRouter>
        <Header />
        <Routes>         
          <Route path='/Login' element={<Login />}/>
          <Route path='/Signin' element={<Signin />}/>
          <Route path="/" element={<Home />} />
          <Route path="/Properties" element={<Properties />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Aboutus" element={<Aboutus />} />       
        </Routes>
        <Footer />
      </BrowserRouter>    
    
    


    </>
  )
}

export default App
