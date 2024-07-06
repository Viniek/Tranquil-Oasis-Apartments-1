import React from 'react';
import './Contact.css';
import formvideo from '../../assets/contactformvideo.mp4';
import formpic from "../../assets/formpic.svg"
import { useFormik } from 'formik';

function Form() {
  const formik=useFormik({
    initialValues:{
      fullname:"",
      emailaddress:"",
      phonenumber:"",
      date:"",
      Message:""
    },
    onSubmit:(formState)=>{
      console.log("You Submitted:")
      console.log(formState)
    },
  validate: (formValues)=>{
    let errors={};
    if (formValues.fullname==""){
      errors.fullname="full name is required...";
    }
    return errors;
  }


  })
  console.log(formik.values)


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
        <form onSubmit={formik.handleSubmit}>
        <label for="fullname">Full Name</label>
      <input type='text' name="fullname"
       placeholder="Enter your Full name..."
        value={formik.values.fullname} 
        onChange={formik.handleChange}/>
        {formik.errors.fullname&& <p>{formik.values.fullname}</p>}


      <label for="emailaddress">Email Address</label>
      <input type="text" name="emailaddress"
       placeholder="Enter your email address..."
      value={formik.values.emailadress}
       onChange={formik.handleChange}/>


      <label for="phonenumber">Phone Number</label>
      <input type="number"
       name="phonenumber"
       placeholder='Enter your phone number...' 
      value={formik.values.phonenumber} 
      onChange={formik.handleChange}/>


      <label for="date">Date of Visit</label>
      <input type="date"
       name="date"
       placeholder="Enter date of visit..." 
      value={formik.values.date}
       onChange={formik.handleChange}/>

      <label for="messageus">Leave a Message</label>
      <textarea name="Message" id="textarea" cols="30" rows="10" placeholder='message...' value={formik.values.message} onChange={formik.handleChange}></textarea>
      <button>Submit</button>
      </form>
      </div>
      </section>
    </div>
  );
}

export default Form;
