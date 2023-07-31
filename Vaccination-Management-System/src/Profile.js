import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUser, getallUsers } from './/CrudCmps';
import './Profile.css'
import Header from './Header';
import Footer from './Footer';
import { FooterEnd } from './FooterEnd';
import { getOneUser } from './CrudCmps';
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';


 export const Profile =  () => {
    const navigate=useNavigate();
    const email=localStorage.getItem('email');
    const [user, setUser] = React.useState([]);

    React.useEffect(() => {
        getData();
      }, []);

    const getData = async () => {
    const abcs=await getOneUser('http://localhost:8000/users?email='+email);
    console.log(abcs.data[0]); 
    setUser(abcs.data[0]);    
  }


  const handleEdit=()=>
  {
    navigate('/updateProfile');
  }


   return (
     <div className="profile" style={{backgroundImage:"url('https://t3.ftcdn.net/jpg/03/70/97/82/360_F_370978227_vmmV0tX1UIGHtMWD2nmJ563YIblJS1PD.jpg')", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
        <Header></Header>
       <div className="profile-header" style={{backgroundImage:"url('')"}}>
        <div style={{float:"right"}}>
            <BorderColorTwoToneIcon onClick={handleEdit}></BorderColorTwoToneIcon>
        </div>
         <img
           src="https://th.bing.com/th?id=OIP.e1KNYwnuhNwNj7_-98yTRwHaF7&w=279&h=223&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
           alt="Profile Picture"
           className="profile-picture"
         />
         <div className="profile-details">
           <div className="detail">
             <strong>Name:</strong> {user.username}
           </div>
           <div className="detail">
             <strong>Email:</strong> {user.email}
           </div>
           <div className="detail">
             <strong>Mobile:</strong> {user.phone}
           </div>
           <div className="detail">
             <strong>Age:</strong> {user.age}
           </div>
           <div className="detail">
             <strong>Father Name:</strong> {user.fathername}
           </div>
           <div className="detail">
             <strong>Father's Age:</strong> {user.fatherAge}
           </div>
           <div className="detail">
             <strong>Mother Name:</strong> {user.mothername}
           </div>
           <div className="detail">
             <strong>Mother's Age:</strong> {user.motherAge}
           </div>
           <div className="detail">
             <strong>Address:</strong> {user.address}
           </div>
           
         </div>
       </div>
       <Footer></Footer>
       <FooterEnd></FooterEnd>
     </div>
   );
 };
 