import React, { useState } from 'react';
import './UpdateProfile.css';
import Header from './Header';
import Footer from './Footer';
import { FooterEnd } from './FooterEnd';
import { useNavigate } from 'react-router-dom';
import { editOneUser, getOneUser } from './CrudCmps';

export const UpdateProfile = () => {
  const [formData, setFormData] = useState([]);
  const [errors, setErrors] = useState();
  const navigate=useNavigate();
  const email=localStorage.getItem('email');

  React.useEffect(() => {
      getData();
    }, []);

  const getData = async () => {
  const abcs=await getOneUser('http://localhost:8000/users?email='+email);
  console.log(abcs.data[0]); 
  setFormData(abcs.data[0]);    
}



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      handleUpdateUserDetails(formData);
  }


  const handleUpdateUserDetails = (updatedData) => {
    setFormData((prevUser) => ({ ...prevUser, ...updatedData }));
    setErrors('User details updated successfully!');
    editOneUser('http://localhost:8000/users/'+formData.id,formData);
    setTimeout(() => {
      navigate(-1);
    }, 3000);
  };

  return (
    <>
    <Header></Header>
    <div style={{padding:"40px", backgroundImage:"url('https://t3.ftcdn.net/jpg/03/70/97/82/360_F_370978227_vmmV0tX1UIGHtMWD2nmJ563YIblJS1PD.jpg')",backgroundSize:"cover" }}>
    <button style={{height:"30px",width:"100px", backgroundColor:"aquamarine", borderRadius:"10px", marginBottom:"10px"}} onClick={()=>navigate(-1)}>Back</button>
    <form className="update-user-form" onSubmit={handleSubmit}>
      <label className="Updateinput-label">Username:</label>
      
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        className="Updatetext-input" 
      />
      {!formData.username  && <div className="Updateerror-message">Required with min of 5 characters</div> }
      
      <label className="Updateinput-label">Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="Updatetext-input"
      />
      {!formData.email ||  !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/i).test(formData.email) &&<div className="Updateerror-message">Required with validity</div>}

      <label className="Updateinput-label">Mobile Number:</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="Updatetext-input"
      />
      {formData.phone=="" || !/^\d{10}$/.test(formData.phone) && <div className="Updateerror-message">Required with valid number</div>}
      
      <label className="Updateinput-label">User Age:</label>
      <input
        type="tel"
        name="age"
        value={formData.age}
        onChange={handleChange}
        className="Updatetext-input"
      />
      {formData.age=="" || formData.age>100 && <div className="Updateerror-message">Required with proper age</div>}
      
      <label className="Updateinput-label">Mother's Name:</label>
      <input
        type="text"
        name="mothername"
        value={formData.mothername}
        onChange={handleChange}
        className="Updatetext-input"
      />
      {formData.mothername=="" && <div className="Updateerror-message">Required with min of 5 characters</div> }

      <label className="Updateinput-label">Mother Age:</label>
      <input
        type="tel"
        name="motherAge"
        value={formData.motherAge}
        onChange={handleChange}
        className="Updatetext-input"
      />
      {formData.motherAge=="" || !/^\d{2}$/.test(formData.motherAge) && <div className="Updateerror-message">Required with proper age</div>}

      <label className="Updateinput-label">Father's Name:</label>
      <input
        type="text"
        name="fathername"
        value={formData.fathername}
        onChange={handleChange}
        className="Updatetext-input"
      />
      {!formData.fathername && <div className="Updateerror-message">Required with min of 5 characters</div> }

      <label className="Updateinput-label">Father Age:</label>
      <input
        type="tel"
        name="fatherAge"
        value={formData.fatherAge}
        onChange={handleChange}
        className="Updatetext-input"
      />
      {!formData.fatherAge || !/^\d{2}$/.test(formData.fatherAge) && <div className="Updateerror-message">Required with proper age</div>}
      
      <label className="Updateinput-label">Address:</label>
      
      <textarea
        name="address"
        value={formData.address}
        onChange={handleChange}
        className="Updatetext-area-input"
      />
      {!formData.address && <div className="Updateerror-message">Required</div> }

      <button type="submit" className="Updatesubmit-button">
        Update Details
      </button><br></br>
      {errors}
    </form>
    </div>
    <div>
      <Footer></Footer>
      <FooterEnd></FooterEnd>
    </div>
    </>
  );
};
