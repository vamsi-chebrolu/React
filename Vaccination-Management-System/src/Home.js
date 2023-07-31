import React, {useEffect, useState} from "react";
import "./Home.css"
import { Link, useNavigate } from "react-router-dom";
import img2 from './bookyourslot.avif';
import { Cards } from "./Cards";
import { Resources } from "./Resources";
import Footer from "./Footer";
import Header from "./Header";
import { FooterEnd } from "./FooterEnd";
import { Availability } from "./Availability";
import caliblogo from'./CalibLogo.png'


 export function Home()
 {
    const [data, setData]=useState('');
    const history=useNavigate();
    const navigate=useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('email'))
        {   
            setData('Login');
        }
        else{
            setData('Logout')
        }
    },[]);
    function  handleChange()
    {
        if(data=="Logout"){
        localStorage.clear();
        setData('Login');
        }
        else navigate('/Login');
    }
    const handleBookSlot=()=>
    {
        if(data=='Login')
        {
            navigate('/Login');
        }
        else if(localStorage.getItem('email')=="admin@calibrum.com"){
            navigate('/adminDashboard')
        }
        else navigate('/slotBooking');
    }
    const handleDashboard=()=>{
        if(localStorage.getItem('email')=="admin@calibrum.com")
        {
            navigate('/adminDashboard');
        }
        else if(localStorage.getItem('email')){
            navigate('/Dashboard');
        }
        else{
            navigate('/Login');
        }
    }
    return(
            <>
            <div style={{margin:"0px 10px"}}>
                <div className="Home-header">
                    <Header></Header>
                </div>
                <nav className="Homenavbar">
                     <button className='Homenavmenu' onClick={()=>navigate('/')}>Home</button>
                     <button className='Homenavmenu' onClick={()=>navigate('/About')}>About</button>
                     <button className='Homenavmenu' onClick={handleDashboard}>Dashboard</button>
                     <button className='Homenavmenu' onClick={()=>navigate('/Help')}>Help?</button>
                     <button className="button" onClick={handleChange}>{data}</button>
                </nav>
                <div className="Home" style={{backgroundImage:"url('https://rxdx.in/wp-content/uploads/2021/10/vaccine-banner-1.jpg')"}}>
                    <div className="HomeFirst">
                        <h1>Welcome to Calibrum Vaccination Center</h1>
                        <p>Get you and your family safe from murbilca virus by getting vaccinated with us.</p>
                        <p>We have been spreading over 8 cities and ready to reach you even more closer</p>
                        <button onClick={handleDashboard}>Get Vaccine now</button>
                        <h2>Get Your Vaccine, Get Your Health</h2>
                    </div>
                </div>
                <div style={{height:"200px"}}>
                    <Availability></Availability>
                </div>
                <div className="steps">
                        <Cards></Cards>
                </div>
                <div className="bookyourslot">
                    <div className="pic">
                        <img src={img2}></img>
                    </div>
                    <div className="rest">
                        <h2 style={{marginBottom:"25px"}}>Get Vaccinated by Booking your Slot</h2>
                        <p></p>
                        <button onClick={handleBookSlot}>Book Your Slot</button>
                    </div>
                </div>
                <div style={{backgroundColor:"aquamarine", margin:"10px 0px 0px 0px"}}>
                    <Resources></Resources>
                </div>
                <div className="HomeFooter" style={{height:"auto", backgroundColor:"white", margin:"70px  0px 10px 0px"}}>
                    <Footer></Footer>
                </div>
                <div>
                    <FooterEnd></FooterEnd>
                </div>
                </div>
            </>
    )
 }