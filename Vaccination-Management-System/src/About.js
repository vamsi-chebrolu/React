import React from 'react';
import './AboutUs.css'
import Footer from './Footer';
import Header from './Header';
import { FooterEnd } from './FooterEnd';
export const Card = ({ title, description, imageUrl }) => {
    return (
      <div className="Aboutcard">
        <img src={imageUrl} alt={title} />
        <p className='Aboutp'>{description}</p>
      </div>
    );
  };
  

export const AboutUs = () => {
  const cardsData = [
    {
      title: 'Step 1',
      description: 'Calibrum Ltd, here we build software systems catering on various business needs. From startups to established businesses, our goal is to deliver tailor-made digital solutions that drive engagement and enhance user experience. Calibrums mission is to help organizations shape their future by bringing together people data, business data and A.I. in order to make real-time decisions and solve critical problems across the organization.',
      imageUrl: 'https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241210.jpg',
    },
    {
      title: 'Step 2',
      description: 'Calibrums collaborative research platform, Surveylet has been used in thousands of international Delphi studies, and has been singled out as the most innovative Real-time Delphi survey software in a recent Academic research paper authored by the worlds most prominent Delphi experts.',
      imageUrl: 'https://assets.entrepreneur.com/content/3x2/2000/20200123220110-GettyImages-1081869340.jpeg',
    },
    {
      title: 'step 3',
      description: 'We specialize in developing interactive web applications for a diverse range of clients. With a track record of successfully serving numerous businesses, I leverage cutting-edge technologies to deliver engaging and user-friendly digital solutions. Experienced web application developer skilled in crafting interactive digital experiences for multiple clients. Proficient in utilizing modern technologies to create dynamic and user-centric solutions, meeting the unique needs of each business.',
      imageUrl: 'https://www.netsolutions.com/insights/wp-content/uploads/2021/08/the-ultimate-mobile-app-architecture-guide.jpg',
    },
    {
      title: 'step 3',
      description: 'Developing a wide-range of interactive web applications for a diverse range of clients is our specialization. With a track record of successfully serving numerous businesses, I leverage cutting-edge technologies to deliver engaging and user-friendly digital solutions. Experienced web application developer skilled in crafting interactive digital experiences for multiple clients. Proficient in utilizing modern technologies to create dynamic and user-centric solutions, meeting the unique needs of each business',
      imageUrl: 'https://www.tigren.com/blog/wp-content/uploads/2022/01/responsive-web-design.jpg',
    },
  ];

  return(
    <div className="AboutUs">
      <Header></Header>
        <h1>About Us</h1>
      <div className="Aboutcard-container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
      <div style={{margin:"10px"}}>
        <Footer></Footer>
      </div>
      <FooterEnd></FooterEnd>
    </div>
  );
}