import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { addUser } from './CrudCmps';
import { useNavigate } from 'react-router-dom';

export default()=>{
    const [msg, setMsg]=useState("");
    const nav=useNavigate();
    return(
  <div style={{margin:"10%"}}>
    <h1>Registration Page</h1>
    <Formik
      initialValues={{firstname:'',lastname:'', email: '', password: '',  confirmPassword:'', phone:'' }}
      validate={values => {
        const errors = {};
        if(!values.firstname)
        {
            errors.firstname='required';
        }
        else if(values.firstname.length<3)
        {
            errors.firstname='min of 3 characters Required';
        }
        if(!values.lastname)
        {
            errors.lastname='required';
        }
        else if(values.lastname.length<3)
        {
            errors.lastname='min of 3 characters Required';
        }
        if(!values.phone)
        {
            errors.phone='required';
        }
        else if(!(values.phone.match(/^(\+\d{1,3}[- ]?)?\d{10}$/) && ! (values.phone.match(/0{5,}/))) )
        {
            errors.phone="invalid mobile number"
        }
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) )
        {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = 'Required';
        }
        else if(!/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/.test(values.password))
        {
            errors.password="1 Uppercase,1 Lowercase,1 Alphabet,1 Number, length:8";
        }
        if(!values.confirmPassword)
        {
            errors.confirmPassword="Required";
        }
        else if(values.confirmPassword && values.password!=values.confirmPassword)
        {
            errors.confirmPassword="Passwords do not match";

        }
        return errors;
      }}
      onSubmit={(values)=>{
        addUser(values);
       values.firstname="";
       values.lastname="";
       values.email="";
       values.password="";
       values.confirmPassword="";
       values.phone="";
       setMsg("REgistration Successful");
       nav('/GetAllUsers');
      }}
      onReset={(values)=>{
        values.firstname="";
       values.lastname="";
       values.email="";
       values.password="";
       values.confirmPassword="";
       values.phone="";
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="firstname" placeholder="Firstname"/>
          <ErrorMessage style={{color:"red"}}  name="firstname" component="div" />
          <br></br>
          <Field type="text" name="lastname" placeholder="Lastname"/>
          <ErrorMessage style={{color:"red"}}  name="lastname" component="div" />
          <br></br>
          <Field type='text' name="phone" placeholder="Mobile" />
          <ErrorMessage style={{color:"red"}} name="phone" component="div" />
          <br></br>
          <Field type="email" name="email" placeholder="Email"/>
          <ErrorMessage style={{color:"red"}} name="email" component="div" />
          <br></br>
          <Field type="password" name="password" placeholder="Password"/>
          <ErrorMessage style={{color:"red"}} name="password" component="div" />
          <br></br>
          <Field type="password" name="confirmPassword" placeholder="ConfirmPassword" />
          <ErrorMessage style={{color:"red"}} name="confirmPassword" component="div" />
          <br></br>
          <button type='reset' >Reset</button>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
    <h3 style={{color:"green"}}>{msg}</h3>
  </div>
    )
      }
      
      {/*import React, { Fragment, useState } from "react";
import { addUser } from "./CrudCmps";

export default()=>
{   const [data, setData]=useState({
    username:"",
    name:"",
    email:"",
    phone:""
})
    const handleChange=(e)=>
    {
        setData({...data, [e.target.name]:[e.target.value]})
    }
    const handleReset=(e)=>
    {
        setData({...data,[data.username]:""});
        setData({...data,[data.name]:""});
        setData({...data,[data.email]:""});
        setData({...data,[data.phone]:""});
    }
    const handleSubmit=()=>
    {
        const d=
        addUser(data);
    }
    return(
        <Fragment>
            <form onSubmit={handleSubmit}>
            <input type="name" name="username" onChange={handleChange} value={data.username} placeholder="Username" required></input><br></br>
            <input type="name" name="name" onChange={handleChange} value={data.name} placeholder="Name" required></input><br></br>
            <input type="email" name="email" onChange={handleChange} value={data.email} placeholder="Email-Id" required></input><br></br>
            <input type="tel" name="phone" onChange={handleChange} value={data.phone} placeholder="phone" required></input><br></br>
            <button type="reset" onClick={handleReset}>Reset</button>
            <button type="submit" value="submit">Submit</button>
            </form>
        </Fragment>
    )
}



*/}

// Render Prop

