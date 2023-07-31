import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { FooterEnd } from './FooterEnd';
import MailIcon from '@mui/icons-material/Mail';
import KeyIcon from '@mui/icons-material/Key';
import VpnKeyIcon from '@mui/icons-material/VpnKey';


export const ForgetPassword = () => {
    const navigate=useNavigate();
  const initialValues = { email: '', password: '', confirmPassword: '' };
  const [msg, setMsg]=React.useState('');
  const [msgValid, setMsgValid]=React.useState('');

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required').min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const { data: users } = await axios.get('http://localhost:8000/users');
      const user = users.find((u) => u.email === values.email);
   console.log(user,"hi");
      if (!user) {
        setMsg('Email not found. Please enter a valid email address.');
      } else {
        const response = await axios.put(`http://localhost:8000/users/${user.id}`, {
          // email: user.email,
          // password: values.password,
          // username: user.username,
          // confirmPassword:values.Password,
          // dob: user.dob,
          // phone:user.phone,
          // isAdmin:user.isAdmin,
          // fathername:user.fathername,
          // mothername:user.mothername,
          // isSlotBooked:user.isSlotBooked,
          // isVaccinationCompleted:user.isVaccinationCompleted,
          email: user.email,
          password: values.password,
          username: user.username,
          confirmPassword: values.password,
          age:user.age ,
          phone: user.phone ,
          isAdmin:user.isAdmin  ,
          fathername:user.fathername  ,
          mothername:user.mothername  ,
          fatherAge: user.fatherAge ,
          motherAge: user.motherAge ,
          userSlotBooked:user.userSlotBooked  ,
          userSlotDate: user.userSlotDate ,
          userSlotTime: user.userSlotTime ,
          userSlotLocation:user.userSlotLocation ,
          fatherSlotBooked:user.fatherSlotBooked  ,
          fatherSlotDate: user.fatherSlotDate ,
          fatherSlotTime: user.fatherSlotTime ,
          fatherSlotLocation:user.fatherSlotLocation  ,
          motherSlotBooked:user.motherSlotBooked  ,
          motherSlotDate: user.motherSlotDate ,
          motherSlotTime: user.motherSlotTime ,
          motherrSlotLocation:user.motherrSlotLocation  ,
          userVacStatus: user.userVacStatus ,
          fatherVacStatus: user.fatherVacStatus ,
          motherVacStatus: user.motherVacStatus ,
          address: user.address,
          id: user.id ,
          vaccine_available: user.vaccine_available
        });

        if (response.status === 200) {
          setMsg("");
          setMsgValid('Password reset successful!');
            navigate('/Login')
        } else {
          setMsg('Password reset failed. Please try again.');
        }
      }

      setSubmitting(false);
    } catch (error) {
      console.error('Error resetting password:', error);
      setMsg('Password reset failed. Please try again');
      setSubmitting(false);
    }
  };

  return (
    <div style={{backgroundImage:"url('https://images.unsplash.com/photo-1618015358954-344302f421a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80')", backgroundSize:"cover", backgroundPosition:"top"}}>
      <Header></Header>
      <button style={{height:"30px",width:"100px", backgroundColor:"aquamarine", borderRadius:"10px", marginTop:"10px"}} onClick={()=>navigate(-1)}>Back</button>
      <div style={{marginTop:"100px", height:"400px"}}>
      <h2>Reset Password</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
          <div>
          <MailIcon/>
            <Field className="FieldLogin" style={{height:"40px",padding:"7px", borderRadius:"10px", fontSize:"17px", margin:'10px'}} type="email" id="email" name="email" placeholder="Email-Id" />
            <ErrorMessage style={{color:"red"}} name="email" component="div" />
          </div>

          <div>
          <KeyIcon/>
            <Field  className="FieldLogin" style={{height:"40px",padding:"7px", borderRadius:"10px", fontSize:"17px", margin:'10px'}} type="password" id="password" name="password"  placeholder="Password"/>
            <ErrorMessage style={{color:"red"}} name="password" component="div" />
          </div>

          <div>
          <VpnKeyIcon/>
            <Field  className="FieldLogin" style={{height:"40px",padding:"7px", borderRadius:"10px", fontSize:"17px", margin:'10px'}} type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password"/>
            <ErrorMessage style={{color:"red"}} name="confirmPassword" component="div" />
          </div>

          <button style={{height:"50px", width:"200px",marginBottom:'20px', backgroundColor:"aquamarine", borderRadius:"20px", fontSize:"large", marginTop:"20px"}} type="submit">Reset Password</button>
        </Form>
      </Formik>
      <span style={{color:"red"}}>{msg}</span>
      <span style={{color:"green"}}>{msgValid}</span>
      </div>
      <Footer></Footer>
      <FooterEnd></FooterEnd>
    </div>
  );
};