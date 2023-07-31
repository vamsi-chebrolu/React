import React from 'react';
import './Header.css'; 
import logo from './Logo.jpeg.png';
import { useUpdateEffect } from 'rsuite/esm/utils';
import { getOneUser } from './CrudCmps';

const Header = () => {

  const [data, setData]=React.useState();
  const [name, setName]=React.useState();
  const [email, setEmail]=React.useState();

  React.useEffect(()=>
  {
    getData();
    setEmail(localStorage.getItem('email'));
  })

  const getData=(e)=>
  {
    if(email=="admin@calibrum.com")
    {
      setName("Hiii Admin !!");
    }
    else if(!localStorage.getItem('email')){
      setName("Welcome")
    }
    else if(getOneUser('http://localhost:8000/users?email='+email))
    {
      setName("Hello User !!");
    }
    
  }

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="links-container">
      <a href='#'className="header-link">{name}</a>
        <a href='/' className="header-link">Home</a>
        <a href='/help' className="header-link">FAQ</a>
      </div>
    </header>
  );
};

export default Header;