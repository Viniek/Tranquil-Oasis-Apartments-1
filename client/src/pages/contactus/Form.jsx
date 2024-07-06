import React from 'react';
import './Contact.css';
import formvideo from '../../assets/contactformvideo.mp4';
import formpic from "../../assets/formpic.svg"
import { Formik, useFormik } from 'formik';

function Form() {
  return (
    <div className="contactform">
      <video className="background-video" autoPlay loop muted>
        <source src={formvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <section className='cf'>
      <img src={formpic}/>
      <div className="contactform">

        <h2>SpeakTo Us</h2>
        <label for="fullname">Full Name</label>
      <input type='text' name="fullname" placeholder="Enter your Full name..." value={Formik.values.fullname} onChange={formik.handleChange}/>
      <label for="emailaddress">Email Address</label>
      <input type="text" name="emailaddress" placeholder="Enter your email address..."value={Formik.values.emailadress} onChange={formik.handleChange}/>
      <label for="phonenumber">Phone Number</label>
      <input type="number" name="phonenumber" placeholder='Enter your phone number...' value={Formik.values.phonenumber} onChange={formik.handleChange}/>
      <label for="date">Date of Visit</label>
      <input type="date" name="date" placeholder="Enter date of visit..." value={Formik.values.date} onChange={formik.handleChange}/>
      <label for="messageus">Leave a Message</label>
      <textarea name="Message" id="textarea" cols="30" rows="10" placeholder='message...' value={Formik.values.message} onChange={formik.handleChange}></textarea>

      </div>
      </section>
    </div>
  );
}

export default Form;
