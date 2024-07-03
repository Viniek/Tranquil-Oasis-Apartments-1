import React from 'react';
import './Contact.css';
import formvideo from '../../assets/contactformvideo.mp4';
import formpic from "../../assets/formpic.svg"

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
      <input type='text' name="fullname" placeholder="Enter your Full name..."/>
      <label for="emailaddress">Email Address</label>
      <input type="text" name="emailaddress" placeholder="Enter your email address..."/>
      <label for="phonenumber">Phone Number</label>
      <input type="number" name="phonenumber" placeholder='Enter your phone number...'/>
      <label for="date">Date of Visit</label>
      <input type="date" name="date" placeholder="Enter date of visit..."/>
      <label for="messageus">Leave a Message</label>
      <textarea name="Message" id="textarea" cols="30" rows="10" placeholder='message...'></textarea>

      </div>
      </section>
    </div>
  );
}

export default Form;
