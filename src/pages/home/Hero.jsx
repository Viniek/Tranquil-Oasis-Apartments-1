import React from 'react'
import './Hero.css'
import hero1 from '../../assets/hero1.jpg'
import formphone from '../../assets/formphone.png'

function Hero() {
     let image= <formphone/>
  return (
    <div>
     <div className='hero'>
     
    <div className="herocard">
    <p className='formhero'><i>Indulge in Daily Elegance</i><br/><b>
      Find Your Ideal Living Space</b>
    </p>
    </div>
    

<section className='schedule_a_visit'>
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
      <input type='number'name="phonenumber" id="phonenumber"placeholder={<formphone/>}/>      
      <input type='date'name="Date of visit" id="Date of visit" placeholder='Date of visit'/>
    </div>

    <div className='firstname'>
     {/* <textareaplaceholder></textareaplaceholder>="message"</textarea> */}
     <textarea name="message"  cols="50" rows="7" placeholder='message'></textarea>
    </div>
    <button type='submit'>Submit </button>
  </form>
</section>
    </div>   
    </div>
  )
}

export default Hero