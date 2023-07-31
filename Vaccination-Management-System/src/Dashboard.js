import React, { useEffect } from 'react';
import './Dashboard.css'
import Header from './Header';
import { FooterEnd } from './FooterEnd';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { getOneUser } from './CrudCmps';
import useCalendarState from 'rsuite/esm/Calendar/useCalendarState';
import { Brightness1 } from '@mui/icons-material';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';

const cardStyle = {
  border: '2px solid #ddd',
  borderRadius: '5px',
  padding: '20px',
  width: '250px',
  textAlign: 'center',
  position: 'relative',
  color:"white",
};

const Card1 = ({ title, content, logoUrl }) => {
  return (
    <div style={cardStyle}>
      <CardLogo logoUrl={logoUrl} />
      <div>
        <h3>{title}</h3>
        <h3>{content}</h3>
      </div>
    </div>
  );
};

const logoStyle = {
  position: 'absolute',
  top: '10px',
  left: '10px', 
  width: '50px', 
  height: '50px',
};

const CardLogo = ({ logoUrl }) => {
  return <img src={logoUrl} alt="Card Logo" style={logoStyle} />;
};


export const Dashboard = () => {
    const [data, setData]=React.useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
      getData();
    },[])


    const getData=async ()=>{
      const response=await getOneUser('http://localhost:8000/vacDetails')
      console.log(response.data);
      setData(response.data);
    }


  const dashboardData = [
    {
      title: ' A1 REGISTRATIONS',
      content: data.noOfRegs,
      logoUrl: 'https://thumbs.dreamstime.com/b/multiple-file-document-icon-logo-design-element-multiple-file-document-icon-logo-design-element-white-background-122728126.jpg',
    },
    {
      title: '1 VACCINATIONS',
      content: data.noOfVacComp,
      logoUrl: 'https://cdn.vectorstock.com/i/preview-1x/83/65/covid19-19-vaccine-and-syringe-injection-vector-34818365.webp',
    },
    {
      title: 'AVAILABILITY',
      content: data.totalNoOfVac,
      logoUrl: 'https://media.istockphoto.com/id/1313607882/vector/isolated-vector-illustration-of-covid-vaccine-vial-in-flat-style-with-outline-glass-ampoule.jpg?s=1024x1024&w=is&k=20&c=xSHFHyzvJ4n9Di54QDfSwMQtbMaC8278knIcbBpa4Wg=',
    },
    {
      title: ' 1a Network in cities',
      content: data.noOfCities,
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Group_people_icon.svg',
    },
    
  ];
  return (
    <div className="DashboardApp">
      <Header></Header>
      <div className='userDashboardimg' style={{backgroundImage:"url('https://img.freepik.com/free-photo/covid-still-life-with-vaccine_23-2149079584.jpg')", padding:"50px", backgroundSize:"cover"}}>
      <div className="Dashboardcard-container">
        {dashboardData.map((card, index) => (
          <Card1
            key={index}
            title={card.title}
            content={card.content}
            logoUrl={card.logoUrl}
          />
        ))}
      </div>
      <div style={{margin:"98px 3px"}}>
      <button className='AdminButtons' onClick={()=>navigate('/profile')} title='view and update your profile'> Profile</button>
        <button className='AdminButtons' onClick={()=>navigate('/slotBooking')} title='Book slot for you and your family members'>Book slot</button>
        <button className='AdminButtons' onClick={()=>navigate('/updateSlotBooking')} title='Update slot for you and your family members'>Update slot</button>
        <button className='AdminButtons' onClick={()=>navigate('/certificate')}>Download Certificate</button>
      </div>
      </div>
      <Footer></Footer>
      <FooterEnd></FooterEnd>
    </div>
  );
};
