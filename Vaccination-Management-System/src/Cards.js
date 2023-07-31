import React from 'react';
import './Cards.css'

export const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export const Cards = () => {
  const cardsData = [
    {
      title: 'Step 1',
      description: 'Register and Book an appointment online in your Locality',
      imageUrl: 'https://th.bing.com/th/id/OIP.OiEpk_Av41TMG6H6bKBddwHaFT?w=248&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
    {
      title: 'Step 2',
      description: 'Get your vaccination safely at the right time of your appointment.',
      imageUrl: 'https://th.bing.com/th/id/OIP.efYB7KDbQ1siMoY5v7EHZgHaEK?w=295&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
    {
      title: 'step 3',
      description: 'After your status gets updated Download your vaccination certificate',
      imageUrl: 'https://th.bing.com/th/id/OIP.M1McJMW_f0pyriVLSVJClQHaEK?w=314&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
  ];

  return (
    <div className="cards">
        <h1>Get your vaccination done in 3 simple steps</h1>
      <div className="card-container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};
