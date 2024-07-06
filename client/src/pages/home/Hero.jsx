import React from 'react';
import './Hero.css';
import hero1 from '../../assets/hero1.jpg';
import formphone from '../../assets/formphone.png';
import Login from './login/login';
import { Link } from 'react-router-dom';


function Hero() {
 

  return (
   


      <section className='hero'>


        <div className="herocard">
          <p className='formhero'>
            <h2>Tranquil Oasis Apartments</h2>
            <i>Indulge in Daily Elegance</i>
            <br />
            <b>Find Your Ideal Living Space</b>
          </p>
        </div>

        <div className='loginbtn'>    
       <button><Link to="Login">Log in</Link></button>
       <button><Link to="SignIn">Sign in</Link></button>
       </div>

      </section>

  );
}

export default Hero;
