import React, {useEffect} from 'react';
import './AdminDashboard.css';
import Header from './Header';
import { FooterEnd } from './FooterEnd';
import Footer from './Footer';
import { getOneUser } from './CrudCmps';
import { useNavigate } from 'react-router-dom';

const cardStyle = {
  border: '2px solid #ddd',
  borderRadius: '5px',
  padding: '20px',
  width: '250px',
  textAlign: 'center',
  position: 'relative',
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

export const AdminDashboard = () => {
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
    title: ' AREGISTRATIONS',
    content: data.noOfRegs,
    logoUrl: 'https://thumbs.dreamstime.com/b/multiple-file-document-icon-logo-design-element-multiple-file-document-icon-logo-design-element-white-background-122728126.jpg',
  },
  {
    title: '1VACCINATIONS',
    content: data.noOfVacComp,
    logoUrl: 'https://cdn.vectorstock.com/i/preview-1x/83/65/covid19-19-vaccine-and-syringe-injection-vector-34818365.webp',
  },
  {
    title: 'AVAILABILITY',
    content: data.totalNoOfVac,
    logoUrl: 'https://media.istockphoto.com/id/1313607882/vector/isolated-vector-illustration-of-covid-vaccine-vial-in-flat-style-with-outline-glass-ampoule.jpg?s=1024x1024&w=is&k=20&c=xSHFHyzvJ4n9Di54QDfSwMQtbMaC8278knIcbBpa4Wg=',
  },
  {
    title: 'a1Network in cities',
    content: data.noOfCities,
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Group_people_icon.svg',
  },
    
  ];

  return (
    <div className="AdminDashboardApp">
      <Header></Header>
      <div style={{padding:"40px", height:"500px", backgroundImage:"url('https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_724268_16623842477255214.jpg')", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
        <div></div>
      <h1 style={{margin:"0px"}}>Admin Dashboard</h1>
      <div className="AdminDashboardcard-container">
        {dashboardData.map((card, index) => (
          <Card1
            key={index}
            title={card.title}
            content={card.content}
            logoUrl={card.logoUrl} // Provide the URL from the data for each card
          />
        ))}
      </div>
      <div style={{height:"auto", marginBottom:"100px", marginTop:"50px"}}>
        <button className='AdminButtons' onClick={()=>navigate('/getAllUsers')}>Manage User Data</button>
        <button className='AdminButtons' onClick={()=>navigate('/adminUpdateVaccination')}>Update Vaccinations</button>
      </div>
      </div>
      <Footer></Footer>
      <FooterEnd></FooterEnd>
    </div>
  );
};
