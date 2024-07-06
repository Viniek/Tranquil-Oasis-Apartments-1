import React from 'react';
import './Signup.css';
import { useFormik } from 'formik';

function Signup() {
    const formik = useFormik({
        initialValues: {
          firstname: "",
          lastname: "",
          emailaddress: "",
          phonenumber: "",
          dateofvisit: "",
          message: "" 
        },
        onSubmit: (formState) => {
          console.log("You Submitted:");
          console.log(formState);
        },
        validate: (formValues) => {
          let errors = {};
          if (formValues.firstname === "") {
            errors.firstname = "First Name required..";
          } else if (formValues.firstname.length < 3) {
            errors.firstname = "Must have 3 characters or more...";
          }

          if (formValues.lastname === "") {
            errors.lastname = "Last name required...";
          } else if (formValues.lastname.length < 3) {
            errors.lastname = "Must have 3 characters or more";
          }

          if (formValues.emailaddress === "") {
            errors.emailaddress = "Email address required"; 
          } else if (!formValues.emailaddress.includes('@')) {
            errors.emailaddress = "Enter a valid email...";
          }

          if (formValues.phonenumber === "") {
            errors.phonenumber = "Phone number required";
          }

          if (formValues.dateofvisit === "") {
            errors.dateofvisit = "Date of visit is required"; 
          }

          return errors;
        }
      });

  return (
   <>
    <section className='schedule_a_visit'>
      <h2>Sign Up</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className='firstname'>
          <input
            type='text'
            name="firstname"
            id="firstname"
            placeholder="First name eg.vee...."
            value={formik.values.firstname} 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstname && formik.errors.firstname && <p className="errorp">{formik.errors.firstname}</p>} 
        </div>
        
    

        <div className='formfield'>
          <input 
            type='text'  
            name="emailaddress" 
            id="emailaddress" 
            placeholder='Email address...'
            value={formik.values.emailaddress}  
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
          />           
          {formik.touched.emailaddress && formik.errors.emailaddress && <p className="errorp">{formik.errors.emailaddress}</p>} 
        </div>
        
        <div className='formfield'>
          <input 
            type='text' 
            name="password" 
            id="password"  
            placeholder='Enter your password..' 
            value={formik.values.lastname} 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />              
          {formik.touched.password && formik.errors.password && <p className="errorp">{formik.errors.password}</p>} 
        </div>

        
        
        <button type="submit">Submit</button>
      </form>
    </section>
   </>
  );
}

export default Signup;
