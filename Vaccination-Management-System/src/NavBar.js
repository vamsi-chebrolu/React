import React from 'react';
import './NavBar.css'; 
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div style={{margin:"20px"}}>
    <nav className="navbar">
      <Link className='navmenu' style={{padding:"30px", textDecoration:"none"}} to='/'>Home</Link>
      <Link className='navmenu' style={{padding:"30px",  textDecoration:"none"}}  to='/About'>About</Link>
      <Link className='navmenu' style={{padding:"30px", textDecoration:"none"}}  to='/Dashboard'>Dashboard</Link>
      <Link className='navmenu' style={{padding:"30px", textDecoration:"none"}}  to='/Help'>Help?</Link>
      <Link className='navmenu' style={{padding:"30px 10px 30px 70px", textDecoration:"none"}}  to='/Help'>Register/Signup</Link>
    </nav>
    </div>
  );
};

export default NavBar;