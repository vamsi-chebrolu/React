import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { FooterEnd } from './FooterEnd';
import { editOneUser, editUser,getallUsers, getOneUser } from './CrudCmps';
import { useNavigate } from 'react-router-dom';
import { Availability } from './Availability';
import './SlotBooking.css'


export const UpdateSlotBooking = () => {
  const email=localStorage.getItem('email');
  const [selectedSlot, setSelectedslot]=useState('')
  const today = new Date();
  const [user, setUser]=useState([]);
  const navigate=useNavigate();
  const [msg, setMsg]=useState();
  const [msg1, setMsg1]=useState();
  const [msg3, setMsg3]=useState();
  const [selectedDate, setSelectedDate] = useState(today);
  const [error, setError]=useState();
  const [selectedPerson, setSelectedPerson]=useState();
  const [selectedPerson2, setSelectedPerson2]=useState();
  const [isDisabled, setIsDisabled]=useState(false);
  const [jsonData, setJsonData] = useState([]);
  const [selectedState, setSelectedState] = useState('');

  useEffect(()=>
  {
    getData1();
  },[])

  const getData1=async ()=>{
    const response=await getallUsers('http://localhost:8000/cities')
    setJsonData(response.data);
    console.log(response.data);
  }


  useEffect(()=>
  {
    getData();
  },[])

  const getData= async ()=>
  {
    const response=await getOneUser('http://localhost:8000/users?email='+email);
    console.log(response.data[0]);
    setUser(response.data[0]);
  }

  const handleDateChange = (e) => {
    setSelectedDate(new Date(e.target.value));
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  
  const handleBooking=(e)=>
  { 
    e.preventDefault();
    if(selectedPerson=="user")
    {
    if(selectedSlot=="" || selectedDate=="" || selectedPerson=="" || selectedState=="")
    setMsg("Select all fields Properly")
    else {
    user.userSlotDate=formatDate(selectedDate);
    user.userSlotBooked="yes";
    user.userSlotTime=selectedSlot;
    user.userSlotLocation=selectedState;
    editOneUser('http://localhost:8000/users/'+user.id,user)
    setMsg1('SLotBooked Successfully on '+formatDate(selectedDate)+" at "+ selectedSlot+" in "+selectedState);
    }
    }
    else if(selectedPerson=="mother")
    {
      if(selectedSlot=="" || selectedDate=="" || selectedPerson=="" || selectedState=="")
    setMsg("Select all fields Properly")
    else {
    user.motherSlotDate=formatDate(selectedDate);
    user.motherSlotBooked="yes";
    user.motherSlotTime=selectedSlot;
    user.motherSlotLocation=selectedState;
    editOneUser('http://localhost:8000/users/'+user.id,user)
    setMsg1('SLotBooked Successfully on '+formatDate(selectedDate)+" at "+ selectedSlot+" in "+selectedState);

    }
    }
    else
    {
      if(selectedSlot=="" || selectedDate=="" || selectedPerson=="" || selectedState=="")
    setMsg("Select all fields Properly")
    else {
    user.fatherSlotDate=formatDate(selectedDate);
    user.fatherSlotBooked="yes";
    user.fatherSlotTime=selectedSlot;
    user.fatherSlotLocation=selectedState;
    editOneUser('http://localhost:8000/users/'+user.id,user)
    setMsg1('SLotBooked Successfully on '+formatDate(selectedDate)+" at "+ selectedSlot+" in "+selectedState);
    }
    }
  }

  const handleDelete=(e)=>{
    if(selectedPerson2=="father")
    {
      user.fatherSlotDate="no";
    user.fatherSlotBooked="no";
    user.fatherSlotTime="null";
    user.fatherSlotLocation="null";
    editOneUser('http://localhost:8000/users/'+user.id,user)
    setMsg3("SlotDeleted successfully");
    setTimeout(()=>setMsg3(""), 3000);
    }
    else if(selectedPerson2=="mother")
    {
      user.motherSlotDate="no";
    user.motherSlotBooked="no";
    user.motherSlotTime="null";
    user.motherSlotLocation="null";
    editOneUser('http://localhost:8000/users/'+user.id,user)
    setMsg3("SlotDeleted successfully");
    setTimeout(()=>setMsg3(""), 3000);
    }
  }

  const handleSlot=(e)=>
  {
    setSelectedslot(e.target.value);
  }

  const handlePersons=(e)=>
  {
    setSelectedPerson(e.target.value);
    setMsg("");
    // if(e.target.value=="user"){if(user.userSlotBooked=="yes"){setMsg("You have already booked the slot try to update that"); setIsDisabled(true)}}
    // else if(e.target.value=="father"){if(user.fatherSlotBooked=="yes"){setMsg("Your father has already booked the slot try to update that"); setIsDisabled(true)}}
    // else if(e.target.value=="mother"){if(user.motherSlotBooked=="yes"){setMsg("Your mother has already booked the slot try to update that"); setIsDisabled(true)}}
    // else {}
  }
  const handlePersons2=(e)=>
  {
    setSelectedPerson2(e.target.value);
    setMsg("");
  }

  const handleSelectCity= async (e)=>{ 
    if(await getOneUser('http://localhost:8000/cities?name='+e.target.value))
    {
      const response=await getOneUser('http://localhost:8000/cities?name='+e.target.value);
      console.log(response.data[0]);
      const data5=response.data[0];
      handleUpadteCity(data5, e);
    }
  }

  const handleUpadteCity=(data5, e)=>
  {
    
    if(data5.vaccine_available == "false")
    {
      setIsDisabled(true); 
      setMsg("Slots are not available in "+e.target.value);
    }
    else{
      setIsDisabled(false); 
      setMsg("");
    }
  }

  return (
    <div style={{backgroundImage:"url('https://t3.ftcdn.net/jpg/03/70/97/82/360_F_370978227_vmmV0tX1UIGHtMWD2nmJ563YIblJS1PD.jpg')", backgroundSize:"cover"}}>
    <Header></Header>
    <div style={{height:"auto", padding:"50px", paddingTop:"20px"}}>
    <button style={{height:"30px", width:"100px", borderRadius:"10px", fontSize:"large", backgroundColor:"aquamarine"}} onClick={()=>navigate(-1)}>Back</button>
    <div className='BookSelect'>
    <label>Select person:</label> <select onChange={handlePersons2}>
          <option value="">----Select the Person----</option>
          <option value="mother">Mother</option>
          <option value="father">Father</option>
        </select><br></br>
        <button onClick={handleDelete}>Delete Slot</button><br></br>
        <span style={{color:"green", fontSize:"larger"}}>{msg3}</span>
        </div>
    <div style={{height:"auto"}}><Availability></Availability></div>
    <div className='BookSelect'>
        <label>Select person:</label> <select onChange={handlePersons}>
          <option value="">----Select the Person----</option>
          <option value='user'>User/me</option>
          <option value="mother">Mother</option>
          <option value="father">Father</option>
        </select>
        <div>
          <label>Select State:</label>
            <select value={selectedState} onChange={(e)=>{setSelectedState(e.target.value); handleSelectCity(e);}}>
               <option value="">--Select State--</option>
              {jsonData &&
               jsonData.map((state) => (
                 <option key={state.id} value={state.name}>
                   {state.name}
                  </option>
               ))}
            </select>
        </div>
      <form>
      <label htmlFor="datePicker">Select a date:</label>
      <input required
        type="date"
        id="datePicker"
        min={formatDate(today)}
        value={formatDate(selectedDate)}
        onChange={handleDateChange}
      /><br></br>Select a slot: 
      <select value={selectedSlot} onChange={handleSlot} required>
        <option value="">----Select Slot----</option>
        <option value="09 AM">09 AM</option>
        <option value="11 AM">11 AM</option>
        <option value="02 PM">02 PM</option>
        <option value="04 PM">04 PM</option>
        <option value="06 PM">06 PM</option>
      </select><br></br>
      <button disabled={isDisabled} type='submit' onClick={handleBooking}>Book</button><br></br>
      <br></br><span style={{color:"red", fontSize:"larger"}}>{msg}</span>
      <span style={{color:"blue", fontSize:"larger"}}>{msg1}</span>
      </form>
    </div>
    </div>
    <Footer></Footer>
    <FooterEnd></FooterEnd>
    </div>
  );
};




















// import React, { useState, useEffect } from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import { FooterEnd } from './FooterEnd';
// import { editOneUser, editUser, getOneUser } from './CrudCmps';
// import { useNavigate } from 'react-router-dom';


// export const UpdateSlotBooking = () => {
//   const email=localStorage.getItem('email');
//   const [selectedSlot, setSelectedslot]=useState('')
//   const today = new Date();
//   const [user, setUser]=useState([]);
//   const navigate=useNavigate();
//   const [msg, setMsg]=useState();
//   const [selectedDate, setSelectedDate] = useState(today);
//   const [error, setError]=useState();
//   const [selectedPerson, setSelectedPerson]=useState();
//   const [isDisabled, setIsDisabled]=useState(false);


//   useEffect(()=>
//   {
//     getData();
//   },[])

//   const getData= async ()=>
//   {
//     const response=await getOneUser('http://localhost:8000/users?email='+email);
//     console.log(response.data[0]);
//     setUser(response.data[0]);
//   }

//   const handleDateChange = (e) => {
//     setSelectedDate(new Date(e.target.value));
//   };

//   const formatDate = (date) => {
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const day = String(date.getDate()).padStart(2, '0');
//     return `${year}-${month}-${day}`;
//   };
  
//   const handleBooking=(e)=>
//   { 
//     e.preventDefault();
//     if(selectedPerson=="user")
//     {
//     if(selectedSlot=="" || selectedDate=="")
//     setMsg("Select Date and slot Properly")
//     else {
//     user.userSlotDate=formatDate(selectedDate);
//     user.userSlotBooked="yes";
//     user.userSlotTime=selectedSlot;
//     editOneUser('http://localhost:8000/users/'+user.id,user)
//     setMsg('SLotBooked Successfully on'+formatDate(selectedDate));
//     }
//     }
//     else if(selectedPerson=="mother")
//     {
//       if(selectedSlot=="" || selectedDate=="")
//     setMsg("Select Date and slot Properly")
//     else {
//     user.motherSlotDate=formatDate(selectedDate);
//     user.motherSlotBooked="yes";
//     user.motherSlotTime=selectedSlot;
//     editOneUser('http://localhost:8000/users/'+user.id,user)
//     setMsg('SLotBooked Successfully on'+formatDate(selectedDate));

//     }
//     }
//     else
//     {
//       if(selectedSlot=="" || selectedDate=="")
//     setMsg("Select Date and slot Properly")
//     else {
//     user.fatherSlotDate=formatDate(selectedDate);
//     user.fatherSlotBooked="yes";
//     user.fatherSlotTime=selectedSlot;
//     editOneUser('http://localhost:8000/users/'+user.id,user)
//     setMsg('SLotBooked Successfully on'+formatDate(selectedDate));
//     }
//     }
//   }

//   const handleSlot=(e)=>
//   {
//     setSelectedslot(e.target.value);
//   }

//   const handlePersons=(e)=>
//   {
//     setSelectedPerson(e.target.value);
//   }

//   return (
//     <div>
//     <Header></Header>
//     <button onClick={()=>navigate(-1)}>Back</button>
//     <div className='BookSelect'>
//         <label>Select person:</label><select onChange={handlePersons}>
//           <option value="">----Select the Person----</option>
//           <option value='user'>User/me</option>
//           <option value="mother">Mother</option>
//           <option value="father">Father</option>
//         </select>
//       <form>
//       <label htmlFor="datePicker">Select a date:</label>
//       <input required
//         type="date"
//         id="datePicker"
//         min={formatDate(today)}
//         value={formatDate(selectedDate)}
//         onChange={handleDateChange}
//       /><br></br><label>Select a slot: </label>
//       <select value={selectedSlot} onChange={handleSlot} required>
//         <option value="">----Select Slot----</option>
//         <option value="09 AM">09 AM</option>
//         <option value="11 AM">11 AM</option>
//         <option value="02 PM">02 PM</option>
//         <option value="04 PM">04 PM</option>
//         <option value="06 PM">06 PM</option>
//       </select><br></br>
//       <button disabled={isDisabled} type='submit' onClick={handleBooking}>Book</button><br></br>
//       <br></br>{msg}
//       </form>
//     </div>
//     <Footer></Footer>
//     <FooterEnd></FooterEnd>
//     </div>
//   );
// };