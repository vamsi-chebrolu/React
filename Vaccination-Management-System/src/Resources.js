import React from 'react';
import './Resources.css';


export const Service = ({ title, description }) => {
    return (
      <div className="Resservice">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };


  export const Card = ({ title, description, imageUrl }) => {
    return (
      <div className="Rescard">
        <img src={imageUrl} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  };

export const Resources = () => {

 const services = [
  {
    title: 'Vaccine Appointment Scheduling',
    description: 'Book vaccine appointments online with ease.',
  },
  {
    title: 'Eligibility and Priority Screening',
    description: 'Check eligibility and priority based on guidelines.',
  },
  {
    title: 'Vaccine Inventory Management',
    description: 'Efficiently manage vaccine stock and distribution.',
  },
  {
    title: 'Real-time Reporting and Analytics',
    description: 'Generate real-time reports on vaccination rates and data analysis.',
  },
  {
    title: 'Patient Data Management',
    description: 'Securely store and access comprehensive patient vaccination data.',
  },
  {
    title: 'Mobile Applications',
    description: 'Access vaccine services conveniently through mobile apps.',
  },
  {
    title: 'Vaccine Passport and Certificates',
    description: 'Issue digital vaccine passports and certificates for verification purposes.',
  },
  {
    title: 'Automated Reminders and Notifications',
    description: 'Receive automated reminders and notifications for appointments and updates.',
  },
  {
    title: 'Safety Monitoring and Reporting',
    description: 'Report and monitor adverse events following immunization (AEFI).',
  },
  {
    title: 'Public Communication and Education',
    description: 'Disseminate vaccine information and safety guidelines to the public.',
  }
  
];
  return (
    <div className="ResApp">
      <header className="ResApp-header">
        <h1>Services Provided</h1>
      </header>
      <div className="Resservices-container">
        {services.map((service, index) => (
          <Service key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
    
  );
};

