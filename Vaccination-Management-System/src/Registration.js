import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Registration.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import KeyIcon from '@mui/icons-material/Key';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import ExposureIcon from '@mui/icons-material/Exposure';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { FooterEnd } from './FooterEnd';
import { editOneUser, getOneUser } from './CrudCmps';



export const RegisterYup = () => {
  const [msg, setMsg] = useState('');
  const navigate=useNavigate();
  const [data, setData]=React.useState([]);

    React.useEffect(()=>{
      getData();
    },[])


    const getData=async ()=>{
      const response=await getOneUser('http://localhost:8000/vacDetails')
      console.log(response.data);
      setData(response.data);
    }

  return (
    <div> <Header></Header>
    <div className='register-container'>
      <button className='regiterBackButton' onClick={()=>navigate(-1)}>Back</button>
      <div className='register-form'>
        <h1>Registration Page</h1>
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
            age: '',
            phone: '',
            fathername: '',
            mothername: '',
            fatherAge: '',
            motherAge: '',
            isAdmin: 'false',
            userSlotBooked: 'no',
            userSlotDate: "no",
            userSlotTime: "no",
            userSlotLocation: '',
            fatherSlotBooked: 'no',
            fatherSlotDate: "no",
            fatherSlotTime: "no",
            fatherSlotLocation: '',
            motherSlotBooked: 'no',
            motherSlotDate: "no",
            motherSlotTime: "no",
            motherSlotLocation: '',
            userVacStatus: 'no',
            fatherVacStatus: 'no',
            motherVacStatus: 'no',
            address: ''
          }}
          validate={(values) => {
            const errors = {};
            if (!values.address) {
              errors.address = 'required';
            }
            if (!values.fathername) {
              errors.fathername = 'required';
            }
            if (!values.mothername) {
              errors.mothername = 'required';
            }
            if (!values.username) {
              errors.username = 'required';
            } else if (values.username.length < 5) {
              errors.username = 'min of 5 characters Required';
            }
            if (!values.phone) {
              errors.phone = 'required';
            } else if (values.phone<1000000000 || values.phone>9999999999) {
              errors.phone = 'invalid mobile number';
            }
            if (!values.email) {
              errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Invalid email address';
            }
            if (!values.password) {
              errors.password = 'Required';
            } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(values.password)) {
              errors.password = '1 Uppercase,1 Lowercase,1 Spl character,1 Number, length:8';
            }
            if (!values.confirmPassword) {
              errors.confirmPassword = 'Required';
            } else if (values.confirmPassword && values.password !== values.confirmPassword) {
              errors.confirmPassword = 'Passwords do not match';
            }
            if (!values.age) {
              errors.age = 'Required';
            }
            else if(values.age>100)
            {
              errors.age="Enter correct age"
            }
            if (!values.fatherAge) {
              errors.fatherAge = 'Required';
            }
            else if(values.fatherAge>100)
            {
              errors.fatherAge="Enter correct age"
            }
            if (!values.motherAge) {
              errors.motherAge = 'Required';
            }
            else if(values.motherAge>100)
            {
              errors.motherAge="Enter correct age"
            }
            return errors;
          }}
          onSubmit={(values) => {
            fetch('http://localhost:8000/users', {
              method: 'POST',
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify(values),
            })
              .then((res) => res.json())
              .then(() => {
                values.username = '';
                values.email = '';
                values.password = '';
                values.confirmPassword = '';
                values.phone = '';
                values.fathername = '';
                values.fatherAge = '';
                values.motherAge = '';
                values.mothername = '';
                values.address = '';
                setMsg('Registration Successful');
                data.noOfRegs=parseInt(data.noOfRegs)+1;
                editOneUser('http://localhost:8000/vacDetails', data);
                setTimeout(()=>navigate('/Login'), 1000)
              });
          }}
          onReset={(values) => {
            values.username = '';
            values.email = '';
            values.password = '';
            values.confirmPassword = '';
            values.phone = '';
            values.fathername = '';
            values.fatherAge = '';
            values.motherAge = '';
            values.mothername = '';
            values.address = '';
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className='input-field'>
                <AccountCircleIcon />
                <Field type='text' name='username' placeholder='Username' />
              </div>
              <ErrorMessage className='error-message' name='username' component='div' />
              <div className='input-field'>
                <MailIcon/>
                <Field type='email' name='email' placeholder='Email' />
              </div>
              <ErrorMessage className='error-message' name='email' component='div' />
              <div className='input-field'>
               <MailIcon/>
                <Field 
                type="number" name='phone' placeholder='Mobile' autoComplete='off' />
              </div>
              <ErrorMessage className='error-message' name='phone' component='div' />
              <div className='input-field'>
                <KeyIcon/>
                <Field type='password' name='password' placeholder='Password' />
              </div>
              <ErrorMessage className='error-message' name='password' component='div' />
              <div className='input-field'>
                <VpnKeyIcon/>
                <Field type='password' name='confirmPassword' placeholder='ConfirmPassword' />
              </div>
              <ErrorMessage className='error-message' name='confirmPassword' component='div' />
              <div className='input-field'>
                <ExposureIcon/>
                <Field type='number' name='age' placeholder='age' />
              </div>
              <ErrorMessage className='error-message' name='age' component='div' />
              <div className='input-field'>
                <DriveFileRenameOutlineIcon/>
                <Field type='text' name='fathername' placeholder='Fathername' />
              </div>
              <ErrorMessage className='error-message' name='fathername' component='div' />
              <div className='input-field'>
              <ExposureIcon/>
                <Field type='number' name='fatherAge' placeholder='fatherAge' />
              </div>
              <ErrorMessage className='error-message' name='fatherAge' component='div' />
              <div className='input-field'>
              <DriveFileRenameOutlineIcon/>
                <Field type='text' name='mothername' placeholder='mothername' />
              </div>
              <ErrorMessage className='error-message' name='mothername' component='div' />
              <div className='input-field'>
              <ExposureIcon/>
                <Field type='number' name='motherAge' placeholder='motherAge' />
              </div>
              <ErrorMessage className='error-message' name='motherAge' component='div' />
              <div className='input-field'>
              <HomeIcon/>
                <Field type='text' name='address' placeholder='Address with pincode' />
              </div>
              <ErrorMessage className='error-message' name='address' component='div' />
              <br />
              <button type='reset'>Reset</button>
              <button type='submit' disabled={isSubmitting}>
                Register
              </button>
            </Form>
          )}
        </Formik>
        <a href='/Login'>Already have an account?</a>
        <h3 style={{ color: 'green' }}>{msg}</h3>
      </div>
      <div>
      
    </div>
    </div>
    <Footer></Footer>
   <FooterEnd></FooterEnd>
    </div>
  );
};