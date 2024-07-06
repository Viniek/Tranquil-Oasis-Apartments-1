import React from 'react'
import './Hero.css'
import hero1 from '../../assets/hero1.jpg'
import formphone from '../../assets/formphone.png'
import { useFormik } from 'formik'

function Hero() {
const formik=useFormik({
  initialValues:{
    firstname:null,
    lastname:null,
    emailaddress:null,
    phonenumber:null,
  dateofvisit:null,
  }
})
console.log(formik.values)

     let image= <formphone/>
  return (
    <section className='homehero'>
     <div className='hero'>
     
    <div className="herocard">
    
    <p className='formhero'>  <h2>Tranquil Oasis Apartments</h2><i>Indulge in Daily Elegance</i><br/><b>
      Find Your Ideal Living Space</b>
    </p>
    </div>
    

<section className='schedule_a_visit'>
<h2>Schedule a Visit</h2>
  <form>
    <div className='firstname'>   
      <input type='text'name="firstname" id="firstname" placeholder="First name eg.vee...." value={formik.values.firstname} onChange={formik.handleChange}/>
    </div>   

    <div className='formtop'>   
      <input type='text'name="lastname" id="lastname" placeholder='lastname eg.njeri...'/>  
      <input type='text'name="emailaddress" id="emailaddress"placeholder='email address...'value={formik.values.lastname} onChange={formik.handleChange}/>
  </div>

    <div className='formbottom'>
      <input type='number'name="phonenumber" id="phonenumber"placeholder={<formphone/>}/>      
      <input type='date'name="dateofvisit" id="dateofvisit" placeholder='Date of visit' value={formik.values.dateofvisit} onChange={formik.handleChange}/>
    </div>

    <div className='firstname'>
     {/* <textareaplaceholder></textareaplaceholder>="message"</textarea> */}
     <textarea name="message"  cols="50" rows="7" placeholder='message' value={formik.values.message}onChange={formik.handleChange}></textarea>
    </div>
    <button onClick={handleSubmit}>Submit </button>
  </form>
</section>
    </div>   
    </section>
  )
}

export default Hero