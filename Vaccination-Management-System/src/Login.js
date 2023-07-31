import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { FooterEnd } from './FooterEnd';


export const LoginYup = () => {
  const [error, setError] = useState('');
  const [error1, setError1] = useState('');
  const navigate=useNavigate();
  return (
    <div className='login-container' style={{backgroundImage:"url('https://images.unsplash.com/photo-1618015358954-344302f421a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80')", backgroundSize:"cover", backgroundPosition:"top"}}>
      <Header></Header>
      <div className='login-form' style={{height:"600px", padding:"70px"}}>
        <div>
        <h1>Login Page</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Invalid email address';
            }
            if (!values.password) {
              errors.password = 'Required';
            }
            return errors;
          }}
          onSubmit={(values) =>
            axios
              .get('http://localhost:8000/users' + '?email=' + values.email + '&password=' + values.password)
              .then((res) => {
                if (values.email === 'admin@calibrum.com' && values.password === 'Admin@12345') {
                  localStorage.setItem('email', values.email);
                  setError1('Login Successful');
                   setTimeout(()=>navigate('/adminDashboard'), 2000);
                } else if (res.data.length > 0) {
                  setError1('Login successful');
                  localStorage.setItem('email', values.email);
                  setTimeout(()=>navigate('/Dashboard'), 2000);
                } else {
                  setError('Login failed with incorrect inputs');
                }
              })
          }
        >
          {({ isSubmitting }) => (
            <Form>
              <div className='input-field'>
                <AccountCircleIcon />
                <Field  className="FieldLogin" style={{height:"40px",padding:"7px", borderRadius:"10px", fontSize:"17px", margin:'10px'}} type='email' name='email' placeholder='Email' />
              </div>
              <ErrorMessage style={{color:"red"}} className='error-message' name='email' component='div' />
              <div className='input-field'>
                <KeyIcon />
                <Field  className="FieldLogin" style={{height:"40px",padding:"7px", borderRadius:"10px", fontSize:"17px", margin:'10px'}} type='password' name='password' placeholder='Password' />
              </div>
              <ErrorMessage style={{color:"red"}}  className='error-message' name='password' component='div' />
              <br />
              <button  style={{height:"40px", width:"120px",marginBottom:'20px', backgroundColor:"aquamarine", borderRadius:"20px", fontSize:"large"}} type='submit' disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
        <div>
          <a  className='ahrefLogin' style={{textDecoration:"none",color:"black",fontWeight:"400px", margin:"50px", fontSize:"large"}} href='/Registration'>Don't have an account? {" "}</a>
        <a  className='ahrefLogin' style={{textDecoration:"none",color:"black",fontWeight:"400px", margin:"50px", fontSize:"large"}} href='/ForgetPassword'> Forget password?</a>
        </div>
        <div className='status' style={{color:"red", fontSize:"xx-larger", margin:"15px"}}>{error}</div>
        </div>
      <div className='last' style={{color:"green", fontSize:"xx-larger", margin:"15px"}}>{error1}</div>
  </div>
  <Footer></Footer>
  <div>
    <FooterEnd></FooterEnd>
  </div>
    </div>
  );
};