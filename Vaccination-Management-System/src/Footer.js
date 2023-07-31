import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className="footerTop">
      <div className="footer-container">
        <div className="footer-column">
          <h3>VACCINTION SERVICES</h3>
          <ul className='Flink'>
            <li><a href="#">Register Members</a></li>
            <li><a href="#">Search Vaccination Centres</a></li>
            <li><a href="#">Book Vaccination Slots</a></li>
            <li><a href="#">Manage Appointment</a></li>
            <li><a href="#">Download Certificate</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>PLATFORMS</h3>
          <ul className='Flink'>
            <li><a href="#">coWin International</a></li>
            <li><a href="#">Vaccinator</a></li>
            <li><a href="#">Department Login</a></li>
            <li><a href="#">Verify Certificates</a></li>
            <li><a href="#">Vaccination Statistics</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>RESOURCES</h3>
          <ul className='Flink'>
            <li><a href="#">Dos and Dont's</a></li>
            <li><a href="#">Overview</a></li>
            <li><a href="#">API Guidelines</a></li>
            <li><a href="#">Open APIs</a></li>
            <li><a href="#">Grievance Guidelines</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>SUPPORT</h3>
          <ul className='Flink'>
            <li><a href="#">Frequently Asked Questions</a></li>
            <li><a href="#">Certificate Corrections</a></li>
           
          </ul>
        </div>
        <div className="footer-column">
          <h3>CONTACT US</h3>
          <ul className='Flink'>
            <li><a href="#">Helpline:+91-11-239708046</a></li>
            <li><a href="#">Technical helpline: 0120-4783222</a></li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;