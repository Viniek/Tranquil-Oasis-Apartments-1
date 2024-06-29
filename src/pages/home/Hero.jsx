import React from 'react'
import './Hero.css'
import hero1 from '../../assets/hero1.jpg'

function Hero() {
  return (
    <div>
     <div className='hero'>
     {/* <img src={hero1}/> */}
    <p><i>Indulge in Daily Elegance</i><br/><b>Find Your Ideal Living Space</b>
</p>
<div className='schedule_a_visit'>
<h2>Schedule a Visit</h2>
  <form>
    <div className='firstname'>   
      <input type='text'name="firstname" id="firstname" placeholder="First name eg.vee...."/>
    </div>   

    <div className='formtop'>   
      <input type='text'name="lastname" id="lastname" placeholder='lastname eg.njeri...'/>  
      <input type='text'name="emailaddress" id="emailaddress"placeholder='email address...'/>
  </div>

    <div className='formbottom'>
      <input type='int'name="phonenumber" id="phonenumber"placeholder='Phone number eg.+254743209259...'/>      
      <input type='date'name="Date of visit" id="Date of visit" placeholder='Date of visit'/>
    </div>

    <div className='firstname'>
     {/* <textareaplaceholder></textareaplaceholder>="message"</textarea> */}
     <textarea name="message"  cols="40" rows="30" placeholder='message'></textarea>
    </div>
    
  </form>
</div>
    </div>   
    </div>
  )
}

export default Hero