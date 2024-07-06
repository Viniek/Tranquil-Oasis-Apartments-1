import React from 'react'
import './login.css'
import { useFormik } from 'formik';

function Login() {
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
          }else if(formValues.firstname.length<3){
            errors.firstname="Must have 3 characters or more..."
          }


          if (formValues.lastname === "") {
            errors.lastname = "Last name  required...";
          }else if(formValues.lastname.length<3){
            errors.lastname="Must have 3 characters or more"
          }


          if (formValues.emailaddress === "") {
            errors.emailaddress = "Email address required"; 
          }else if (!formValues.emailaddress.indexOf('@')){
            errors.email="Enter a Valid email..."
          }


          if (formValues.phonenumber === "") {
            errors.phonenumber = "Phone number  required";
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


          <h2>Log In</h2>
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
            
              <input type='text' name="lastname" id="lastname"  placeholder='Last name eg.njeri...' 
              value={formik.values.lastname} onChange={formik.handleChange}
              onBlur={formik.handleBlur}
                />
              {formik.touched.lastname &&formik.errors.lastname && <p className="errorp">{formik.errors.lastname}</p>} 

              <input type='text'  name="emailaddress" id="emailaddress" placeholder='Email address...'
              value={formik.values.emailaddress}  onChange={formik.handleChange}     onBlur={formik.handleBlur}  />           
              {formik.touched.emailaddress &&formik.errors.emailaddress && <p className="errorp">{formik.errors.emailaddress}</p>} 
           
           
              <input
                type='number' name="phonenumber" id="phonenumber" placeholder='Phone number'
                value={formik.values.phonenumber}  onChange={formik.handleChange} />                 
              {formik.errors.phonenumber && <p className="errorp">{formik.errors.phonenumber}</p>} 


              <input
                type='date' name="dateofvisit" id="dateofvisit" placeholder='Date of visit' 
                value={formik.values.dateofvisit} onChange={formik.handleChange} />             
              {formik.errors.dateofvisit && <p className="errorp">{formik.errors.dateofvisit}</p>} 
           
            <div className='message'>
              <textarea name="message" cols="50" rows="5" placeholder='Message'
                value={formik.values.message} onChange={formik.handleChange}
                    onBlur={formik.handleBlur}>
                    {formik.touched.message&&formik.errors.message && <p className="errorp">{formik.errors.message}</p>} 
             </textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
          </section>
   </>
  )
}

export default Login