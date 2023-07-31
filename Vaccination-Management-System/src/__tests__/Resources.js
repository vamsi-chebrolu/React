import React from 'react';
import { render, screen } from '@testing-library/react';
import { Resources } from '../Resources';

test('renders services with correct title and description', () => {
  render(<Resources />);
  
  // Check if all services are rendered with correct title and description
  const services = [
    {
      title: 'Vaccine Appointment Scheduling',
      description: 'Book vaccine appointments online with ease.',
    },
    {
      title: 'Eligibility and Priority Screening',
      description: 'Check eligibility and priority based on guidelines.',
    },
    // Add all other services here...
  ];

  services.forEach((service) => {
    expect(screen.getByText(service.title)).toBeInTheDocument();
    expect(screen.getByText(service.description)).toBeInTheDocument();
  });
});

// You can add more test cases if needed, for example, testing if images are displayed correctly in the Card component.