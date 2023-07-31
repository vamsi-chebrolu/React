import React, { Fragment, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { editOneUser, getallUsers } from "./CrudCmps";
import { UpdateSlotsInCities } from "./UpdateSlotsInCities";
import Footer from "./Footer";
import Header from "./Header";
import './AdminUpdateVaccination.css'
import { FooterEnd } from "./FooterEnd";
import { hover } from "@testing-library/user-event/dist/hover";

export const AdminUpdateVaccination=()=>
{
    const [data, setData]=useState([]);
    const navigate=useNavigate();

    React.useEffect(() => {
        getData();
      }, []);

    const getData = async () => {
    const response=await getallUsers('http://localhost:8000/vacDetails'); 
    console.log(response.data);
    setData(response.data);
  }
  const handlechange=(e)=>
  {
    setData({...data, [e.target.name]: e.target.value});
  }
  const handleSubmit=(e)=>{
    setData({...data, ["noOfVacRemaining"]:data.totalNoOfVac-data.noOfVacComp})
    e.preventDefault();
    editOneUser('http://localhost:8000/vacDetails', data);

  }
  return(
    <Fragment>
        <Header></Header>
        <div style={{backgroundImage:"url('https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_724268_16623842477255214.jpg')", backgroundRepeat:"no-repeat", backgroundSize: "cover"}}>
            <div className="AdminUpdateVaccination">
                <div style={{margin:"5px"}}><label style={{fontSize:"17px"}}>No Of Vaccinations Completed:- </label><span style={{fontSize:"larger", fontWeight:500 }}>{data.noOfVacComp}</span><br></br></div>
                <div style={{margin:"5px"}}><label style={{fontSize:"17px"}}>Total No Of Vaccines Available:- </label><span style={{fontSize:"larger", fontWeight:500 }}>{data.totalNoOfVac}</span><br></br></div>
                <div style={{margin:"5px"}}><label style={{fontSize:"17px"}}>Total No Of Vaccines Remaining:- </label><span style={{fontSize:"larger", fontWeight:500 }}>{data.noOfVacRemaining}</span></div>
                <br></br>
                <input style={{height:"50px", width:"230px",padding:"5px", fontSize:"medium", borderRadius:"10px"}} type="number" name="totalNoOfVac" placeholder="Update Total no of Vaccines" onChange={handlechange}></input><br></br>
                {!data.totalNoOfVac && <span style={{color:"red"}}>Enter a Number</span>}<br></br>
                <button style={{marginBottom:"10px", height:"40px", width:"100px",borderRadius:"20px", backgroundColor:"aquamarine", hover:{backgroundColor:"green"}}} onClick={handleSubmit}>Update</button>
            </div>
            <div style={{marginBottom:"50px"}}>
                <UpdateSlotsInCities></UpdateSlotsInCities>
            </div>
            <Footer></Footer>
            <FooterEnd></FooterEnd>
        </div>
    </Fragment>
  )
}